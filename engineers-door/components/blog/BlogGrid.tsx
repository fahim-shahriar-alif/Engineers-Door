"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";
import { categories, type Post } from "@/lib/blogData";

const avatarColors = [
  "from-[#7c3aed] to-[#00c2ff]",
  "from-[#0055ff] to-[#7c3aed]",
  "from-[#00c2ff] to-[#0055ff]",
  "from-[#7c3aed] to-[#0055ff]",
  "from-[#0055ff] to-[#00c2ff]",
];

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <section className="bg-[#0a0f2c] pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Filter tabs */}
        <AnimateIn>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.filter((c) => c !== "All" || true).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#00c2ff] text-[#0a0f2c]"
                    : "bg-[#0d1435] border border-white/5 text-gray-400 hover:border-[#00c2ff]/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`}>
                <div className="group bg-[#0d1435] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00c2ff]/30 transition-all duration-300 flex flex-col h-full">

                  {/* Card top */}
                  <div className={`bg-gradient-to-br ${post.gradient} p-8 flex items-end justify-between`}>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                      <Icon icon={post.icon} className="w-7 h-7" />
                    </div>
                    <span className="text-white/70 text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-[#00c2ff] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold`}>
                          {post.authorInitials}
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">{post.author}</p>
                          <p className="text-gray-600 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <span className="text-gray-600 text-xs">{post.readTime}</span>
                    </div>
                  </div>

                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-600">
            No articles in this category yet.
          </div>
        )}

      </div>
    </section>
  );
}
