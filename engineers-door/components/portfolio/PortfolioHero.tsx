export default function PortfolioHero() {
  return (
    <section className="relative bg-[#0a0f2c] pt-24 pb-20 px-6 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00c2ff] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-[#00c2ff]" />
          <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
            Our Work
          </span>
          <span className="h-px w-10 bg-[#00c2ff]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Projects That{" "}
          <span className="text-[#00c2ff]">Speak for Themselves</span>
        </h1>
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A selection of the work we're proud of — real solutions built for
          real businesses across industries and technologies.
        </p>
      </div>
    </section>
  );
}
