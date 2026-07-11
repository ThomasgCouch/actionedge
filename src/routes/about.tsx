import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ActionEDGE" },
      {
        name: "description",
        content:
          "ActionEDGE partners with leaders across the Caribbean to align strategy, people, culture, and execution for sustainable, measurable growth.",
      },
      { property: "og:title", content: "About — ActionEDGE" },
      { property: "og:description", content: "Our values, why leaders choose us, and 30+ year track record." },
    ],
  }),
  component: AboutPage,
});

const valueTiles = [
  { name: "Abundance", body: "We operate from possibility, creating growth, opportunity, and lasting value in everything we do.", tone: "green" },
  { name: "Fun", body: "We bring energy and enjoyment to the journey, because engaged people perform at their best.", tone: "grey" },
  { name: "Innovation", body: "We challenge the norm to deliver smarter, more effective ways to drive results.", tone: "green" },
  { name: "Agility", body: "We adapt quickly, think strategically, and respond effectively in a changing environment.", tone: "grey" },
  { name: "Resilience", body: "We stay focused and committed, navigating challenges with strength and consistency.", tone: "green" },
  { name: "Commitment", body: "We follow through with discipline and accountability to deliver meaningful, measurable outcomes.", tone: "grey" },
];

const reasons = [
  { title: "Holistic Approach", body: "We align strategy, leadership, culture, people, and execution to create sustainable business transformation — not isolated solutions." },
  { title: "Customized, Not Off-the-Shelf", body: "Every solution is designed around your people, strategy, culture, and business goals." },
  { title: "Measurable Impact", body: "Everything we do is designed to create practical, visible, and measurable business results." },
  { title: "Behaviour Change That Lasts", body: "Our approach goes beyond training to shift mindsets, habits, leadership, and performance." },
  { title: "World-Class Methodologies", body: "We combine innovative, globally recognized tools with practical business application that delivers real-world results." },
  { title: "Simplifying Complexity", body: "We break down complex challenges into clear, practical strategies that drive confident decision-making and action." },
];

const stats = [
  { figure: "300+", label: "Companies Coached", sub: "Across banking, energy, retail, manufacturing, education and services" },
  { figure: "200+", label: "Executive Coaching Engagements", sub: "Transforming C-suite and senior leadership capability" },
  { figure: "200+", label: "Leadership Programmes", sub: "Delivered across culture, leadership and critical thinking" },
  { figure: "1000+", label: "Regional Leaders", sub: "In our Caribbean coaching ecosystem" },
  { figure: "20%", label: "Annual Growth", sub: "Consistent year-over-year business expansion" },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About ActionEDGE"
        title="Growth is intentional, not accidental."
        intro="We partner with leaders across the Caribbean to align strategy, people, culture and execution."
      />

      {/* Commitment band */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">
        <p className="text-2xl md:text-3xl font-medium leading-snug text-[var(--brand-green)]">
          We bring clarity, energy, and an unwavering commitment to every partnership —
          consistently going beyond expectations to deliver meaningful, lasting impact.
        </p>
        <p className="text-lg text-[var(--brand-grey)] leading-relaxed">
          Our solutions are tailored, practical, and built for real-world execution — empowering
          individuals and organizations to perform at the highest level.
        </p>
      </section>

      {/* Values */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-14">
            Our Values Define Our Culture
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueTiles.map((v) => (
              <article
                key={v.name}
                className={`group relative rounded-[2rem] p-8 min-h-[220px] flex flex-col justify-center text-center overflow-hidden text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                  v.tone === "green" ? "bg-[var(--brand-green)]" : "bg-[var(--brand-grey)]"
                }`}
              >
                <h3 className="text-2xl font-bold transition-transform duration-500 group-hover:-translate-y-2">
                  {v.name}
                </h3>
                <p className="mt-3 text-sm text-white/95 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-out">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-14">
          Why Choose ActionEDGE?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <article
              key={r.title}
              className="group rounded-2xl border-2 border-[var(--brand-green)]/15 bg-white p-7 min-h-[220px] hover:border-[var(--brand-green)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-sm font-mono text-[var(--brand-blue)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold text-[var(--brand-green)] leading-tight">
                {r.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--brand-grey)] leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                {r.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-[var(--brand-grey)] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block rounded-2xl bg-[var(--brand-green)] px-8 py-4">
              <h2 className="text-2xl md:text-3xl font-bold">Our Track Record</h2>
            </div>
            <p className="mt-6 text-white/85 leading-relaxed">
              With over 30 years of excellence in leadership development and organizational
              transformation, ActionEDGE has established itself as the Caribbean's premier partner
              for sustainable business transformation.
            </p>
            <p className="mt-4 font-semibold tracking-wide uppercase text-sm">
              Proven Transformation. Measurable Results.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/20 pl-5">
                <div className="text-3xl md:text-4xl font-bold">{s.figure}</div>
                <div className="mt-2 text-sm font-semibold">{s.label}</div>
                <div className="mt-2 text-xs text-white/70 leading-relaxed">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-green)] leading-tight">
          Let's Build What's Next Together
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-[var(--brand-green)] leading-relaxed">
          Your next level starts with the right partner.
        </p>
        <p className="mt-4 text-lg text-[var(--brand-grey)] leading-relaxed max-w-3xl mx-auto">
          Whether you're developing your career, strengthening your leadership, or transforming
          your organization, we're here to help you achieve meaningful, measurable results.
        </p>
        <Link to="/contact" className="btn-pill-primary mt-10 inline-flex">
          Connect With ActionEDGE
        </Link>
      </section>
    </PageShell>
  );
}
