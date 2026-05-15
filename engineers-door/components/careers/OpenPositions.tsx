import { Icon } from "@iconify/react";

const positions = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    tags: ["React Native", "TypeScript", "Firebase"],
  },
  {
    title: "DevOps / Cloud Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Remote",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    title: "Backend Engineer (Python)",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    tags: ["Python", "FastAPI", "MongoDB"],
  },
  {
    title: "IT Consultant",
    department: "Consulting",
    type: "Contract",
    location: "Hybrid",
    tags: ["Strategy", "Architecture", "Stakeholder Mgmt"],
  },
];

const typeColors: Record<string, string> = {
  "Full-time": "border-[#00c2ff]/30 text-[#00c2ff]",
  "Contract": "border-orange-500/30 text-orange-400",
};

export default function OpenPositions() {
  if (positions.length === 0) {
    return (
      <section className="bg-[#0a0f2c] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#00c2ff]" />
              <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                Opportunities
              </span>
              <span className="h-px w-10 bg-[#00c2ff]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Open Positions
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
              We don&apos;t always have open roles listed, but we&apos;re always interested
              in hearing from talented people.
            </p>
          </div>

          <div className="bg-[#0d1435] border border-white/5 rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <span className="text-5xl mb-5 block">📭</span>
            <h3 className="text-white font-semibold text-lg mb-2">
              No open positions right now
            </h3>
            <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">
              We&apos;re not actively hiring at the moment, but we&apos;re always open to
              meeting great engineers. Send us your application and we&apos;ll keep
              you in mind for future opportunities.
            </p>
            <a
              href="#apply"
              className="inline-block bg-[#00c2ff] text-[#0a0f2c] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white transition-colors duration-200"
            >
              Send a General Application →
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              We&apos;re Hiring
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Open Positions
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            Don&apos;t see a perfect fit? Apply anyway — we&apos;re always looking for
            exceptional people.
          </p>
        </div>

        <div className="space-y-4">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="group bg-[#0d1435] border border-white/5 rounded-xl px-6 py-5 hover:border-[#00c2ff]/30 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Left */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-white font-semibold text-base group-hover:text-[#00c2ff] transition-colors duration-200">
                    {pos.title}
                  </h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeColors[pos.type] ?? "border-gray-500/30 text-gray-400"}`}>
                    {pos.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Icon icon="ph:buildings-bold" className="w-3.5 h-3.5" />
                    {pos.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon="ph:map-pin-bold" className="w-3.5 h-3.5" />
                    {pos.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {pos.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Apply button */}
              <a
                href="#apply"
                className="flex-shrink-0 border border-[#00c2ff]/30 text-[#00c2ff] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#00c2ff] hover:text-[#0a0f2c] transition-all duration-200 text-center"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
