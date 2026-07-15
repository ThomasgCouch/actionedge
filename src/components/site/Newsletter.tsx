import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram } from "lucide-react";
import logoAsset from "@/assets/actionedge-logo.jpeg.asset.json";

export function Newsletter() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[var(--navy)] px-8 py-16 md:px-16 md:py-24 text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--cyan-accent)]/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-[var(--cyan-accent)]/15 blur-3xl" aria-hidden />
        <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
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

export function Footer() {
  const serviceLinks = [
    { label: "Strategic Thinking", to: "/strategic-thinking" as const },
    { label: "People Development", to: "/people-development" as const },
    { label: "Org Design & Culture", to: "/org-design-culture" as const },
    { label: "DISC", to: "/disc" as const },
  ];

  const companyLinks = [
    { label: "About", to: "/about" as const },
    { label: "Events", to: "/events" as const },
    { label: "Contact", to: "/contact" as const },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/indiracouch?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: Linkedin },
    { label: "Instagram", href: "https://www.instagram.com/indiracouch?igsh=bWRkYmlpNGExdDBv", icon: Instagram },
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-start">
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <Link to="/" className="inline-flex items-start">
              <img src={logoAsset.url} alt="ActionEDGE" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--brand-grey)] hover:text-[var(--brand-blue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[var(--brand-grey)] hover:text-[var(--brand-blue)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)] mb-5">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand-green)] text-white hover:bg-[var(--brand-blue)] transition-colors"
                  aria-label={`Follow on ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="https://zcform.com/1Dr6r"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm font-medium text-[var(--brand-blue)] hover:text-[var(--brand-green)] transition-colors"
            >
              Book a discovery call →
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border)] text-sm text-[var(--brand-grey)] flex flex-col md:flex-row items-center justify-center gap-4">
          <p>© {new Date().getFullYear()} ActionEDGE TT. Strategy, People & Culture.</p>
        </div>

      </div>
    </footer>
  );
}
