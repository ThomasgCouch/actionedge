import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/actionedge-logo (1).jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/strategic-thinking", label: "Strategy" },
  { to: "/people-development", label: "People" },
  { to: "/org-design-culture", label: "Culture" },
  { to: "/disc", label: "DISC" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoAsset} alt="ActionEDGE" className="h-16 md:h-20 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              inactiveProps={{ className: "px-3 py-1.5 text-sm text-[var(--navy)]/80 hover:text-[var(--cyan-accent)] transition-colors" }}
              activeProps={{ className: "px-3 py-1.5 text-sm rounded-full bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)] font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://zcform.com/1Dr6r"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex btn-pill-primary text-sm"
        >
          Book a Discovery Call
        </a>
        <button
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-[var(--navy)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                inactiveProps={{ className: "text-base text-[var(--navy)]/80 hover:text-[var(--cyan-accent)] transition-colors py-3 px-3" }}
                activeProps={{ className: "text-base rounded-lg bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)] font-semibold py-3 px-3" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://zcform.com/1Dr6r"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-primary text-sm mt-2 text-center"
            >
              Book a Discovery Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
