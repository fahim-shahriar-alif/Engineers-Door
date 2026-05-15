import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/portfolioData";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Engineers Door`,
      description: project.tagline,
      url: `https://www.engineersdoor.com/portfolio/${project.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 2);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0f2c] pt-16 pb-0 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00c2ff] text-sm transition-colors duration-200 mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Category + Industry badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase bg-[#00c2ff]/10 border border-[#00c2ff]/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-gray-400 text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {project.industry}
            </span>
            <span className="text-gray-400 text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {project.region}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-10">
            {project.tagline}
          </p>

          {/* Gradient banner */}
          <div className={`bg-gradient-to-br ${project.color} rounded-t-2xl p-14 flex items-center justify-center`}>
            <span className="text-8xl">{project.icon}</span>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="bg-[#070b1f] border-y border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#00c2ff]">{m.value}</p>
              <p className="text-gray-500 text-sm mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#0a0f2c] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: main body */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div>
              <h2 className="text-white font-bold text-2xl mb-4">Overview</h2>
              <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0d1435] border border-white/5 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <h3 className="text-white font-semibold text-base">The Challenge</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-[#0d1435] border border-white/5 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#00c2ff]" />
                  <h3 className="text-white font-semibold text-base">Our Solution</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-white font-bold text-2xl mb-5">Key Features</h2>
              <div className="space-y-3">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00c2ff]/10 border border-[#00c2ff]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff]" />
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-white font-bold text-2xl mb-6">Development Timeline</h2>
              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5" />
                <div className="space-y-6">
                  {project.timeline.map((step, i) => (
                    <div key={i} className="flex items-start gap-5 pl-12 relative">
                      {/* dot */}
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#0d1435] border border-[#00c2ff]/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#00c2ff] text-xs font-bold">{i + 1}</span>
                      </div>
                      <div className="bg-[#0d1435] border border-white/5 rounded-xl px-5 py-4 flex-1 flex items-center justify-between gap-4">
                        <p className="text-white text-sm font-medium">{step.phase}</p>
                        <span className="text-[#00c2ff] text-xs font-semibold bg-[#00c2ff]/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">

            {/* Project info card */}
            <div className="bg-[#0d1435] border border-white/5 rounded-xl p-6 space-y-4">
              <h3 className="text-white font-semibold text-base mb-2">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Category</span>
                  <span className="text-white font-medium">{project.category}</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between">
                  <span className="text-gray-500">Industry</span>
                  <span className="text-white font-medium">{project.industry}</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between">
                  <span className="text-gray-500">Region</span>
                  <span className="text-white font-medium">{project.region}</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between">
                  <span className="text-gray-500">Team Size</span>
                  <span className="text-white font-medium">{project.teamSize} people</span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration</span>
                  <span className="text-white font-medium">
                    {project.timeline.length} phases
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-[#0d1435] border border-white/5 rounded-xl p-6">
              <h3 className="text-white font-semibold text-base mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0d1435] border border-[#00c2ff]/20 rounded-xl p-6 text-center">
              <p className="text-white font-semibold text-sm mb-2">Have a similar project?</p>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                Let&apos;s talk about how we can build something like this for you.
              </p>
              <Link
                href="/contact"
                className="block bg-[#00c2ff] text-[#0a0f2c] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white transition-colors duration-200"
              >
                Start a Conversation
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="bg-[#070b1f] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-6">More {project.category} Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link key={r.slug} href={`/portfolio/${r.slug}`}>
                  <div className="group bg-[#0d1435] border border-white/5 rounded-xl overflow-hidden hover:border-[#00c2ff]/30 transition-all duration-300">
                    <div className={`bg-gradient-to-br ${r.color} p-6 flex items-center justify-between`}>
                      <span className="text-3xl">{r.icon}</span>
                      <span className="text-white/70 text-xs bg-white/10 px-2.5 py-1 rounded-full">{r.industry}</span>
                    </div>
                    <div className="p-5">
                      <p className="text-white text-sm font-semibold leading-snug group-hover:text-[#00c2ff] transition-colors duration-200">
                        {r.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{r.tagline}</p>
                      <div className="flex gap-4 mt-3">
                        {r.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <p className="text-[#00c2ff] text-sm font-bold">{m.value}</p>
                            <p className="text-gray-600 text-xs">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
