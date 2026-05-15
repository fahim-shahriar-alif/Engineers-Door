"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, categories } from "@/lib/portfolioData";

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="bg-[#0a0f2c] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[#00c2ff] text-[#0a0f2c]"
                  : "bg-[#0d1435] border border-white/5 text-gray-400 hover:border-[#00c2ff]/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="group bg-[#0d1435] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00c2ff]/30 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${project.color} p-8 flex items-start justify-between`}>
                <span className="text-4xl">{project.icon}</span>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-white/80 text-xs font-semibold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-white/60 text-xs bg-white/10 px-2.5 py-0.5 rounded-full">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#00c2ff] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-[#00c2ff] text-xs font-medium mb-3">{project.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2 mb-4 py-4 border-y border-white/5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-white font-bold text-base">{m.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <span>Team of {project.teamSize}</span>
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-[#00c2ff] text-xs font-semibold hover:underline flex items-center gap-1 group/link"
                  >
                    View Case Study
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-gray-600 text-sm mt-10">
          Showing {filtered.length} of {projects.length} projects
        </p>

      </div>
    </section>
  );
}
