import logoAsset from "@/assets/actionedge-logo.jpeg.asset.json";

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
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-24 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logoAsset.url} alt="ActionEDGE" className="h-16 md:h-20 w-auto object-contain" />
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
