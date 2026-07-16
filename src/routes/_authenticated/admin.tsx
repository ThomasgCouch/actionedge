import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin | ActionEDGE" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

type EventRow = {
  id: string;
  title: string;
  badge: string;
  description: string;
  event_date: string;
  location: string;
  register_url: string | null;
  sort_order: number;
  image_url: string | null;
};

const emptyForm = {
  title: "",
  badge: "Coming Soon",
  description: "",
  event_date: "",
  location: "",
  register_url: "",
  sort_order: 0,
  image_url: "" as string,
};

function AdminPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");

  const load = useCallback(async () => {
    setLoading(true);
    const { data: userData } = await supabase.auth.getUser();
    setUserEmail(userData.user?.email ?? "");

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userData.user!.id);
    const admin = !!roles?.some((r) => r.role === "admin");
    setIsAdmin(admin);

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) setError(error.message);
    else setEvents((data ?? []) as EventRow[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function startNew() {
    setEditingId("new");
    setForm({ ...emptyForm, sort_order: (events.at(-1)?.sort_order ?? 0) + 1 });
    setError(null);
  }

  function startEdit(ev: EventRow) {
    setEditingId(ev.id);
    setForm({
      title: ev.title,
      badge: ev.badge,
      description: ev.description,
      event_date: ev.event_date,
      location: ev.location,
      register_url: ev.register_url ?? "",
      sort_order: ev.sort_order,
      image_url: ev.image_url ?? "",
    });
    setError(null);
  }

  function cancel() {
    setEditingId(null);
    setForm(emptyForm);
    setError(null);
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const payload = {
      title: form.title.trim(),
      badge: form.badge.trim() || "Coming Soon",
      description: form.description.trim(),
      event_date: form.event_date.trim(),
      location: form.location.trim(),
      register_url: form.register_url.trim() || null,
      sort_order: Number(form.sort_order) || 0,
      image_url: form.image_url.trim() || null,
    };
    try {
      if (editingId === "new") {
        const { error } = await supabase.from("events").insert(payload);
        if (error) throw error;
      } else if (editingId) {
        const { error } = await supabase.from("events").update(payload).eq("id", editingId);
        if (error) throw error;
      }
      cancel();
      await load();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Delete this event? This cannot be undone.")) return;
    const target = events.find((e) => e.id === id);
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      setError(error.message);
      return;
    }
    if (target?.image_url) {
      await supabase.storage.from("event-images").remove([target.image_url]);
    }
    await load();
  }

  async function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= events.length) return;
    const a = events[index];
    const b = events[target];
    // Optimistic UI
    const next = [...events];
    next[index] = { ...b, sort_order: a.sort_order };
    next[target] = { ...a, sort_order: b.sort_order };
    setEvents(next);
    // Two-step swap to avoid unique-index conflicts if ever added
    const tmp = -Math.abs(a.sort_order) - 1;
    const s1 = await supabase.from("events").update({ sort_order: tmp }).eq("id", a.id);
    if (s1.error) { setError(s1.error.message); await load(); return; }
    const s2 = await supabase.from("events").update({ sort_order: a.sort_order }).eq("id", b.id);
    if (s2.error) { setError(s2.error.message); await load(); return; }
    const s3 = await supabase.from("events").update({ sort_order: b.sort_order }).eq("id", a.id);
    if (s3.error) { setError(s3.error.message); await load(); return; }
    await load();
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)]">
              Manage Events
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Signed in as {userEmail}</p>
          </div>
          <button onClick={signOut} className="btn-pill-outline">
            Sign out
          </button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : isAdmin === false ? (
          <div className="rounded-2xl bg-white border border-red-300 p-6">
            <h2 className="font-bold text-red-700">Not authorized</h2>
            <p className="text-sm mt-2 text-muted-foreground">
              Your account does not have admin access. Contact the site owner.
            </p>
          </div>
        ) : (
          <>
            {!editingId && (
              <button onClick={startNew} className="btn-pill-primary mb-8">
                + Add new event
              </button>
            )}

            {editingId && (
              <form
                onSubmit={save}
                className="rounded-2xl bg-white border border-[var(--brand-green)]/20 p-6 md:p-8 mb-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[var(--brand-green)] mb-4">
                  {editingId === "new" ? "New event" : "Edit event"}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} required />
                  <Field label="Badge (e.g. Coming Soon)" value={form.badge} onChange={(v) => setForm({ ...form, badge: v })} />
                  <Field label="Date (e.g. March 14, 2027 or TBD)" value={form.event_date} onChange={(v) => setForm({ ...form, event_date: v })} required />
                  <Field label="Location" value={form.location} onChange={(v) => setForm({ ...form, location: v })} required />
                  <Field label="Register URL (optional)" value={form.register_url} onChange={(v) => setForm({ ...form, register_url: v })} />
                  <Field label="Display order (lower = first)" type="number" value={String(form.sort_order)} onChange={(v) => setForm({ ...form, sort_order: Number(v) })} />
                  <div className="md:col-span-2">
                    <label className="block">
                      <span className="text-sm font-semibold text-[var(--brand-grey)]">Description</span>
                      <textarea
                        required
                        rows={4}
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="mt-1 w-full rounded-xl border border-[var(--brand-grey)]/30 px-4 py-2.5 focus:border-[var(--brand-green)] outline-none"
                      />
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <ImageUpload
                      value={form.image_url}
                      onChange={(v) => setForm({ ...form, image_url: v })}
                    />
                  </div>
                </div>
                {error && <p className="text-sm text-red-600 mt-4">{error}</p>}
                <div className="mt-6 flex gap-3">
                  <button type="submit" disabled={saving} className="btn-pill-primary disabled:opacity-60">
                    {saving ? "Saving…" : "Save"}
                  </button>
                  <button type="button" onClick={cancel} className="btn-pill-outline">
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {events.length === 0 && (
                <p className="text-muted-foreground">No events yet. Click "Add new event" to create one.</p>
              )}
              {events.map((ev, index) => (
                <div
                  key={ev.id}
                  className="rounded-2xl bg-white border border-[var(--brand-green)]/15 p-5 flex flex-wrap items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-[240px] flex gap-3">
                    <EventThumb path={ev.image_url} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)] font-semibold uppercase tracking-wider">
                          {ev.badge}
                        </span>
                        <span className="text-xs text-muted-foreground">Position {index + 1}</span>
                      </div>
                      <h3 className="font-bold text-[var(--brand-green)] mt-2">{ev.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{ev.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {ev.event_date} · {ev.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => move(index, -1)}
                        disabled={index === 0}
                        title="Move up"
                        aria-label="Move up"
                        className="w-8 h-8 rounded-full border border-[var(--brand-grey)]/30 text-[var(--brand-grey)] hover:bg-[var(--brand-green)]/10 hover:text-[var(--brand-green)] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center leading-none"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => move(index, 1)}
                        disabled={index === events.length - 1}
                        title="Move down"
                        aria-label="Move down"
                        className="w-8 h-8 rounded-full border border-[var(--brand-grey)]/30 text-[var(--brand-grey)] hover:bg-[var(--brand-green)]/10 hover:text-[var(--brand-green)] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center leading-none"
                      >
                        ↓
                      </button>
                    </div>
                    <button onClick={() => startEdit(ev)} className="btn-pill-outline text-sm">
                      Edit
                    </button>
                    <button
                      onClick={() => remove(ev.id)}
                      className="text-sm px-4 py-2 rounded-full border border-red-300 text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </PageShell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[var(--brand-grey)]">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-[var(--brand-grey)]/30 px-4 py-2.5 focus:border-[var(--brand-green)] outline-none"
      />
    </label>
  );
}

function useSignedUrl(path: string | null | undefined) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    let cancelled = false;
    if (!path) { setUrl(null); return; }
    supabase.storage.from("event-images").createSignedUrl(path, 60 * 60).then(({ data }) => {
      if (!cancelled) setUrl(data?.signedUrl ?? null);
    });
    return () => { cancelled = true; };
  }, [path]);
  return url;
}

function ImageUpload({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const preview = useSignedUrl(value || null);

  async function handleFile(file: File) {
    setErr(null);
    if (!/^image\/(png|jpe?g|webp|gif|svg\+xml)$/.test(file.type)) {
      setErr("Please choose a PNG, JPG, WEBP, GIF or SVG image.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErr("Image must be under 5 MB.");
      return;
    }
    setUploading(true);
    const ext = file.name.split(".").pop() || "png";
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await supabase.storage.from("event-images").upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });
    setUploading(false);
    if (error) { setErr(error.message); return; }
    // Remove previous image if any
    if (value) {
      await supabase.storage.from("event-images").remove([value]);
    }
    onChange(path);
  }

  async function clearImage() {
    if (value) await supabase.storage.from("event-images").remove([value]);
    onChange("");
  }

  return (
    <div>
      <span className="text-sm font-semibold text-[var(--brand-grey)]">Event image / logo (optional)</span>
      <div className="mt-2 flex items-center gap-4 flex-wrap">
        {preview ? (
          <img src={preview} alt="Event preview" className="h-20 w-20 object-contain rounded-lg border border-[var(--brand-grey)]/20 bg-white" />
        ) : (
          <div className="h-20 w-20 rounded-lg border border-dashed border-[var(--brand-grey)]/30 flex items-center justify-center text-xs text-muted-foreground">
            No image
          </div>
        )}
        <label className="btn-pill-outline text-sm cursor-pointer">
          {uploading ? "Uploading…" : value ? "Replace" : "Upload image"}
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
            className="hidden"
            disabled={uploading}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
              e.target.value = "";
            }}
          />
        </label>
        {value && (
          <button type="button" onClick={clearImage} className="text-sm text-red-700 hover:underline">
            Remove
          </button>
        )}
      </div>
      {err && <p className="text-sm text-red-600 mt-2">{err}</p>}
      <p className="text-xs text-muted-foreground mt-2">PNG, JPG, WEBP, GIF or SVG. Max 5 MB. Square logos look best.</p>
    </div>
  );
}

function EventThumb({ path }: { path: string | null }) {
  const url = useSignedUrl(path);
  if (!url) return null;
  return (
    <img src={url} alt="" className="h-14 w-14 rounded-lg object-contain bg-white border border-[var(--brand-grey)]/15 shrink-0" />
  );
}
