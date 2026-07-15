import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import * as React from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | ActionEDGE" },
      {
        name: "description",
        content:
          "ActionEDGE partners with leaders across the Caribbean to align strategy, people, culture, and execution for sustainable, measurable growth.",
      },
      { property: "og:title", content: "About | ActionEDGE" },
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
  { title: "Holistic Approach", body: "We align strategy, leadership, culture, people, and execution to create sustainable business transformation, not isolated solutions." },
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

function AboutHeroAnimation() {
  return (
    <div className="w-full aspect-square overflow-hidden relative">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-green)" />
            <stop offset="100%" stopColor="var(--brand-blue)" />
          </linearGradient>
        </defs>

        {/* Soft background glow */}
        <rect x="20" y="20" width="360" height="360" rx="24" fill="var(--brand-blue)" fillOpacity="0.06" />

        {/* Ground / horizon line */}
        <line
          x1="0"
          y1="360"
          x2="400"
          y2="360"
          stroke="var(--brand-beige)"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.6"
        />

        {/* Growing stem */}
        <path
          d="M200,360 Q200,280 200,200"
          fill="none"
          stroke="url(#stemGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          className="about-stem"
          style={{ strokeDasharray: 170, strokeDashoffset: 170 }}
        />

        {/* Branches */}
        <path
          d="M200,280 Q160,250 140,220"
          fill="none"
          stroke="var(--brand-green)"
          strokeWidth="4"
          strokeLinecap="round"
          className="about-branch"
          style={{ strokeDasharray: 80, strokeDashoffset: 80 }}
        />
        <path
          d="M200,250 Q240,220 260,190"
          fill="none"
          stroke="var(--brand-blue)"
          strokeWidth="4"
          strokeLinecap="round"
          className="about-branch"
          style={{ strokeDasharray: 80, strokeDashoffset: 80 }}
        />

        {/* Leaves */}
        <g className="about-leaf" style={{ opacity: 0, transformOrigin: "140px 220px" }}>
          <ellipse cx="140" cy="220" rx="20" ry="10" fill="var(--brand-green)" transform="rotate(-30 140 220)" />
        </g>
        <g className="about-leaf" style={{ opacity: 0, transformOrigin: "260px 190px" }}>
          <ellipse cx="260" cy="190" rx="20" ry="10" fill="var(--brand-blue)" transform="rotate(30 260 190)" />
        </g>
        <g className="about-leaf" style={{ opacity: 0, transformOrigin: "200px 170px" }}>
          <ellipse cx="200" cy="170" rx="24" ry="12" fill="var(--brand-green)" transform="rotate(0 200 170)" />
        </g>

        {/* Orbiting connection nodes */}
        <circle cx="80" cy="300" r="5" fill="var(--brand-grey)" className="about-node" />
        <circle cx="320" cy="240" r="5" fill="var(--brand-grey)" className="about-node" />
        <circle cx="80" cy="180" r="5" fill="var(--brand-beige)" className="about-node" />
        <circle cx="320" cy="160" r="5" fill="var(--brand-beige)" className="about-node" />

        {/* Connecting pulses to the stem */}
        <path
          d="M80,300 Q140,290 200,280"
          fill="none"
          stroke="var(--brand-grey)"
          strokeWidth="2"
          opacity="0.5"
          className="about-pulse"
        />
        <path
          d="M320,240 Q260,245 200,250"
          fill="none"
          stroke="var(--brand-grey)"
          strokeWidth="2"
          opacity="0.5"
          className="about-pulse"
        />
        <path
          d="M80,180 Q140,185 200,200"
          fill="none"
          stroke="var(--brand-beige)"
          strokeWidth="2"
          opacity="0.5"
          className="about-pulse"
        />
        <path
          d="M320,160 Q260,180 200,220"
          fill="none"
          stroke="var(--brand-beige)"
          strokeWidth="2"
          opacity="0.5"
          className="about-pulse"
        />
      </svg>

      <style>{`
        @keyframes aboutGrowStem {
          0% { stroke-dashoffset: 170; }
          40% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes aboutGrowBranch {
          0%, 25% { stroke-dashoffset: 80; }
          60% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes aboutLeafIn {
          0%, 50% { opacity: 0; transform: scale(0.6); }
          70% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes aboutNodePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.6); opacity: 0.3; }
        }
        @keyframes aboutPulseLine {
          0% { opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { opacity: 0.2; }
        }
        .about-stem {
          animation: aboutGrowStem 5s ease-out infinite;
        }
        .about-branch {
          animation: aboutGrowBranch 5s ease-out infinite;
        }
        .about-leaf {
          animation: aboutLeafIn 5s ease-out infinite;
        }
        .about-node {
          animation: aboutNodePulse 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .about-pulse {
          animation: aboutPulseLine 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

function AboutPage() {
  const [activeValue, setActiveValue] = React.useState<number | null>(null);
  const [activeReason, setActiveReason] = React.useState<number | null>(null);

  const toggleValue = (i: number) => setActiveValue((prev) => (prev === i ? null : i));
  const toggleReason = (i: number) => setActiveReason((prev) => (prev === i ? null : i));

  return (
    <PageShell>
      {/* Hero with animation beside text */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="text-base uppercase tracking-[0.25em] text-[var(--brand-blue)] font-semibold mb-6">
                About ActionEDGE
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-green)] leading-tight">
                <span className="whitespace-nowrap">Growth is intentional,</span>{" "}
                <span className="whitespace-nowrap">not accidental.</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                We partner with leaders across the Caribbean to align strategy, people, culture and
                execution.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md">
              <AboutHeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment band */}
      <section className="bg-[var(--brand-blue)]/10">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28 text-center">
          <p className="text-2xl md:text-4xl font-medium leading-snug md:leading-tight text-[var(--brand-green)]">
            We bring clarity, energy, and an unwavering commitment to every partnership, consistently
            going beyond expectations to deliver meaningful, lasting impact.
          </p>
          <p className="mt-8 md:mt-10 text-lg md:text-xl text-[var(--brand-grey)] leading-relaxed max-w-3xl mx-auto">
            Our solutions are tailored, practical, and built for real-world execution, empowering
            individuals and organizations to perform at the highest level.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-14">
            Our Values Define Our Culture
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {valueTiles.map((v, i) => {
            const isActive = activeValue === i;
            return (
              <article
                key={v.name}
                onClick={() => toggleValue(i)}
                className={`group relative rounded-[2rem] p-8 min-h-[220px] flex flex-col justify-center text-center overflow-hidden text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                  v.tone === "green" ? "bg-[var(--brand-green)]" : "bg-[var(--brand-grey)]"
                } ${isActive ? "scale-[1.03] shadow-2xl" : ""}`}
              >
                <h3 className={`text-2xl font-bold transition-transform duration-500 ${isActive ? "-translate-y-2" : "group-hover:-translate-y-2"}`}>
                  {v.name}
                </h3>
                <p className={`mt-2 text-xs italic text-white/70 transition-all duration-300 ease-out ${isActive ? "opacity-0 max-h-0" : "opacity-100 group-hover:opacity-0 group-hover:max-h-0"}`}>
                  <span className="hidden md:inline">Hover to read more</span>
                  <span className="md:hidden">Tap to read more</span>
                </p>
                <p className={`mt-3 text-sm text-white/95 leading-relaxed transition-all duration-500 ease-out ${isActive ? "opacity-100 max-h-40" : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40"}`}>
                  {v.body}
                </p>
              </article>
            );
          })}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-14">
          Why Choose ActionEDGE?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const isActive = activeReason === i;
            return (
              <article
                key={r.title}
                onClick={() => toggleReason(i)}
                className={`group rounded-2xl border-2 border-[var(--brand-green)]/15 bg-white p-7 min-h-[220px] hover:border-[var(--brand-green)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${isActive ? "border-[var(--brand-green)] shadow-lg -translate-y-1" : ""}`}
              >
                <span className="text-sm font-mono text-[var(--brand-blue)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-[var(--brand-green)] leading-tight">
                  {r.title}
                </h3>
                <p className={`mt-2 text-xs italic text-[var(--brand-grey)]/60 transition-all duration-300 ease-out ${isActive ? "opacity-0 max-h-0 translate-y-1" : "opacity-100 group-hover:opacity-0 group-hover:max-h-0 group-hover:translate-y-1"}`}>
                  <span className="hidden md:inline">Hover to read more</span>
                  <span className="md:hidden">Tap to read more</span>
                </p>
                <p className={`mt-3 text-sm text-[var(--brand-grey)] leading-relaxed transition-all duration-500 ease-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"}`}>
                  {r.body}
                </p>
              </article>
            );
          })}
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
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 text-center">
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
