export function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#approach", label: "Approach" },
    { href: "#services", label: "Services" },
    { href: "#coach", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-md bg-[var(--cyan-accent)] relative">
            <span className="absolute inset-1.5 border-2 border-white rounded-sm" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-[var(--navy)]">
            ActionEDGE<span className="text-[var(--cyan-accent)]"> TT</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[var(--navy)]/80 hover:text-[var(--cyan-accent)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="https://zcform.com/1Dr6r" target="_blank" rel="noreferrer" className="hidden md:inline-flex btn-pill-primary text-sm">
          Book a Discovery Call
        </a>
      </div>
    </header>
  );
}
