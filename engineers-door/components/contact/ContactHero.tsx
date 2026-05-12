export default function ContactHero() {
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
            Get In Touch
          </span>
          <span className="h-px w-10 bg-[#00c2ff]" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Let's Build Something{" "}
          <span className="text-[#00c2ff]">Great Together</span>
        </h1>
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or just want to explore possibilities? Reach
          out and we'll get back to you within 24 hours.
        </p>
      </div>
    </section>
  );
}
