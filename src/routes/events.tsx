import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ActionEDGE" },
      {
        name: "description",
        content:
          "Join ActionEDGE for workshops, executive roundtables, and leadership intensives across the Caribbean.",
      },
      { property: "og:title", content: "Events — ActionEDGE" },
      { property: "og:description", content: "Upcoming workshops, roundtables and leadership experiences." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell>
      <PageHero
        variant="green"
        title="Upcoming Events"
        subtitle="Transform the way you lead, communicate, and perform."
        intro="Register for an upcoming event and take the next step in your professional journey."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => {
            const isGreen = i === 1;
            return (
              <article
                key={i}
                className={`rounded-3xl p-8 flex flex-col min-h-[280px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all ${
                  isGreen
                    ? "bg-[var(--brand-green)] text-white border border-[var(--brand-green)]"
                    : "bg-white border border-[var(--brand-green)]/20 hover:border-[var(--brand-green)]/40"
                }`}
              >
                <span
                  className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    isGreen
                      ? "bg-white/20 text-white"
                      : "bg-[var(--brand-green)]/10 text-[var(--brand-green)]"
                  }`}
                >
                  Coming Soon
                </span>
                <h3
                  className={`mt-6 text-xl font-bold ${
                    isGreen ? "text-white" : "text-[var(--brand-green)]"
                  }`}
                >
                  Event Title Placeholder {i + 1}
                </h3>
                <p
                  className={`mt-3 flex-1 ${
                    isGreen ? "text-white/90" : "text-muted-foreground"
                  }`}
                >
                  Details for this upcoming event will be posted here soon. Check back for dates,
                  location, and registration information.
                </p>
                <div
                  className={`mt-6 pt-6 border-t flex items-center justify-between text-sm ${
                    isGreen
                      ? "border-white/25 text-white/90"
                      : "border-[var(--brand-green)]/10 text-[var(--brand-green)]"
                  }`}
                >
                  <span>TBD</span>
                  <span>Caribbean</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-[var(--brand-grey)] text-white p-10 md:p-14 text-center">
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
