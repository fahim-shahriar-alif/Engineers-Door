export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorInitials: string;
  date: string;
  readTime: string;
  featured?: boolean;
  gradient: string;
  icon: string;
};

export const posts: Post[] = [
  {
    slug: "building-scalable-saas-nextjs",
    title: "Building a Scalable SaaS Product with Next.js and PostgreSQL",
    excerpt:
      "A deep dive into the architecture decisions, database design patterns, and deployment strategies we use when building production-grade SaaS applications.",
    category: "Engineering",
    author: "Rafiq Islam",
    authorInitials: "RI",
    date: "May 8, 2026",
    readTime: "8 min read",
    featured: true,
    gradient: "from-[#0055ff] to-[#00c2ff]",
    icon: "🏗️",
  },
  {
    slug: "devops-ci-cd-best-practices",
    title: "CI/CD Best Practices for Modern Engineering Teams",
    excerpt:
      "How to set up a robust CI/CD pipeline that catches bugs early, deploys confidently, and keeps your team moving fast.",
    category: "DevOps",
    author: "Nadia Rahman",
    authorInitials: "NR",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    gradient: "from-[#7c3aed] to-[#0055ff]",
    icon: "⚙️",
  },
  {
    slug: "ux-design-principles-enterprise",
    title: "UX Design Principles That Actually Work in Enterprise Software",
    excerpt:
      "Enterprise software doesn't have to be ugly. Here's how we approach UX design for complex, data-heavy applications.",
    category: "Design",
    author: "Sadia Karim",
    authorInitials: "SK",
    date: "Apr 15, 2026",
    readTime: "5 min read",
    gradient: "from-[#00c2ff] to-[#7c3aed]",
    icon: "🎨",
  },
  {
    slug: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter in 2026: Which Should You Choose?",
    excerpt:
      "An honest comparison of the two leading cross-platform mobile frameworks based on our experience shipping apps with both.",
    category: "Mobile",
    author: "Tanvir Ahmed",
    authorInitials: "TA",
    date: "Apr 5, 2026",
    readTime: "7 min read",
    gradient: "from-[#0055ff] to-[#7c3aed]",
    icon: "📱",
  },
  {
    slug: "cloud-cost-optimization-aws",
    title: "How We Cut AWS Costs by 40% Without Sacrificing Performance",
    excerpt:
      "A practical guide to cloud cost optimization — the tools, strategies, and mindset shifts that made the biggest difference.",
    category: "Cloud",
    author: "Nadia Rahman",
    authorInitials: "NR",
    date: "Mar 22, 2026",
    readTime: "9 min read",
    gradient: "from-[#00c2ff] to-[#0055ff]",
    icon: "☁️",
  },
  {
    slug: "hiring-engineers-remote-teams",
    title: "What We Look for When Hiring Engineers for Remote Teams",
    excerpt:
      "Beyond technical skills — the traits, habits, and communication styles that make engineers thrive in a fully remote environment.",
    category: "Culture",
    author: "Mim Chowdhury",
    authorInitials: "MC",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    gradient: "from-[#7c3aed] to-[#00c2ff]",
    icon: "🤝",
  },
];

export const categories = ["All", "Engineering", "DevOps", "Design", "Mobile", "Cloud", "Culture"];
