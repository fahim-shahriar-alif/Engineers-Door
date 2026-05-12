const milestones = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "Engineers Door was founded by a small group of engineers who believed great software should be accessible to every business, not just the big ones.",
  },
  {
    year: "2020",
    title: "First Major Projects",
    description:
      "We delivered our first enterprise-grade projects, building a reputation for quality, reliability, and on-time delivery.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description:
      "Our team grew to 20+ engineers across multiple disciplines — web, mobile, cloud, and design — serving clients across three continents.",
  },
  {
    year: "2024",
    title: "Going Global",
    description:
      "With 100+ projects delivered and 30+ global clients, Engineers Door established itself as a trusted technology partner for businesses worldwide.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#00c2ff]" />
              <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              From a Small Team to a{" "}
              <span className="text-[#00c2ff]">Global Partner</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Engineers Door started with a simple belief — that businesses
              deserve technology partners who actually care about outcomes, not
              just deliverables.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Over the years, we've grown from a handful of engineers into a
              full-service IT company, but our core values have never changed:
              transparency, craftsmanship, and a relentless focus on results.
            </p>
          </div>

          {/* Right — Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5" />

            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="relative flex gap-6 pl-14">
                  {/* Dot */}
                  <div className="absolute left-[18px] top-1.5 w-3 h-3 rounded-full bg-[#00c2ff] border-2 border-[#070b1f] -translate-x-1/2" />

                  <div>
                    <span className="text-[#00c2ff] text-xs font-bold tracking-widest uppercase">
                      {m.year}
                    </span>
                    <h3 className="text-white font-semibold text-base mt-1 mb-1.5">
                      {m.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
