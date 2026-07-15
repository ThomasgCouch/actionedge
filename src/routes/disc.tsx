import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedDisc } from "@/components/site/AnimatedAccents";
import { Target, Layers, Users } from "lucide-react";

export const Route = createFileRoute("/disc")({
  head: () => ({
    meta: [
      { title: "DISC Assessments | ActionEDGE" },
      {
        name: "description",
        content:
          "DISC assessments help leaders and teams understand behavioural styles, communicate better, and perform at a higher level.",
      },
      { property: "og:title", content: "DISC Assessments | ActionEDGE" },
      {
        property: "og:description",
        content: "Behavioural insight that drives stronger communication, teamwork and leadership.",
      },
    ],
  }),
  component: DiscPage,
});

const styles = [
  { letter: "D", name: "Dominance", color: "#E4572E" },
  { letter: "I", name: "Influence", color: "#F2B134" },
  { letter: "S", name: "Steadiness", color: "#4C9F70" },
  { letter: "C", name: "Conscientiousness", color: "#3B7BB8" },
];

const useCases = [
  {
    title: "Create World-Class Leaders",
    body: "Effective leadership requires more than experience. It demands continuous development, greater self-awareness, and the ability to lead people, navigate change, and inspire high performance.",
    tools: "Leadership and Leadership Effectiveness 360",
  },
  {
    title: "Improve Hiring and Selection",
    body: "Great hiring goes beyond resumes and interviews. Gain deeper insight into how candidates think, communicate, and perform so you can identify the right fit, reduce hiring risk, and build stronger teams.",
    tools: "Workplace and Executive Insights, and HireSense",
  },
  {
    title: "Increase Productivity",
    body: "Evaluate organizational performance through scientifically validated insights that identify strengths, performance gaps, and opportunities to improve leadership, culture, operations, training, and service delivery.",
    tools: "Organizational Development",
    toolLabel: "DISC Tool",
  },
  {
    title: "Increase Sales",
    body: "Empower your sales team to sell with greater confidence, adaptability, and impact. Through behavioural insights, they learn to recognize customer needs, strengthen relationships, and maximize their effectiveness throughout the sales journey.",
    tools: "Sales and Sales IQ Plus",
  },
  {
    title: "Reduce Employee Turnover",
    body: "Strengthen employee engagement by creating a culture where people feel recognized, supported, and motivated to contribute to shared organizational goals.",
    tools: "Motivators",
  },
  {
    title: "Create Connected Teams",
    body: "Develop teams that communicate effectively, embrace feedback, and build stronger working relationships through greater emotional intelligence and behavioural awareness.",
    tools: "Emotional Intelligence",
  },
  {
    title: "Build Core Competencies",
    body: "Build a stronger workforce by identifying the core competencies that drive success. Gain valuable insights into skills, behaviours, and development opportunities to improve performance, support strategic goals, and foster a culture of continuous growth.",
    tools: "Core Competency Index",
  },
  {
    title: "Model Team Building",
    body: "Build high-performing teams by matching complementary strengths, behavioural styles, and capabilities to improve collaboration, efficiency, and workplace culture.",
    tools: "Team Dynamics",
  },
  {
    title: "Boost Self-Awareness",
    body: "Greater self-awareness is the foundation of personal and professional growth. The DISC Awareness Assessment helps individuals understand their behavioural style, communication preferences, strengths, and development opportunities to improve collaboration and build stronger relationships.",
    tools: "Awareness",
    toolLabel: "DISC Tool",
  },
  {
    title: "Create Harmony Across Every Relationship",
    body: "DISC helps individuals, couples, parents, and children strengthen communication, deepen understanding, and create greater harmony in every relationship.",
    tools: "Kids, Relationships and Couples",
  },
];

const products = [
  {
    name: "DISC EIQ",
    body: "DISC explores how people behave, how they communicate, make decisions and interact with others. Emotional Intelligence explores how those behaviours are managed. Combining behavioural insight with emotional intelligence gives you a complete understanding of behaviour in action.",
  },
  {
    name: "DISC KIDS",
    body: "The Kids DISC assessment gives a deeper understanding of a child and their behaviour. Created especially for kids, using language that they understand. The Kids DISC report offers significant insights based on the assessment. With three distinct sections for kids, parents, and teachers, this report contains helpful information for the children and the adults in their lives.",
  },
  {
    name: "DISC 360",
    body: "Are you aware of how coworkers and direct reports perceive your actions and instincts? Completing a DISC 360° Assessment with feedback from others gives you and everyone applying leadership insights. Many leaders think their intentions and practices are clear, often overlooking costly misinterpretations. DISC 360° collects anonymous submitted, honest and transparent feedback to help better understand how others perceive you.",
  },
];

function DiscPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="DISC Assessments"
        title={
          <>
            Understand people. Communicate better.{" "}
            <span className="whitespace-nowrap">Perform higher.</span>
          </>
        }
        intro="DISC assessments help leaders and teams understand behavioural styles, communicate better, and perform at a higher level."
      />

      {/* D-I-S-C letters */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {styles.map((s) => (
            <article
              key={s.letter}
              className="rounded-3xl border-2 p-8 text-center bg-white hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ borderColor: s.color }}
            >
              <div
                className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-4xl font-bold text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.letter}
              </div>
              <h3 className="mt-5 text-xl font-bold" style={{ color: s.color }}>
                {s.name}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* What is DISC + What is it used for */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-[var(--brand-green)] text-white p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">What is DISC?</h3>
          <p className="text-white/90 leading-relaxed text-justify">
            While many associate DISC with personality types, it actually focuses on distinct
            behavioural styles, helping people understand how their behaviours affect
            communication, influence, interactions and decision-making. The DISC model is widely
            used for professional and personal development.
          </p>
        </div>
        <div className="rounded-3xl bg-[var(--brand-grey)] text-white p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">What is the DISC assessment used for?</h3>
          <p className="text-white/90 leading-relaxed text-justify">
            Whether you're the manager of a large or small organization, or an individual seeking
            communication skills, our DISC reports offer the greatest accuracy for a range of
            dynamic business applications.
          </p>
        </div>
      </section>

      {/* Three text blocks */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)] text-center mb-12">
            How We Deliver DISC
          </h2>
          <div className="space-y-4">
            <article className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-[var(--brand-green)]/10 hover:border-[var(--brand-green)]/30 hover:shadow-md transition-all">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--brand-green)]/10 flex items-center justify-center group-hover:bg-[var(--brand-green)] transition-colors">
                <Target className="w-6 h-6 text-[var(--brand-green)] group-hover:text-white transition-colors" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--brand-green)] mb-2">Customized, Results-Driven Application</h4>
                <p className="text-sm text-[var(--brand-grey)] leading-relaxed text-justify">
                  At ActionEDGE, DISC goes beyond a report. We help individuals and organizations
                  understand how to practically apply behavioural insights to improve leadership,
                  communication, team dynamics, hiring, and performance.
                </p>
              </div>
            </article>
            <article className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-[var(--brand-green)]/10 hover:border-[var(--brand-green)]/30 hover:shadow-md transition-all">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--brand-blue)]/10 flex items-center justify-center group-hover:bg-[var(--brand-blue)] transition-colors">
                <Layers className="w-6 h-6 text-[var(--brand-blue)] group-hover:text-white transition-colors" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--brand-green)] mb-2">Integrated Into Business Performance & Culture</h4>
                <p className="text-sm text-[var(--brand-grey)] leading-relaxed text-justify">
                  Our DISC solutions are aligned with leadership development, organizational culture,
                  sales performance, and team effectiveness, making the assessment a strategic
                  business tool, not just a personality test.
                </p>
              </div>
            </article>
            <article className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-[var(--brand-green)]/10 hover:border-[var(--brand-green)]/30 hover:shadow-md transition-all">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[var(--brand-grey)]/10 flex items-center justify-center group-hover:bg-[var(--brand-grey)] transition-colors">
                <Users className="w-6 h-6 text-[var(--brand-grey)] group-hover:text-white transition-colors" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[var(--brand-green)] mb-2">Coaching + Interpretation Support</h4>
                <p className="text-sm text-[var(--brand-grey)] leading-relaxed text-justify">
                  We don't just deliver assessments. We guide the interpretation through coaching
                  conversations, and actionable development strategies to ensure meaningful behavioural
                  change and growth.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)]">
            Where DISC Makes the Difference
          </h2>
          <p className="mt-4 text-lg text-[var(--brand-grey)]">
            Practical applications for leadership, teams, hiring, and relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {useCases.map((u, i) => (
            <article
              key={u.title}
              className="group relative rounded-3xl bg-white border border-[var(--brand-green)]/10 p-8 flex flex-col h-full hover:shadow-[0_12px_40px_-12px_color-mix(in_oklab,var(--brand-green)_20%,transparent)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-blue)] rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)] flex items-center justify-center text-sm font-bold group-hover:bg-[var(--brand-green)] group-hover:text-white transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-[var(--brand-green)] leading-tight">
                  {u.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--brand-grey)]/90 leading-relaxed text-justify flex-grow">
                {u.body}
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--brand-green)]/10">
                <p className="text-xs font-semibold tracking-wide text-[var(--brand-blue)] uppercase">
                  {(u.toolLabel ?? "DISC Tools")}: {u.tools}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-green)]/90 text-white p-8 md:p-10 flex items-center justify-center text-center shadow-lg">
          <p className="text-lg md:text-xl font-semibold leading-relaxed max-w-4xl">
            Explore our DISC solutions, receive a complimentary sample report, and book a free 1:1
            consultation to discover the right assessment for you or your organization.
          </p>
        </div>
      </section>


      {/* DISC products */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24 space-y-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-center rounded-3xl bg-white border border-[var(--brand-green)]/20 p-8"
            >
              <div className="rounded-2xl bg-[var(--brand-grey)] text-white text-2xl font-bold text-center py-8">
                {p.name}
              </div>
              <p className="text-[var(--brand-grey)] leading-relaxed text-justify">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24 text-center">
        <div className="flex justify-center mb-8">
          <AnimatedDisc />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)]">
          The right insight changes everything.
        </h2>
        <p className="mt-4 text-lg text-[var(--brand-grey)]">Explore the power of DISC today.</p>
        <a
          href="https://zcform.com/1Dr6r"
          target="_blank"
          rel="noreferrer"
          className="btn-pill-primary mt-10 inline-flex"
        >
          Click Here to Start a Conversation
        </a>
      </section>
    </PageShell>
  );
}
