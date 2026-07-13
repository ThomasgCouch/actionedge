import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedDisc } from "@/components/site/AnimatedAccents";

export const Route = createFileRoute("/disc")({
  head: () => ({
    meta: [
      { title: "DISC Assessments — ActionEDGE" },
      {
        name: "description",
        content:
          "DISC assessments help leaders and teams understand behavioural styles, communicate better, and perform at a higher level.",
      },
      { property: "og:title", content: "DISC Assessments — ActionEDGE" },
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
    title: "Leadership Development",
    body: "The more leaders understand themselves, the more equipped they are to lead others. DISC provides deep insight into their own behavioural tendencies, strengths, and the impact they have on others.",
  },
  {
    title: "Hiring & Selection",
    body: "DISC helps organizations select candidates whose behavioural style aligns with the role. Reduce turnover, boost retention, and hire with confidence.",
  },
  {
    title: "Performance Evaluation",
    body: "The tools to identify strengths and struggles before they become barriers. In the workplace, they establish clear benchmarks for improvement.",
  },
  {
    title: "Sales Training",
    body: "DISC training is used to help sales teams identify observable behaviours of a customer and adapt their approach to match the customer's buying style.",
  },
  {
    title: "Communication Management",
    body: "Use DISC to help clarify and understand where conflict arises, when better behavioural styles improve your team's communication, engagement, and long-term success.",
  },
  {
    title: "Customer Service",
    body: "Use DISC to fine-tune how to exceed customer expectations. Convert every service interaction into a positive experience — regardless of the customer's buying style.",
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
        title="Understand people. Communicate better. Perform higher."
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
          <p className="text-white/90 leading-relaxed">
            While many associate DISC with personality types, it actually focuses on distinct
            behavioural styles, helping people understand how their behaviours affect
            communication, influence, interactions and decision-making. The DISC model is widely
            used for professional and personal development.
          </p>
        </div>
        <div className="rounded-3xl bg-[var(--brand-grey)] text-white p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-4">What is the DISC assessment used for?</h3>
          <p className="text-white/90 leading-relaxed">
            Whether you're the manager of a large or small organization, or an individual seeking
            communication skills, our DISC reports offer the greatest accuracy for a range of
            dynamic business applications.
          </p>
        </div>
      </section>

      {/* Three text blocks */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-[var(--brand-green)] mb-2">Customized, Results-Driven Application</h4>
            <p className="text-sm text-[var(--brand-grey)] leading-relaxed">
              At ActionEDGE, DISC goes beyond a report. We help individuals and organizations
              understand how to practically apply behavioural insights to improve leadership,
              communication, team dynamics, hiring, and performance.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--brand-green)] mb-2">Integrated Into Business Performance & Culture</h4>
            <p className="text-sm text-[var(--brand-grey)] leading-relaxed">
              Our DISC solutions are aligned with leadership development, organizational culture,
              sales performance, and team effectiveness — making the assessment a strategic
              business tool, not just a personality test.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[var(--brand-green)] mb-2">Coaching + Interpretation Support</h4>
            <p className="text-sm text-[var(--brand-grey)] leading-relaxed">
              We don't just deliver assessments — we guide the interpretation through coaching
              conversations, and actionable development strategies to ensure meaningful behavioural
              change and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((u) => (
            <article
              key={u.title}
              className="rounded-3xl bg-[var(--brand-green)] text-white p-8 hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-lg font-bold text-center pb-3 border-b border-white/25 mb-4">
                {u.title}
              </h3>
              <p className="text-sm text-white/95 leading-relaxed">{u.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DISC products */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-24 space-y-6">
          {products.map((p) => (
            <article
              key={p.name}
              className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-10 items-center rounded-3xl bg-white border border-[var(--brand-green)]/20 p-8"
            >
              <div className="rounded-2xl bg-[var(--brand-grey)] text-white text-2xl font-bold text-center py-8">
                {p.name}
              </div>
              <p className="text-[var(--brand-grey)] leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-24 text-center">
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
