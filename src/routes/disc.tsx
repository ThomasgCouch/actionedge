import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/disc")({
  head: () => ({
    meta: [
      { title: "DISC Assessments — ActionEDGE TT" },
      {
        name: "description",
        content:
          "Use DISC to help leaders and teams understand behavioural styles, communicate better, and perform at a higher level.",
      },
      { property: "og:title", content: "DISC Assessments — ActionEDGE TT" },
      {
        property: "og:description",
        content: "Behavioural insight that drives stronger communication, teamwork and leadership.",
      },
    ],
  }),
  component: DiscPage,
});

const styles = [
  { letter: "D", name: "Dominance", body: "Direct, results-driven, decisive. Thrives on challenge." },
  { letter: "I", name: "Influence", body: "Enthusiastic, persuasive, people-oriented. Thrives on connection." },
  { letter: "S", name: "Steadiness", body: "Patient, loyal, dependable. Thrives on stability and support." },
  { letter: "C", name: "Conscientiousness", body: "Analytical, precise, quality-focused. Thrives on accuracy." },
];

function DiscPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="DISC Behavioural Assessments"
        title="Understand people. Communicate better. Perform higher."
        intro="DISC is a proven behavioural framework that helps individuals, leaders and teams understand how they show up, adapt to others, and unlock stronger performance together."
      />

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-4 gap-6">
          {styles.map((s) => (
            <article
              key={s.letter}
              className="rounded-3xl border border-border p-8 hover:border-[var(--cyan-accent)] transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--cyan-accent)] text-white flex items-center justify-center text-2xl font-bold">
                {s.letter}
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--navy)]">{s.name}</h3>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
              What you get with a DISC engagement
            </h2>
          </div>
          <ul className="space-y-4 text-lg text-[var(--navy)]/80">
            {[
              "Individual DISC profile and debrief for each participant",
              "Team map showing style distribution and blind spots",
              "Practical communication and coaching playbook",
              "Follow-up workshop to embed the language into daily work",
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-[var(--cyan-accent)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)]">
          Ready to run DISC with your team?
        </h2>
        <a
          href="https://zcform.com/1Dr6r"
          target="_blank"
          rel="noreferrer"
          className="btn-pill-primary mt-8 inline-flex"
        >
          Book a Discovery Call →
        </a>
      </section>
    </PageShell>
  );
}
