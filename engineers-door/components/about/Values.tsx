const values = [
  {
    icon: "🎯",
    title: "Results-Driven",
    description:
      "We measure success by the impact we create for our clients, not the hours we log.",
  },
  {
    icon: "🤝",
    title: "Transparency",
    description:
      "No surprises. We communicate openly about progress, challenges, and decisions at every step.",
  },
  {
    icon: "⚙️",
    title: "Craftsmanship",
    description:
      "We take pride in writing clean, maintainable code and building systems that stand the test of time.",
  },
  {
    icon: "🚀",
    title: "Continuous Growth",
    description:
      "Technology never stops evolving, and neither do we. Our team is always learning and improving.",
  },
  {
    icon: "🌍",
    title: "Inclusivity",
    description:
      "We build diverse teams and welcome engineers from all backgrounds, cultures, and experience levels.",
  },
  {
    icon: "🔒",
    title: "Integrity",
    description:
      "We do what we say, say what we mean, and always act in the best interest of our clients and team.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Stand For
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[#0d1435] border border-white/5 rounded-xl p-7 hover:border-[#00c2ff]/30 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{value.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
