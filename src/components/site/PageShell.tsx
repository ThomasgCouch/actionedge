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
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--navy)] leading-tight max-w-4xl">
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
