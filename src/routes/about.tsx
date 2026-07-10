import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import philosophyImg from "@/assets/philosophy.jpg";
import valuesImg from "@/assets/values.jpg";
import whyChooseImg from "@/assets/why-choose.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ActionEDGE TT" },
      {
        name: "description",
        content:
          "ActionEDGE TT partners with leaders across the Caribbean to align strategy, people, culture, and execution for sustainable, measurable growth.",
      },
      { property: "og:title", content: "About — ActionEDGE TT" },
      { property: "og:description", content: "Our philosophy, values, and 30+ year track record." },
    ],
  }),
  component: AboutPage,
});

const values = ["Innovation", "Resilience", "Commitment", "Abundance", "Agility", "Fun"];

const reasons = [
  {
    title: "Holistic Approach",
    body: "We align strategy, leadership, culture, people, and execution to create sustainable business transformation — not isolated solutions.",
  },
  {
    title: "Customized, Not Off-the-Shelf",
    body: "Every solution is designed around your people, strategy, culture, and business goals.",
  },
  {
    title: "Measurable Impact",
    body: "Everything we do is designed to create practical, visible, and measurable business results.",
  },
  {
    title: "Behaviour Change That Lasts",
    body: "Our approach goes beyond training to shift mindsets, habits, leadership, and performance.",
  },
  {
    title: "World-Class Methodologies",
    body: "We combine innovative, globally recognized tools with practical business application that delivers real-world results.",
  },
  {
    title: "Simplifying Complexity",
    body: "We break down complex challenges into clear, practical strategies that drive confident decision-making and action.",
  },
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
        eyebrow="About ActionEDGE TT"
        title="Growth is intentional, not accidental."
        intro="We partner with leaders and organizations across the Caribbean to align strategy, people, culture and execution — turning ambition into measurable, lasting impact."
      />

      {/* Block 1 — Philosophy */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
            At ActionEDGE, we believe growth is intentional, not accidental.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Organizations don't succeed because of strategy alone, but because of how well their
              people think, act, and execute.
            </p>
            <p>
              We believe in creating abundance by building organizations that are clear in direction,
              disciplined in execution, and agile in response to change.
            </p>
            <p>
              When leadership is aligned, teams are empowered, and systems are structured,
              performance follows.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-secondary border border-border p-8 md:p-12">
          <img
            src={philosophyImg}
            alt="Team collaborating around a growth chart"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Block 2 — Commitment */}
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-14">
          <p className="text-2xl md:text-3xl font-medium leading-snug">
            We bring clarity, energy, and an unwavering commitment to every partnership —
            consistently going beyond expectations to deliver meaningful, lasting impact.
          </p>
          <p className="text-lg text-white/80 leading-relaxed md:pt-3">
            Our solutions are tailored, practical, and built for real-world execution — empowering
            individuals and organizations to perform at the highest level.
          </p>
        </div>
      </section>

      {/* Block 3 — Values */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <div className="order-2 md:order-1 rounded-[2rem] bg-secondary border border-border p-8 md:p-12">
          <img
            src={valuesImg}
            alt="Illustration of our company values"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
            Our values define our culture.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Six commitments guide how we show up for our clients, our partners, and each other.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
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

      {/* Block 4 — Why choose */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 items-start mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
                Why Choose ActionEDGE?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
                Six reasons leaders choose us as their transformation partner.
              </h2>
              <div className="mt-10 rounded-[2rem] bg-white border border-border p-8">
                <img
                  src={whyChooseImg}
                  alt="Partnership and business growth illustration"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <article
                  key={r.title}
                  className="group rounded-2xl border border-border bg-white p-6 hover:border-[var(--cyan-accent)] transition-colors overflow-hidden"
                >
                  <span className="text-sm font-mono text-[var(--cyan-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[var(--navy)] leading-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-out">
                    {r.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Block 5 — Track record */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
            Our Track Record
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] leading-tight">
            Proven transformation. Measurable results.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            With over 30 years of excellence in leadership development and organizational
            transformation, ActionEDGE TT has established itself as the Caribbean's premier partner
            for sustainable business transformation.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border p-6 hover:border-[var(--cyan-accent)] transition-colors"
            >
              <div className="text-4xl font-bold text-[var(--cyan-accent)]">{s.figure}</div>
              <div className="mt-3 text-sm font-semibold text-[var(--navy)]">{s.label}</div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Block 6 — CTA */}
      <section className="bg-[var(--navy)] text-white">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-20 md:py-28 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's build what's next together.
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you're an individual seeking growth, a leader developing your team, or an
            organization ready to strengthen performance and culture — we're here to help you move
            forward with clarity, strategy, and impact.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-pill-primary">
              Let's Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
