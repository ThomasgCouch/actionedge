import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-4">
                  {s.eyebrow}
                </p>
                <h1 className="text-[clamp(1.85rem,4.2vw,3.5rem)] leading-[1.12] font-bold text-[var(--cyan-accent)]">
                  {s.headline[0]}
                  {s.headline[1] && (
                    <>
                      <br />
                      <span className="text-[var(--navy)]">{s.headline[1]}</span>
                    </>
                  )}
                </h1>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to={s.cta.to} className="btn-pill-primary">{s.cta.label}</Link>
                  <Link to="/about" className="btn-pill">How we work</Link>
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
