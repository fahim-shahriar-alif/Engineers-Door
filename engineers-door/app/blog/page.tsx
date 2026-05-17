import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import Newsletter from "@/components/blog/Newsletter";
import { posts } from "@/lib/blogData";

export const metadata = {
  title: "Blog & Insights — Engineers Door",
  description:
    "Engineering insights, tech deep-dives, and industry perspectives from the Engineers Door team.",
};

export default function BlogPage() {
  // Fall back to the first post if none is explicitly marked featured
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <main>
      <Navbar />
      <BlogHero />
      {featured && <FeaturedPost post={featured} />}
      <BlogGrid posts={rest} />
      <Newsletter />
      <Footer />
    </main>
  );
}
