import type { ReactNode } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Newsletter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  subtitle,
  variant = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  subtitle?: string;
  variant?: "light" | "green";
}) {
  if (variant === "green") {
    return (
      <section className="px-6 md:px-10 pt-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[var(--brand-green)] text-white px-8 md:px-16 py-16 md:py-20 text-center">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-semibold mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1]">{title}</h1>
          {subtitle && (
            <p className="mt-5 italic text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          {intro && (
            <p className="mt-6 text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </section>
    );
  }
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        {eyebrow && (
          <p className="text-base uppercase tracking-[0.25em] text-[var(--brand-blue)] font-semibold mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--brand-green)] leading-tight max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
