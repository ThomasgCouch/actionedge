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
};

const emptyForm = {
  title: "",
  badge: "Coming Soon",
  description: "",
  event_date: "",
  location: "",
  register_url: "",
  sort_order: 0,
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
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      setError(error.message);
      return;
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
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="rounded-2xl bg-white border border-[var(--brand-green)]/15 p-5 flex flex-wrap items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-[240px]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)] font-semibold uppercase tracking-wider">
                        {ev.badge}
                      </span>
                      <span className="text-xs text-muted-foreground">#{ev.sort_order}</span>
                    </div>
                    <h3 className="font-bold text-[var(--brand-green)] mt-2">{ev.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{ev.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {ev.event_date} · {ev.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
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
