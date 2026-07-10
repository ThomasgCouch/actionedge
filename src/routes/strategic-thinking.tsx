import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/strategic-thinking")({
  head: () => ({
    meta: [
      { title: "Strategic Thinking & Execution Planning — ActionEDGE TT" },
      {
        name: "description",
        content:
          "Translate ambition into a sharp, sequenced plan your organisation can actually run. Clarity on goals, cadence on delivery, discipline on outcomes.",
      },
      {
        property: "og:title",
        content: "Strategic Thinking & Execution Planning — ActionEDGE TT",
      },
      {
        property: "og:description",
        content: "Sharp strategy. Disciplined execution. Compounding results.",
      },
    ],
  }),
  component: StrategyPage,
});

const offerings = [
  {
    title: "Strategy Design & Alignment",
    body: "Facilitated sessions that surface the real strategic questions and land on a shared, actionable plan the leadership team owns.",
  },
  {
    title: "Execution Operating Rhythms",
    body: "Weekly, monthly and quarterly cadences that keep priorities visible, decisions crisp, and accountability clear.",
  },
  {
    title: "Performance Dashboards",
    body: "Simple, focused metrics that link daily work to strategic outcomes — no vanity, no clutter.",
  },
];

function StrategyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Service 01"
        title="Strategic Thinking & Execution Planning"
        intro="Is poor execution slowing your growth? We translate ambition into a sharp, sequenced plan your organisation can actually run — with cadence on delivery and discipline on outcomes."
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

      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            When strategy and execution align, growth compounds.
          </h2>
          <div>
            <p className="text-lg text-white/70 leading-relaxed">
              We work shoulder-to-shoulder with your leadership team, embedding the tools and
              rhythms that turn a plan on paper into results in the market.
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
        </div>
      </section>
    </PageShell>
  );
}
