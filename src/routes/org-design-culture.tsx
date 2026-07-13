import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedNetwork } from "@/components/site/AnimatedAccents";
import {
  Network,
  Globe2,
  Users,
  RefreshCcw,
  Compass,
  Sparkles,
  UserCheck,
  Rocket,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/org-design-culture")({
  head: () => ({
    meta: [
      { title: "Organizational Design & Culture Transformation | ActionEDGE" },
      {
        name: "description",
        content:
          "Building organizations that perform, align, and thrive. Structure, culture, and behaviours realigned for sustainable performance.",
      },
      {
        property: "og:title",
        content: "Organizational Design & Culture Transformation | ActionEDGE",
      },
      {
        property: "og:description",
        content: "Structure, systems and culture, realigned to amplify performance.",
      },
    ],
  }),
  component: OrgPage,
});

const outcomes = [
  "Organizational Alignment",
  "Accountability & Performance",
  "Culture & Behaviour Transformation",
  "Change & Transition Support",
  "Team Engagement & Collaboration",
  "Leadership Integration",
  "High-Performance Work Environments",
];

const offers = [
  { icon: Network, title: "Organizational Design Consulting", body: "Align structures, roles, and systems to support strategic goals and business growth." },
  { icon: Globe2, title: "Culture Transformation Initiatives", body: "Build stronger workplace cultures that reinforce performance, accountability, and engagement." },
  { icon: Users, title: "Team Alignment & Engagement", body: "Strengthen communication, collaboration, and alignment across teams and departments." },
  { icon: RefreshCcw, title: "Change Management Support", body: "Help leaders and teams successfully navigate organizational change and transition." },
  { icon: Compass, title: "Leadership & Culture Alignment", body: "Ensure leadership behaviours and organizational culture support the company's vision and goals." },
  { icon: UserCheck, title: "Workplace Behaviour & Accountability", body: "Develop environments that encourage ownership, professionalism, and consistent performance." },
  { icon: Sparkles, title: "Employee Experience & Performance Culture", body: "Improve workplace experience while strengthening productivity, engagement, and retention." },
  { icon: Rocket, title: "High-Performance Team Development", body: "Equip teams with the mindset, structure, and behaviours needed to perform at a higher level." },
  { icon: Star, title: "Workplace Culture & Values Alignment", body: "Align everyday behaviours with the values, standards, and identity your organization stands for." },
];

function OrgPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Organizational Design & Culture Transformation"
        title="Building Organizations That Perform, Align, and Thrive"
        intro="As organizations grow and evolve, success depends not only on strategy, but on having the right structure, culture, behaviours, and systems to support sustainable performance."
      />

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <p className="text-lg text-[var(--brand-grey)] leading-relaxed max-w-5xl">
          Align your leadership, people, and operations to build a stronger culture, improve
          collaboration, and create more effective ways of working.
        </p>


        <div className="mt-14 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
          <div className="mx-auto">
            <AnimatedNetwork />
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
            Our Organizational Design & Culture Transformation Offers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--brand-green)]/20 rounded-3xl overflow-hidden border border-[var(--brand-green)]/20">
            {offers.map((o) => (
              <article
                key={o.title}
                className="group relative bg-white p-8 hover:bg-[var(--brand-green)] transition-colors min-h-[220px] flex flex-col"
              >
                <o.icon
                  className="w-9 h-9 text-[var(--brand-green)] group-hover:text-white transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 text-lg font-bold text-[var(--brand-green)] group-hover:text-white leading-tight transition-colors">
                  {o.title}
                </h3>
                <p className="mt-2 text-xs italic text-[var(--brand-grey)]/60 group-hover:opacity-0 group-hover:max-h-0 group-hover:translate-y-1 transition-all duration-300 ease-out">
                  Hover to read more
                </p>
                <p className="mt-3 text-sm text-[var(--brand-grey)] group-hover:text-white/90 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-out">
                  {o.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-grey)]">
          Strengthen Your Organization from Within
        </h2>
        <p className="mt-8 text-xl md:text-2xl text-[var(--brand-green)] font-semibold leading-snug">
          Partner with us to build a resilient, high-performing organization positioned for
          sustainable growth and long-term success.
        </p>
        <a
          href="https://zcform.com/1Dr6r"
          target="_blank"
          rel="noreferrer"
          className="btn-pill-primary mt-10 inline-flex"
        >
          Explore Culture & Organization Support
        </a>
      </section>
    </PageShell>
  );
}
