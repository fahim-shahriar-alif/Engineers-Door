const technologies = [
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "TypeScript" },
  { name: "Python" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "Kubernetes" },
  { name: "AWS" },
  { name: "Tailwind CSS" },
  { name: "GraphQL" },
];

export default function TechStack() {
  return (
    <section className="bg-[#070b1f] pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Divider with label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="h-px flex-1 bg-white/5" />
          <span className="text-gray-600 text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            Technologies We Work With
          </span>
          <span className="h-px flex-1 bg-white/5" />
        </div>

        {/* Tech Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="bg-[#0d1435] border border-white/5 text-gray-400 text-sm px-5 py-2 rounded-full hover:border-[#00c2ff]/40 hover:text-[#00c2ff] transition-all duration-200"
            >
              {tech.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
