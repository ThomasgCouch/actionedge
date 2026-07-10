import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ActionEDGE TT" },
      {
        name: "description",
        content:
          "ActionEDGE TT partners with leaders to translate strategy into execution, develop people, and transform culture across Trinidad & Tobago and the Caribbean.",
      },
      { property: "og:title", content: "About — ActionEDGE TT" },
      { property: "og:description", content: "Who we are and how we help organisations grow." },
    ],
  }),
  component: AboutPage,
});

const values = ["Innovation", "Resilience", "Commitment", "Abundance", "Agility", "Fun"];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About ActionEDGE TT"
        title="We help leaders turn strategy, people and culture into measurable growth."
        intro="ActionEDGE TT is a leadership, strategy and people development consultancy. We combine world-class methodologies with behavioural science and instructional design to create solutions that are personalised, practical and built for real-world impact."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
            Our mission
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            To be the trusted partner leaders call on when the work matters most — aligning mission,
            strategy, business development, people and execution so organisations achieve
            sustainable, exponential growth.
          </p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
            How we work
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We meet leaders where they are, diagnose what's really slowing growth, then design
            interventions your team can actually run. Every engagement is grounded in evidence,
            tailored to your context, and measured on outcomes.
          </p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] max-w-3xl leading-tight">
            Six commitments that shape every engagement.
          </h2>
          <ul className="mt-10 flex flex-wrap gap-3">
            {values.map((v) => (
              <li
                key={v}
                className="px-5 py-2 rounded-full border border-[var(--navy)]/20 text-sm tracking-wide text-[var(--navy)]"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
