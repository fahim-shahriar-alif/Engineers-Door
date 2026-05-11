import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a0f2c]">

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00c2ff] opacity-[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-80px] w-[450px] h-[450px] bg-[#0055ff] opacity-[0.08] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#00c2ff]" />
          <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
            Engineering Excellence
          </span>
          <span className="h-px w-10 bg-[#00c2ff]" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Building the Future,{" "}
          <br className="hidden md:block" />
          One <span className="text-[#00c2ff]">Solution</span> at a Time
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Engineers Door delivers end-to-end software development, IT consulting,
          and technology solutions that drive real business growth.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="bg-[#00c2ff] text-[#0a0f2c] px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-white transition-colors duration-200 w-full sm:w-auto"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:border-[#00c2ff] hover:text-[#00c2ff] transition-colors duration-200 w-full sm:w-auto"
          >
            Start a Project →
          </Link>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-10">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Expert Engineers" },
              { value: "30+", label: "Global Clients" },
              { value: "5+", label: "Years of Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-500 text-xs mt-1.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0f2c] to-transparent pointer-events-none" />
    </section>
  );
}
