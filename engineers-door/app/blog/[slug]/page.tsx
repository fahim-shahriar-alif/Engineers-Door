import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blogData";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Engineers Door`,
      description: post.excerpt,
      url: `https://www.engineersdoor.com/blog/${post.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="text-white font-semibold mt-4 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-none space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-gray-400 text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff] flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      // Handle inline bold within paragraphs
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={i} className="text-gray-400 text-base leading-relaxed mb-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-white font-semibold">
                {part.replace(/\*\*/g, "")}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0f2c] pt-16 pb-12 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00c2ff] text-sm transition-colors duration-200 mb-8"
          >
            <Icon icon="ph:arrow-left-bold" className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase bg-[#00c2ff]/10 border border-[#00c2ff]/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">{post.excerpt}</p>

          {/* Author + date */}
          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
              {post.authorInitials}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{post.author}</p>
              <p className="text-gray-500 text-xs">{post.authorBio}</p>
            </div>
            <p className="text-gray-600 text-xs ml-auto">{post.date}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-[#0a0f2c] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Gradient banner */}
          <div className={`bg-gradient-to-br ${post.gradient} rounded-2xl p-10 flex items-center justify-center mb-12`}>
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <Icon icon={post.icon} className="w-12 h-12" />
            </div>
          </div>

          <article className="prose-custom">
            {renderBody(post.body)}
          </article>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-[#070b1f] py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-white font-bold text-xl mb-6">More in {post.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <div className="group bg-[#0d1435] border border-white/5 rounded-xl overflow-hidden hover:border-[#00c2ff]/30 transition-all duration-300">
                    <div className={`bg-gradient-to-br ${r.gradient} p-6 flex items-center justify-between`}>
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                        <Icon icon={r.icon} className="w-6 h-6" />
                      </div>
                      <span className="text-white/70 text-xs bg-white/10 px-2.5 py-1 rounded-full">{r.readTime}</span>
                    </div>
                    <div className="p-5">
                      <p className="text-white text-sm font-semibold leading-snug group-hover:text-[#00c2ff] transition-colors duration-200">
                        {r.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">{r.date}</p>
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
