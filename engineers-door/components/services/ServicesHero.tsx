import PageHeroOrbs from "@/components/ui/PageHeroOrbs";

export default function ServicesHero() {
  return (
    <section className="relative bg-[#0a0f2c] pt-24 pb-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <PageHeroOrbs />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-[#00c2ff]" />
          <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <span className="h-px w-10 bg-[#00c2ff]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Services Built for{" "}
          <span className="text-[#00c2ff]">Real Results</span>
        </h1>
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From initial concept to full-scale deployment, we provide the
          technology services your business needs to move faster and build smarter.
        </p>
      </div>
    </section>
  );
}
