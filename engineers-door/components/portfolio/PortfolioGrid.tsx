"use client";

import { useState } from "react";

const categories = ["All", "Web", "Mobile", "Cloud", "Design", "Consulting"];

const projects = [
  {
    title: "FinTrack — Finance Dashboard",
    category: "Web",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    description:
      "A real-time financial analytics dashboard for a fintech startup, handling 500K+ daily transactions with sub-second query performance.",
    result: "3x faster reporting",
    color: "from-[#0055ff] to-[#00c2ff]",
    icon: "📊",
  },
  {
    title: "MediConnect — Healthcare App",
    category: "Mobile",
    tags: ["React Native", "Node.js", "MongoDB"],
    description:
      "A telemedicine platform connecting patients with doctors via video, chat, and appointment scheduling — launched in 3 countries.",
    result: "50K+ active users",
    color: "from-[#7c3aed] to-[#00c2ff]",
    icon: "🏥",
  },
  {
    title: "ShopFlow — E-Commerce Platform",
    category: "Web",
    tags: ["Next.js", "Stripe", "Redis"],
    description:
      "A high-performance e-commerce platform with real-time inventory, multi-vendor support, and a custom checkout experience.",
    result: "2x conversion rate",
    color: "from-[#00c2ff] to-[#7c3aed]",
    icon: "🛒",
  },
  {
    title: "CloudMigrate — Infrastructure Overhaul",
    category: "Cloud",
    tags: ["AWS", "Terraform", "Docker"],
    description:
      "Migrated a legacy monolith to a microservices architecture on AWS, reducing infrastructure costs and improving uptime to 99.99%.",
    result: "40% cost reduction",
    color: "from-[#0055ff] to-[#7c3aed]",
    icon: "☁️",
  },
  {
    title: "EduPath — Learning Management System",
    category: "Web",
    tags: ["React", "GraphQL", "PostgreSQL"],
    description:
      "A full-featured LMS for an EdTech company with live classes, progress tracking, certificates, and a mobile-first design.",
    result: "10K+ enrolled students",
    color: "from-[#7c3aed] to-[#0055ff]",
    icon: "🎓",
  },
  {
    title: "LogiTrack — Fleet Management",
    category: "Mobile",
    tags: ["Flutter", "Firebase", "Google Maps"],
    description:
      "A real-time fleet tracking and logistics management app for a transport company managing 200+ vehicles across the country.",
    result: "30% fuel savings",
    color: "from-[#00c2ff] to-[#0055ff]",
    icon: "🚛",
  },
  {
    title: "BrandForge — Design System",
    category: "Design",
    tags: ["Figma", "Storybook", "React"],
    description:
      "Built a comprehensive design system and component library for a SaaS company, cutting UI development time in half.",
    result: "50% faster UI dev",
    color: "from-[#7c3aed] to-[#00c2ff]",
    icon: "🎨",
  },
  {
    title: "SecureOps — DevSecOps Pipeline",
    category: "Cloud",
    tags: ["GitHub Actions", "Kubernetes", "Vault"],
    description:
      "Designed and implemented a fully automated DevSecOps pipeline with security scanning, secret management, and zero-downtime deployments.",
    result: "Zero security incidents",
    color: "from-[#0055ff] to-[#00c2ff]",
    icon: "🔐",
  },
  {
    title: "RetailIQ — Digital Transformation",
    category: "Consulting",
    tags: ["Strategy", "Architecture", "Roadmap"],
    description:
      "Led a full digital transformation engagement for a retail chain — from technology audit to vendor selection and implementation roadmap.",
    result: "18-month roadmap delivered",
    color: "from-[#00c2ff] to-[#7c3aed]",
    icon: "🏪",
  },
];

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
              key={project.title}
              className="group bg-[#0d1435] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00c2ff]/30 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-between`}>
                <span className="text-4xl">{project.icon}</span>
                <span className="text-white/70 text-xs font-semibold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff]" />
                  <span className="text-[#00c2ff] text-xs font-semibold">
                    {project.result}
                  </span>
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
