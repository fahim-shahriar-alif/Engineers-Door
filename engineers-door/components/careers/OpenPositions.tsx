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
  "Full-time": "bg-green-500/10 text-green-400 border-green-500/20",
  "Contract": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Part-time": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function OpenPositions() {
  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              We're Hiring
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Open Positions
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            Don't see a perfect fit? Apply anyway — we're always looking for
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
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${typeColors[pos.type]}`}>
                    {pos.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    {pos.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
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
