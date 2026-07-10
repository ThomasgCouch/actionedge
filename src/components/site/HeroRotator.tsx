import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroTarget from "@/assets/hero-target.png";

const slides = [
  {
    eyebrow: "Strategy → Execution",
    headline: [
      "Is poor execution slowing your growth?",
      "Translate your strategy to drive your results...",
    ],
    cta: { label: "Learn More", to: "/strategic-thinking" },
  },
  {
    eyebrow: "People Development",
    headline: [
      "Are your people equipped to perform at the level your business demands?",
    ],
    cta: { label: "Learn More", to: "/people-development" },
  },
  {
    eyebrow: "Culture Transformation",
    headline: [
      "Is your culture strengthening performance or silently limiting your organization's potential?",
    ],
    cta: { label: "Learn More", to: "/org-design-culture" },
  },
];

export function HeroRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => (
              <div key={idx} className="w-full shrink-0 pr-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
                  {s.eyebrow}
                </p>
                <h1 className="text-[clamp(2.75rem,6vw,5.25rem)] leading-[0.98] font-bold text-[var(--cyan-accent)]">
                  {s.headline[0]}
                  <br />
                  <span className="text-[var(--navy)]">{s.headline[1]}</span>
                </h1>
                <p className="mt-8 text-lg text-muted-foreground max-w-xl">{s.body}</p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href={s.cta.href} className="btn-pill-primary">{s.cta.label}</a>
                  <a href="#approach" className="btn-pill">How we work</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 flex gap-2">
            {slides.map((_, n) => (
              <button
                key={n}
                onClick={() => setI(n)}
                aria-label={`Slide ${n + 1}`}
                className={`h-1.5 rounded-full transition-all ${n === i ? "w-10 bg-[var(--cyan-accent)]" : "w-4 bg-border"}`}
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-[var(--cyan-accent)]/5 rounded-full blur-3xl" aria-hidden />
          <img
            src={heroTarget}
            alt="Dart hitting the bullseye — precision execution"
            width={1024}
            height={1024}
            className="relative w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
