import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import {
  Trophy,
  Briefcase,
  GraduationCap,
  LineChart,
  Users2,
  MessageSquare,
  Sparkles,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/people-development")({
  head: () => ({
    meta: [
      { title: "People Development — ActionEDGE" },
      {
        name: "description",
        content:
          "Developing people who drive performance. Leadership, coaching, sales training and team development built for real-world impact.",
      },
      { property: "og:title", content: "People Development — ActionEDGE" },
      { property: "og:description", content: "Invest in your greatest asset — your people." },
    ],
  }),
  component: PeoplePage,
});

const outcomes = [
  "Leadership & Performance",
  "Communication & Collaboration",
  "Coaching & Accountability",
  "Professional Growth",
  "Hiring and Talent Alignment",
  "Team Effectiveness",
];

const offers = [
  { icon: Trophy, title: "Leadership Coaching & Performance", body: "Develop leaders who deliver clear direction, results, and lasting impact." },
  { icon: Briefcase, title: "Business Coaching", body: "Support business owners and professionals to grow, execute and lead more strategically." },
  { icon: GraduationCap, title: "Customized Training Solutions", body: "Tailored learning experiences designed around your team's real-world challenges." },
  { icon: LineChart, title: "Sales Training & Development", body: "Strengthen sales mindset, conversations, and performance across the funnel." },
  { icon: Users2, title: "Executive & Team Coaching", body: "One-on-one and team coaching to accelerate performance and cohesion at the top." },
  { icon: MessageSquare, title: "Communication & Team Effectiveness", body: "Improve self-awareness, team dynamics, and interpersonal effectiveness at every level." },
  { icon: Sparkles, title: "Professional & Career Development", body: "Equip individuals with the tools, mindset, and confidence to grow their careers." },
  { icon: HeartHandshake, title: "Wellness & Psychometric Tools", body: "Insight-driven tools to support wellbeing, self-awareness, and behavioural change." },
];

function PeoplePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="People Development"
        title="Developing People Who Drive Performance"
        intro="Strong organizations are built by strong people. At ActionEDGE, we help individuals, leaders, and teams strengthen the skills, mindset, communication, and behaviours needed to perform at a higher level."
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <p className="text-lg text-[var(--brand-grey)] leading-relaxed max-w-5xl">
          Strong organizations are built by strong people. At ActionEDGE, we help individuals,
          leaders, and teams strengthen the skills, mindset, communication, and behaviours needed
          to perform at a higher level. Our approach combines instructional design, behavioural
          insight, and real-world application to ensure development translates into lasting
          performance and impact.
        </p>

        <div className="mt-14 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="mx-auto">
            <ArrowUpRight className="w-32 h-32 text-[var(--brand-green)]" strokeWidth={1.2} />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-14">
            Our People Development Offers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {offers.map((o) => (
              <article
                key={o.title}
                className="rounded-2xl bg-white border border-[var(--brand-green)]/15 p-6 hover:border-[var(--brand-green)] hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <o.icon className="w-10 h-10 text-[var(--brand-green)]" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-bold text-[var(--brand-green)] leading-tight">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-grey)] leading-relaxed">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-grey)]">
          Invest in Your Greatest Asset — Your People
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-[var(--brand-green)] font-semibold leading-snug">
          Develop the leadership, confidence, and capability to perform at your highest level and
          achieve meaningful, measurable results.
        </p>
        <a
          href="https://zcform.com/1Dr6r"
          target="_blank"
          rel="noreferrer"
          className="btn-pill-primary mt-10 inline-flex"
        >
          Choose a Leadership Development Solution
        </a>
      </section>
    </PageShell>
  );
}
