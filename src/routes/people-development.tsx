import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/people-development")({
  head: () => ({
    meta: [
      { title: "People Development — ActionEDGE TT" },
      {
        name: "description",
        content:
          "Equip leaders and teams with the mindset, skill and confidence to perform at the level your business demands — today and next.",
      },
      { property: "og:title", content: "People Development — ActionEDGE TT" },
      {
        property: "og:description",
        content: "Leadership, coaching and team development built for real-world impact.",
      },
    ],
  }),
  component: PeoplePage,
});

const offerings = [
  {
    title: "Leadership Development",
    body: "Programmes that stretch emerging and senior leaders — grounded in behavioural science, tuned to your context.",
  },
  {
    title: "Coaching & Mentoring",
    body: "1:1 and group coaching that turns insight into habit, and habit into performance.",
  },
  {
    title: "High-Performing Teams",
    body: "Team charters, feedback rituals and DISC-informed dynamics that unlock collective performance.",
  },
];

function PeoplePage() {
  return (
    <PageShell>
      <PageHero
        title="People Development"
        intro="Are your people equipped to perform at the level your business demands? We build the mindset, skill and confidence your leaders and teams need — today and next."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <article key={o.title} className="rounded-3xl border border-border p-8 md:p-10">
              <span className="text-sm font-mono text-[var(--cyan-accent)]">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-[var(--navy)] leading-tight">
                {o.title}
              </h3>
              <p className="mt-4 text-muted-foreground">{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] max-w-3xl leading-tight">
            Learning that sticks — because it's built for how adults actually learn.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Every programme blends world-class methodologies with instructional design and
            behavioural science. Personalised, practical, relevant — and measured on the shift you
            see in the business.
          </p>
          <a
            href="https://zcform.com/1Dr6r"
            target="_blank"
            rel="noreferrer"
            className="btn-pill-primary mt-8 inline-flex"
          >
            Book a Discovery Call →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
