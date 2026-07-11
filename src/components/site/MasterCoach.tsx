import growth from "@/assets/growth-arrows.png";

export function MasterCoach() {
  return (
    <section id="coach" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-[1fr_1.2fr] gap-14 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[2rem] bg-white border border-border p-10 flex items-center justify-center shadow-[0_30px_60px_-30px_rgba(15,27,61,0.2)]">
            <img src={growth} alt="Growth trajectory illustration" width={1024} height={1024} className="w-full max-w-sm" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[var(--cyan-accent)] text-white rounded-2xl px-6 py-4 shadow-xl">
            <div className="text-3xl font-bold">30+</div>
            <div className="text-xs uppercase tracking-widest opacity-90">Years leading change</div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--cyan-accent)] font-semibold mb-6">
            Meet Our Master Coach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] leading-tight">
            Turning clarity into execution — and potential into measurable success.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Whether you're aligning your strategy, strengthening leadership, building high-performing teams,
            or driving consistent results — or you're an individual professional ready to elevate your
            career and expand your impact — ActionEDGE TT is your partner in the work that matters most.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://zcform.com/1Dr6r" target="_blank" rel="noreferrer" className="btn-pill-primary">
              Book a Discovery Call
            </a>
            <a href="#services" className="btn-pill">Explore services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
