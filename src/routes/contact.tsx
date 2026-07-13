import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { AnimatedMessage } from "@/components/site/AnimatedAccents";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ActionEDGE" },
      {
        name: "description",
        content:
          "Reach the ActionEDGE team for meetings, workshops, DISC assessments, and general inquiries.",
      },
      { property: "og:title", content: "Contact | ActionEDGE" },
      { property: "og:description", content: "Let's talk about your next chapter of growth." },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    reason: "To reach the CEO and book meetings, please contact:",
    role: "Business Analyst",
    email: "administrator@actionedgett.com",
    phone: "868-377-7891",
  },
  {
    reason: "For general inquiries, please contact:",
    role: "Business Operations Lead",
    email: "karen.achong@actionedgett.com",
    phone: "868-374-6816",
  },
  {
    reason: "For more information on upcoming workshops and DISC assessment bookings, please contact:",
    role: "Business Development Officer",
    email: "bdo@actionedgett.com",
    phone: "868-305-2845",
  },
];

const faqs = [
  {
    q: "Who does ActionEDGE typically work with?",
    a: "We partner with executives, senior leadership teams, and organizations across the Caribbean, from banking and energy to retail, manufacturing, education and services.",
  },
  {
    q: "Do you offer one-on-one coaching?",
    a: "Yes. We deliver executive coaching, career coaching, and leadership development for individual professionals as well as group and team engagements.",
  },
  {
    q: "How long does a typical engagement last?",
    a: "It depends on your goals. Strategy sessions can run a single day or a full quarter; leadership programmes typically span 3–12 months; culture transformations run longer with embedded rhythms.",
  },
  {
    q: "Can you deliver DISC assessments virtually?",
    a: "Absolutely. All DISC assessments and debriefs can be delivered virtually, in-person, or in a hybrid format depending on your team's needs.",
  },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact Us" title="Let's talk about your next chapter of growth." intro="Reach the ActionEDGE team for meetings, workshops, DISC assessments, and general inquiries." />

      {/* Contact directory */}
      <section className="bg-[var(--brand-beige)]/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--brand-blue)] font-semibold mb-3">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-green)]">We'd love to hear from you.</h2>
            </div>
            <div className="shrink-0 mx-auto md:mx-0">
              <AnimatedMessage />
            </div>
          </div>
          <div className="grid gap-6">
            {contacts.map((c) => (
              <article
                key={c.role}
                className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-10 rounded-2xl bg-white border border-[var(--brand-green)]/15 p-8 hover:shadow-lg transition-shadow"
              >
                <p className="font-bold text-[var(--brand-grey)] leading-relaxed">{c.reason}</p>
                <div>
                  <p className="font-bold text-[var(--brand-green)]">{c.role}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-2 flex items-center gap-2 text-[var(--brand-grey)] hover:text-[var(--brand-blue)] transition-colors"
                  >
                    <Mail className="w-4 h-4" /> {c.email}
                  </a>
                  <a
                    href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
                    className="mt-1 flex items-center gap-2 text-[var(--brand-grey)] hover:text-[var(--brand-blue)] transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {c.phone}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <a
              href="https://zcform.com/1Dr6r"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[var(--brand-green)] text-white p-8 hover:scale-[1.02] transition-transform"
            >
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-white/80">
                Book a Discovery Call
              </p>
              <h3 className="mt-3 text-2xl font-bold">30 minutes. Zero pressure. Real clarity. →</h3>
            </a>
            <a
              href="https://forms.gle/8HSoTGSvR9Crrg9H8"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[var(--brand-grey)] text-white p-8 hover:scale-[1.02] transition-transform"
            >
              <p className="text-sm uppercase tracking-[0.25em] font-semibold text-white/80">
                Join Our Mailing List
              </p>
              <h3 className="mt-3 text-2xl font-bold">Workshops, insights & practical tips. →</h3>
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-green)] text-center mb-12">
          FAQs
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-[var(--brand-green)]/20 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-[var(--brand-beige)]/10 transition-colors"
      >
        <span className="font-bold text-[var(--brand-green)]">{q}</span>
        <span className={`text-[var(--brand-blue)] text-2xl font-light transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[var(--brand-grey)] leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
