const values = ["Innovation", "Resilience", "Commitment", "Abundance", "Agility", "Fun"];

export function ApproachIntro() {
  return (
    <section id="approach" className="border-y border-border bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
          How We Deliver Results
        </p>
        <h2 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
          Mindsets shift.<br />
          Capability strengthens.<br />
          <span className="text-[var(--cyan-accent)]">Results compound.</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-5xl">
          <p className="text-lg text-white/70 leading-relaxed">
            Our approach is grounded in innovation, resilience, commitment, abundance, agility and fun —
            bringing together world-class methodologies, behavioural science, and instructional design to
            create solutions that are personalised, practical, relevant, and built for real-world impact.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Lasting success comes from alignment between mission, strategy, business development, people
            and execution. When that alignment happens, organisations don't just grow — they achieve
            sustainable, exponential growth.
          </p>
        </div>
        <ul className="mt-14 flex flex-wrap gap-3">
          {values.map((v) => (
            <li key={v} className="px-5 py-2 rounded-full border border-white/20 text-sm tracking-wide">
              {v}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
