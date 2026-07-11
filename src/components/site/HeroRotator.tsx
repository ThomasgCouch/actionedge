import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Strategy → Execution",
    headline: [
      "Is poor execution slowing your growth?",
      "Translate your strategy to drive your results...",
    ],
    cta: { label: "Learn More", to: "/strategic-thinking" as const },
    visual: "strategy",
  },
  {
    eyebrow: "People Development",
    headline: [
      "Are your people equipped to perform at the level your business demands?",
    ],
    cta: { label: "Learn More", to: "/people-development" as const },
    visual: "people",
  },
  {
    eyebrow: "Culture Transformation",
    headline: [
      "Is your culture strengthening performance or silently limiting your organization's potential?",
    ],
    cta: { label: "Learn More", to: "/org-design-culture" as const },
    visual: "culture",
  },
];

function StrategyAnim() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="s-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--brand-green)" stopOpacity=".15" />
          <stop offset="1" stopColor="var(--brand-blue)" stopOpacity=".25" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="360" height="360" rx="24" fill="url(#s-grad)" />
      {/* baseline */}
      <line x1="50" y1="330" x2="360" y2="330" stroke="var(--brand-grey)" strokeOpacity=".25" strokeWidth="2" />
      {/* growing bars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={70 + i * 55} y={330} width="34" height="0" rx="6" fill="var(--brand-green)">
          <animate attributeName="height" values="0;180;0" dur="4.5s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
          <animate attributeName="y" values="330;150;330" dur="4.5s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
        </rect>
      ))}
      {/* rising arrow */}
      <polyline points="70,300 130,240 190,270 250,180 310,120" fill="none" stroke="var(--brand-blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="500">
        <animate attributeName="stroke-dashoffset" values="500;0" dur="3s" repeatCount="indefinite" />
      </polyline>
      <circle cx="310" cy="120" r="7" fill="var(--brand-blue)">
        <animate attributeName="r" values="7;11;7" dur="1.6s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function PeopleAnim() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
      <rect x="20" y="20" width="360" height="360" rx="24" fill="var(--brand-green)" fillOpacity=".08" />
      {/* three figures */}
      {[100, 200, 300].map((cx, i) => (
        <g key={i}>
          <circle cx={cx} cy={170} r="28" fill="var(--brand-green)">
            <animate attributeName="cy" values="170;158;170" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <rect x={cx - 32} y={210} width="64" height="80" rx="20" fill="var(--brand-green)">
            <animate attributeName="y" values="210;202;210" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </rect>
        </g>
      ))}
      {/* connecting arcs */}
      <path d="M 100 130 Q 200 70 300 130" fill="none" stroke="var(--brand-blue)" strokeWidth="3" strokeDasharray="6 6">
        <animate attributeName="stroke-dashoffset" values="0;-24" dur="1.2s" repeatCount="indefinite" />
      </path>
      <circle r="6" fill="var(--brand-blue)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M 100 130 Q 200 70 300 130" />
      </circle>
    </svg>
  );
}

function CultureAnim() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden>
      <rect x="20" y="20" width="360" height="360" rx="24" fill="var(--brand-blue)" fillOpacity=".08" />
      {/* orbit rings */}
      {[70, 110, 150].map((r, i) => (
        <circle key={i} cx="200" cy="200" r={r} fill="none" stroke="var(--brand-green)" strokeOpacity={0.25 + i * 0.1} strokeWidth="2" strokeDasharray="4 8">
          <animateTransform attributeName="transform" type="rotate" from={`0 200 200`} to={`${i % 2 === 0 ? 360 : -360} 200 200`} dur={`${10 + i * 4}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* center core */}
      <circle cx="200" cy="200" r="26" fill="var(--brand-green)">
        <animate attributeName="r" values="26;30;26" dur="2.5s" repeatCount="indefinite" />
      </circle>
      {/* orbiting nodes */}
      {[
        { r: 70, color: "var(--brand-blue)", dur: "6s" },
        { r: 110, color: "var(--brand-green)", dur: "9s" },
        { r: 150, color: "var(--brand-blue)", dur: "12s" },
      ].map((o, i) => (
        <g key={i}>
          <circle cx={200 + o.r} cy="200" r="9" fill={o.color}>
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur={o.dur} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
}

const visuals: Record<string, () => React.ReactElement> = {
  strategy: StrategyAnim,
  people: PeopleAnim,
  culture: CultureAnim,
};

export function HeroRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {slides.map((s, idx) => {
              const Visual = visuals[s.visual];
              return (
                <div key={idx} className="w-full shrink-0 pr-4">
                  <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                    <div>
                      <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-4">
                        {s.eyebrow}
                      </p>
                      <h1 className="text-[clamp(1.85rem,4vw,3.25rem)] leading-[1.12] font-bold text-[var(--cyan-accent)]">
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
                    <div className="aspect-square max-w-md w-full mx-auto">
                      <Visual />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex gap-2 justify-center md:justify-start">
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
      </div>
    </section>
  );
}
