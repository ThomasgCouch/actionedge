import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedCalendar } from "@/components/site/AnimatedAccents";
import { events } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | ActionEDGE" },
      {
        name: "description",
        content:
          "Join ActionEDGE for workshops, executive roundtables, and leadership intensives across the Caribbean.",
      },
      { property: "og:title", content: "Events | ActionEDGE" },
      { property: "og:description", content: "Upcoming workshops, roundtables and leadership experiences." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Upcoming Events"
        title="Transform the way you lead, communicate, and perform."
        intro="Register for an upcoming event and take the next step in your professional journey."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-col items-center mb-12">
          <AnimatedCalendar />
        </div>
        {events.length === 0 ? (
          <div className="rounded-3xl border border-[var(--brand-green)]/20 bg-white p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-green)]">
              No events scheduled right now.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              New workshops and leadership experiences are on the way. Join our mailing list to be
              the first to hear when they're announced.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => {
              const isGreen = i % 3 === 1;
              return (
                <article
                  key={`${event.title}-${i}`}
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
                    {event.badge}
                  </span>
                  <h3
                    className={`mt-6 text-xl font-bold ${
                      isGreen ? "text-white" : "text-[var(--brand-green)]"
                    }`}
                  >
                    {event.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 ${
                      isGreen ? "text-white/90" : "text-muted-foreground"
                    }`}
                  >
                    {event.description}
                  </p>

                  {event.registerUrl && (
                    <a
                      href={event.registerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-6 inline-flex w-fit items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                        isGreen
                          ? "bg-white text-[var(--brand-green)] hover:bg-white/90"
                          : "bg-[var(--brand-green)] text-white hover:bg-[var(--brand-green)]/90"
                      }`}
                    >
                      Register →
                    </a>
                  )}

                  <div
                    className={`mt-6 pt-6 border-t flex items-center justify-between text-sm ${
                      isGreen
                        ? "border-white/25 text-white/90"
                        : "border-[var(--brand-green)]/10 text-[var(--brand-green)]"
                    }`}
                  >
                    <span>{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </article>
              );
            })}
          </div>
        )}

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
