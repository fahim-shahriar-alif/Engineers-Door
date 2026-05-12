const perks = [
  {
    icon: "🌍",
    title: "Remote First",
    description: "Work from anywhere in the world. We've been fully remote since day one.",
  },
  {
    icon: "📈",
    title: "Growth & Learning",
    description: "Annual learning budget, conference tickets, and a culture that encourages growth.",
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    description: "Market-rate salaries with performance bonuses and equity options for senior roles.",
  },
  {
    icon: "🏥",
    title: "Health Coverage",
    description: "Comprehensive health, dental, and vision insurance for you and your family.",
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    description: "We care about output, not hours. Work when you're most productive.",
  },
  {
    icon: "🤝",
    title: "Great Team",
    description: "Work alongside talented, kind, and collaborative people who genuinely care.",
  },
];

export default function Perks() {
  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Work With Us
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Perks & Benefits
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            We invest in our people because great products are built by happy,
            well-supported teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="bg-[#0d1435] border border-white/5 rounded-xl p-7 hover:border-[#00c2ff]/30 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{perk.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2">{perk.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
