import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ActionEDGE TT" },
      {
        name: "description",
        content:
          "Join ActionEDGE TT for workshops, executive roundtables, and leadership intensives across the Caribbean.",
      },
      { property: "og:title", content: "Events — ActionEDGE TT" },
      { property: "og:description", content: "Upcoming workshops, roundtables and leadership experiences." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Events"
        title="Upcoming Events"
        intro="Workshops, roundtables, and leadership experiences designed to help you think sharper, lead better, and execute faster."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="rounded-3xl border border-[var(--brand-green)]/20 bg-white p-8 flex flex-col min-h-[280px] shadow-sm hover:shadow-md hover:border-[var(--brand-green)]/40 transition-all"
            >
              <span className="inline-flex w-fit px-3 py-1 rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)] text-xs font-semibold uppercase tracking-wider">
                Coming Soon
              </span>
              <h3 className="mt-6 text-xl font-bold text-[var(--brand-green)]">
                Event Title Placeholder {i}
              </h3>
              <p className="mt-3 text-muted-foreground flex-1">
                Details for this upcoming event will be posted here soon. Check back for dates,
                location, and registration information.
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--brand-green)]/10 flex items-center justify-between text-sm text-[var(--brand-green)]">
                <span>TBD</span>
                <span>Caribbean</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[var(--navy)] text-white p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Be the first to know when new events are announced.
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Join our mailing list for early access to workshops, roundtables, and executive
            coaching programmes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-pill-primary">
              Contact Us
            </Link>
            <a
              href="https://forms.gle/8HSoTGSvR9Crrg9H8"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-outline"
            >
              Join Mailing List
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
