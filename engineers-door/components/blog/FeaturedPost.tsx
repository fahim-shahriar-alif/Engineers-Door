import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";
import type { Post } from "@/lib/blogData";

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="bg-[#0a0f2c] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Featured Article
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <Link href={`/blog/${post.slug}`}>
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#0d1435] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00c2ff]/30 transition-all duration-300">

              {/* Left — Visual */}
              <div className={`bg-gradient-to-br ${post.gradient} p-12 flex flex-col justify-between min-h-[280px]`}>
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  <Icon icon={post.icon} className="w-9 h-9" />
                </div>
                <div>
                  <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <p className="text-white/70 text-sm">{post.readTime}</p>
                </div>
              </div>

              {/* Right — Content */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-[#00c2ff] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00c2ff] to-[#0055ff] flex items-center justify-center text-white text-xs font-bold">
                      {post.authorInitials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{post.author}</p>
                      <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                  <span className="text-[#00c2ff] text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Read Article →
                  </span>
                </div>
              </div>

            </div>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
