import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedLightbulb } from "@/components/site/AnimatedAccents";
import {
  ClipboardList,
  Cog,
  TrendingUp,
  BarChart3,
  Users,
  CalendarCheck,
  Target,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/strategic-thinking")({
  head: () => ({
    meta: [
      { title: "Strategic Thinking & Execution Planning | ActionEDGE" },
      {
        name: "description",
        content:
          "Turning vision into focused, measurable action. We help leaders bridge the gap between strategy and results.",
      },
      { property: "og:title", content: "Strategic Thinking & Execution Planning | ActionEDGE" },
      { property: "og:description", content: "Sharp strategy. Disciplined execution. Compounding results." },
    ],
  }),
  component: StrategyPage,
});

const outcomes = [
  "Clarity & Strategic Direction",
  "Leadership Alignment",
  "Execution & Accountability",
  "Sustainable Results",
  "Business Growth & Performance",
  "Faster, Confident Decision-Making",
];

const offers = [
  { icon: ClipboardList, title: "Strategic Planning & Facilitation", body: "Align leadership teams around clear priorities, direction, and actionable goals." },
  { icon: Cog, title: "Execution Planning & Accountability", body: "Turn strategy into measurable action through structured implementation and follow-through." },
  { icon: TrendingUp, title: "Business Growth Strategy", body: "Identify opportunities and create focused strategies to accelerate sustainable growth." },
  { icon: BarChart3, title: "Sales and Performance Strategy", body: "Strengthen sales effectiveness and improve overall business performance." },
  { icon: Users, title: "Leadership Strategy Sessions", body: "Equip leaders with the clarity and strategic focus needed to drive results." },
  { icon: CalendarCheck, title: "Quarterly Planning", body: "Review progress, realign priorities, and build momentum for the next phase of growth." },
  { icon: Target, title: "Performance Alignment Workshops", body: "Improve alignment, communication, and accountability across teams and departments." },
  { icon: Briefcase, title: "Business Advisory & Consulting", body: "Provide strategic guidance and practical solutions to support business success and transformation." },
];

function StrategyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Strategic Thinking & Execution Planning"
        title="Turning Vision into Focused, Measurable Action"
        intro="Many organizations don't struggle because they lack ideas. They struggle because strategy is unclear, priorities are misaligned, and execution is inconsistent."
      />

      {/* Intro + outcomes */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <p className="text-lg text-[var(--brand-grey)] leading-relaxed max-w-5xl">
          At ActionEDGE, we help leaders bridge the gap between vision and results by creating
          focused strategies backed by practical execution. Whether you're refining your direction,
          aligning your leadership team, strengthening execution, or preparing for the next stage
          of growth, we help transform ideas into focused, measurable action.
        </p>



        <div className="mt-14 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <div className="mx-auto">
            <AnimatedLightbulb />
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {outcomes.map((o) => (
              <li
                key={o}
                className="flex items-center gap-3 rounded-full bg-[var(--brand-beige)]/10 border border-[var(--brand-green)]/15 px-5 py-3"
              >
                <span className="text-[var(--brand-blue)] text-xl leading-none">→</span>
                <span className="font-semibold text-[var(--brand-green)]">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Offers */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] mb-14">
            Our Strategy & Execution Offers
          </h2>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-2">
            {offers.map((o, i) => (
              <article
                key={o.title}
                className="group grid grid-cols-[auto_1fr] gap-6 items-start py-6 border-t border-[var(--brand-green)]/20 hover:bg-white/60 transition-colors rounded-lg px-2"
              >
                <span className="font-mono text-sm text-[var(--brand-blue)] pt-1 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <o.icon className="w-5 h-5 text-[var(--brand-green)]" strokeWidth={2} />
                    <h3 className="text-lg font-bold text-[var(--brand-green)] leading-tight">
                      {o.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[var(--brand-grey)] leading-relaxed">{o.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-grey)]">
          Turn Strategy Into Results
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-[var(--brand-green)] font-semibold leading-snug">
          Gain the clarity, structure, and accountability needed to turn your strategy into
          measurable results.
        </p>
        <a
          href="https://zcform.com/1Dr6r"
          target="_blank"
          rel="noreferrer"
          className="btn-pill-primary mt-10 inline-flex"
        >
          Schedule a Strategy Conversation
        </a>
      </section>
    </PageShell>
  );
}
