import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/org-design-culture")({
  head: () => ({
    meta: [
      { title: "Organisational Design & Culture Transformation — ActionEDGE TT" },
      {
        name: "description",
        content:
          "Redesign the way work happens so structure, systems and culture stop limiting potential and start amplifying it.",
      },
      {
        property: "og:title",
        content: "Organisational Design & Culture Transformation — ActionEDGE TT",
      },
      {
        property: "og:description",
        content: "Structure, systems and culture — realigned to amplify performance.",
      },
    ],
  }),
  component: OrgPage,
});

const offerings = [
  {
    title: "Operating Model Design",
    body: "Reshape roles, decision rights and structure so accountability lands where the work actually happens.",
  },
  {
    title: "Culture Diagnostics",
    body: "Evidence-based read on what your culture rewards today — and what it needs to reward tomorrow.",
  },
  {
    title: "Change Enablement",
    body: "Playbooks, coaching and communications that move people through change without stalling delivery.",
  },
];

function OrgPage() {
  return (
    <PageShell>
      <PageHero
        title="Organisational Design & Culture Transformation"
        intro="Is your culture strengthening performance — or silently limiting your potential? We redesign the way work happens so structure, systems and culture start amplifying growth."
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
            Culture eats strategy — unless you design them together.
          </h2>
          <div>
            <p className="text-lg text-white/70 leading-relaxed">
              We partner with executive teams to align structure, systems and culture with the
              strategy you're actually trying to execute — then embed the change so it holds.
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
