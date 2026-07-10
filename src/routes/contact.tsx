import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ActionEDGE TT" },
      {
        name: "description",
        content:
          "Book a discovery call or join the ActionEDGE TT mailing list for workshops, insights and practical tips.",
      },
      { property: "og:title", content: "Contact — ActionEDGE TT" },
      { property: "og:description", content: "Let's talk about your next chapter of growth." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next chapter of growth."
        intro="Whether you're aligning strategy, building leaders, or reshaping culture — we'd love to hear what you're working on."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border p-10 flex flex-col">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-4">
            Book a Discovery Call
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--navy)]">
            30 minutes. Zero pressure. Real clarity.
          </h2>
          <p className="mt-4 text-muted-foreground flex-1">
            Tell us what's on your mind and we'll come prepared with sharp questions and a first
            read on where the highest-leverage moves live.
          </p>
          <a
            href="https://zcform.com/1Dr6r"
            target="_blank"
            rel="noreferrer"
            className="btn-pill-primary mt-8 self-start"
          >
            Book a Discovery Call →
          </a>
        </div>

        <div className="rounded-3xl bg-[var(--navy)] text-white p-10 flex flex-col">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-4">
            Join Our Mailing List
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Workshops, insights and practical tips — straight to your inbox.
          </h2>
          <p className="mt-4 text-white/70 flex-1">
            Stay informed. Stay ahead. Zero spam, unsubscribe anytime.
          </p>
          <a
            href="https://forms.gle/8HSoTGSvR9Crrg9H8"
            target="_blank"
            rel="noreferrer"
            className="btn-pill-primary mt-8 self-start"
          >
            Join Here →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
