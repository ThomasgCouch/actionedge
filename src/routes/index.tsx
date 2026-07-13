import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { HeroRotator } from "@/components/site/HeroRotator";
import { Newsletter } from "@/components/site/Newsletter";
import { AnimatedRisingChart } from "@/components/site/AnimatedAccents";
import coachAsset from "@/assets/coach-indira.jpg.asset.json";
import ctaImg from "@/assets/home-cta.jpg";
import { Globe2, Trophy, ShieldCheck, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ActionEDGE | Strategy, People & Culture Transformation" },
      {
        name: "description",
        content:
          "ActionEDGE partners with Caribbean leaders to translate strategy into results, develop high-performing people, and build cultures that drive sustainable growth.",
      },
      { property: "og:title", content: "ActionEDGE | Strategy, People & Culture" },
      {
        property: "og:description",
        content: "Turning clarity into execution, and potential into measurable success.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    title: "Strategic Thinking & Execution Planning",
    to: "/strategic-thinking" as const,
    items: [
      "Strategic Planning & Facilitation",
      "Execution Planning & Accountability",
      "Sales & Performance Strategy",
      "Leadership Strategy Sessions",
      "Quarterly Planning",
      "Performance Alignment Workshops",
      "Business Advisory & Consulting",
    ],
  },
  {
    title: "People Development",
    to: "/people-development" as const,
    items: [
      "Leadership Coaching & Performance",
      "Group Business, Executive & Team Coaching",
      "Sales Training & Development",
      "Customized Training Solutions",
      "Hiring and Psychometric Tools",
      "Communication & Team Effectiveness",
      "Professional & Career Development",
    ],
  },
  {
    title: "Organizational Design & Culture Transformation",
    to: "/org-design-culture" as const,
    items: [
      "Organizational Design Consulting",
      "Culture Transformation Initiatives",
      "Team Alignment & Engagement",
      "Change Management Support",
      "Leadership & Culture Alignment",
      "Employee Experience & Performance Culture",
      "High-Performance Team Development",
    ],
  },
];

const coachStats = [
  { icon: Globe2, top: "30+ Years", body: "of leadership coaching and business transformation." },
  { icon: Trophy, top: "Multi-Award Winning Coach", body: "Recognized for excellence in coaching and leadership impact." },
  { icon: ShieldCheck, top: "Trusted by Leaders and Organizations", body: "Across the Caribbean and internationally across multiple industries." },
  { icon: Target, top: "Focused On Real Results", body: "Driving clarity, alignment and sustainable performance." },
];

function Home() {
  return (
    <PageShell>
      <HeroRotator />

      {/* How We Deliver Results */}
      <section className="bg-[var(--muted)] mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-18 text-center rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)]">
          How We Deliver Results
        </h2>
        <div className="mt-8 space-y-5 text-lg text-[var(--brand-grey)] leading-relaxed text-justify">
          <p>
            At ActionEDGE, our approach is grounded in innovation, resilience, commitment,
            abundance, agility and fun, bringing together world-class methodologies, behavioural
            science, and instructional design to create solutions that are personalized, practical,
            relevant, and built for real-world impact.
          </p>
          <p>
            We design experiences that shift mindsets, strengthen capability, and drive measurable
            results. Lasting success comes from alignment between mission, strategy, business
            development, people, and execution. And when that alignment happens, organizations
            don't just grow, they achieve sustainable, exponential growth.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <AnimatedRisingChart />
        </div>
      </section>

      {/* Building High Performance band */}
      <section className="bg-[var(--brand-grey)] text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block rounded-2xl bg-[var(--brand-green)] px-8 py-5">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Building High Performance, Driving Results
                <br />
                Across Individuals, Teams, and Organizations
              </h2>
            </div>
            <p className="mt-6 italic text-lg text-white/85">
              Every solution is designed using proven instructional design methodologies,
              behavioural science, and best-practice learning approaches to ensure measurable impact.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="rounded-3xl bg-[var(--brand-green)] p-8 flex flex-col h-full hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-xl font-bold text-center pb-4 border-b border-white/25 mb-5 min-h-[3.5rem] flex items-center justify-center">
                  {p.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-white/95 flex-1">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-white/70">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.to}
                  className="mt-auto inline-flex self-start px-5 py-2 rounded-full bg-white text-[var(--brand-green)] font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  Explore More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Master Coach */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-14">
            Meet Our Master Coach
          </h2>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-center">
            <div className="rounded-3xl overflow-hidden bg-white shadow-xl">
              <img
                src={coachAsset.url}
                alt="Dr. Indira Persad Couch"
                className="w-full h-full object-cover aspect-[3/4]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-base uppercase tracking-[0.25em] text-[var(--brand-blue)] font-semibold">
                Dr. Indira Persad Couch
              </p>
              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--brand-grey)] leading-tight">
                Recognized for <span className="text-[var(--brand-green)]">Impact That Matters</span>
              </h3>
              <p className="mt-5 text-lg text-[var(--brand-grey)] leading-relaxed">
                Across the Caribbean and internationally, her work has been acknowledged for
                excellence in leadership, coaching, and business transformation.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {coachStats.map((s) => (
                  <div
                    key={s.top}
                    className="rounded-2xl bg-white border border-[var(--brand-green)]/15 p-5"
                  >
                    <s.icon className="w-7 h-7 text-[var(--brand-green)]" />
                    <div className="mt-3 font-bold text-[var(--brand-green)] text-sm leading-snug">
                      {s.top}
                    </div>
                    <div className="mt-2 text-xs text-[var(--brand-grey)] leading-relaxed">
                      {s.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From strategy to leadership CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] leading-tight">
            From strategy to leadership, business growth to career success, we help you turn
            potential into measurable results.
          </h2>
          <a
            href="https://zcform.com/1Dr6r"
            target="_blank"
            rel="noreferrer"
            className="btn-pill-primary mt-8 inline-flex"
          >
            Book a Discovery Call
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
          <img src={ctaImg} alt="" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
        </div>
      </section>

      <Newsletter />
    </PageShell>
  );
}
