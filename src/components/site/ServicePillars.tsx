const pillars = [
  {
    id: "strategy",
    number: "01",
    title: "Strategic Thinking & Execution Planning",
    body: "Translate ambition into a sharp, sequenced plan your organisation can actually run. Clarity on goals, cadence on delivery, discipline on outcomes.",
    points: ["Strategy design & alignment", "Execution operating rhythms", "Performance dashboards"],
  },
  {
    id: "people",
    number: "02",
    title: "People Development",
    body: "Equip leaders and teams with the mindset, skill and confidence to perform at the level your business demands — today and next.",
    points: ["Leadership development", "Coaching & mentoring", "High-performing teams"],
  },
  {
    id: "culture",
    number: "03",
    title: "Organisational Design & Culture Transformation",
    body: "Redesign the way work happens so structure, systems and culture stop limiting potential and start amplifying it.",
    points: ["Operating model design", "Culture diagnostics", "Change enablement"],
  },
];

export function ServicePillars() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] max-w-2xl leading-tight">
            Three practices. One integrated engine for growth.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          Engage a single pillar, or combine all three for aligned, end-to-end transformation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <article
            id={p.id}
            key={p.id}
            className="group relative flex flex-col rounded-3xl border border-border p-8 md:p-10 hover:border-[var(--cyan-accent)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,27,61,0.15)]"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-mono text-[var(--cyan-accent)]">{p.number}</span>
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-[var(--cyan-accent)] group-hover:border-[var(--cyan-accent)] group-hover:text-white transition-colors">
                →
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--navy)] leading-tight">{p.title}</h3>
            <p className="mt-4 text-muted-foreground">{p.body}</p>
            <ul className="mt-8 space-y-2 text-sm">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 items-center text-[var(--navy)]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan-accent)]" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
