import PageHeroOrbs from "@/components/ui/PageHeroOrbs";

export default function CareersHero() {
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
            Join Our Team
          </span>
          <span className="h-px w-10 bg-[#00c2ff]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Build Your Career at{" "}
          <span className="text-[#00c2ff]">Engineers Door</span>
        </h1>
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          We're a team of curious, driven engineers who love solving hard
          problems. If that sounds like you, we'd love to meet you.
        </p>

        {/* Quick stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { value: "4", label: "Team Members" },
            { value: "100%", label: "Remote Friendly" },
            { value: "Always", label: "Open to Talent" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0d1435] border border-white/5 rounded-xl px-8 py-4 text-center">
              <p className="text-2xl font-bold text-[#00c2ff]">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
