import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/actionedge-logo.jpeg.asset.json";

export function Newsletter() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[var(--navy)] px-8 py-16 md:px-16 md:py-24 text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--cyan-accent)]/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-[var(--cyan-accent)]/15 blur-3xl" aria-hidden />
        <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
              Stay Informed. Stay Ahead.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Join our mailing list for upcoming workshops, practical insights & exclusive tips.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://forms.gle/8HSoTGSvR9Crrg9H8"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-primary text-base py-4"
            >
              Join Here →
            </a>
            <a
              href="https://zcform.com/1Dr6r"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Or book a discovery call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import logoAsset from "@/assets/actionedge-logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <Link to="/" className="flex items-center">
          <img src={logoAsset.url} alt="ActionEDGE" className="h-12 w-auto object-contain" />
        </Link>
        <p>© {new Date().getFullYear()} ActionEDGE TT. Strategy, People & Culture.</p>
      </div>
    </footer>
  );
}
