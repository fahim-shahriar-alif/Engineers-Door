const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Engineers Door was founded in Dhaka, Bangladesh with a clear mission — to deliver high-quality software solutions that help businesses grow in a digital-first world.",
  },
  {
    year: "2023",
    title: "First Projects Delivered",
    description:
      "We delivered our first set of projects, building a reputation for quality, reliability, and on-time delivery across web and mobile development.",
  },
  {
    year: "2024",
    title: "Growing the Team",
    description:
      "Our team expanded to 4 skilled engineers across web, mobile, and design disciplines, serving clients with diverse technology needs.",
  },
  {
    year: "2025",
    title: "15+ Projects & Counting",
    description:
      "With 15+ projects delivered and a growing client base, Engineers Door continues to build its reputation as a trusted technology partner.",
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
              From Dhaka to the{" "}
              <span className="text-[#00c2ff]">Digital World</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Engineers Door was founded in 2022 in Dhaka, Bangladesh with a
              simple belief — that every business deserves a technology partner
              who genuinely cares about outcomes, not just deliverables.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              In just a few years, we've grown into a focused team of engineers
              delivering real results for real clients. Our core values have
              never changed: transparency, craftsmanship, and a relentless
              focus on what matters to our clients.
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
