export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorInitials: string;
  authorBio: string;
  date: string;
  readTime: string;
  featured?: boolean;
  gradient: string;
  icon: string;
  body: string;
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
    authorBio: "Head of Engineering at Engineers Door. Backend engineer passionate about clean architecture and performance.",
    date: "May 8, 2026",
    readTime: "8 min read",
    featured: true,
    gradient: "from-[#0055ff] to-[#00c2ff]",
    icon: "ph:buildings-bold",
    body: `Building a SaaS product that can scale from 10 users to 100,000 requires deliberate architectural decisions from day one. In this post, we'll walk through the key decisions we make when starting a new SaaS project with Next.js and PostgreSQL.

## Choosing the Right Architecture

The biggest mistake teams make is over-engineering early. Start with a modular monolith — a single deployable unit with clear internal boundaries. This gives you the speed of a monolith with the flexibility to extract services later if needed.

With Next.js, we use the App Router for all new projects. Server Components reduce client-side JavaScript significantly, and the built-in caching primitives make it easy to optimize performance without reaching for external tools.

## Database Design Patterns

PostgreSQL is our default choice for SaaS applications. It's battle-tested, supports complex queries, and has excellent support for JSON when you need schema flexibility.

A few patterns we follow consistently:

**Multi-tenancy via Row-Level Security (RLS)** — Rather than separate databases per tenant, we use PostgreSQL's RLS to enforce tenant isolation at the database level. This simplifies the application layer and scales well.

**Soft deletes** — Never hard-delete records. Add a \`deleted_at\` timestamp column and filter it in queries. You'll thank yourself when a client asks to restore something.

**Audit tables** — For any table where history matters, maintain a shadow audit table that captures every change with a timestamp and user ID.

## Deployment Strategy

We deploy Next.js applications on Vercel for most projects — the DX is excellent and the edge network handles global distribution automatically. For the database, we use Supabase or a managed PostgreSQL instance on AWS RDS depending on the client's requirements.

Environment management is critical. We use separate environments for development, staging, and production, with automated deployments triggered by branch merges. Never deploy directly to production.

## Performance Considerations

The most impactful performance optimizations we've found:

- Use React Server Components for data-heavy pages — they render on the server and send minimal HTML to the client
- Implement proper database indexing from the start — add indexes on foreign keys and any column you filter or sort by
- Use connection pooling (PgBouncer or Supabase's built-in pooler) to handle concurrent connections efficiently
- Cache aggressively at the edge using Next.js's \`revalidate\` options

## Conclusion

Building scalable SaaS isn't about using the most sophisticated tools — it's about making deliberate decisions, keeping things simple, and building in the right abstractions from the start. Start with a solid foundation, measure before optimizing, and don't be afraid to refactor as you learn more about your users' needs.`,
  },
  {
    slug: "devops-ci-cd-best-practices",
    title: "CI/CD Best Practices for Modern Engineering Teams",
    excerpt:
      "How to set up a robust CI/CD pipeline that catches bugs early, deploys confidently, and keeps your team moving fast.",
    category: "DevOps",
    author: "Nadia Rahman",
    authorInitials: "NR",
    authorBio: "CTO at Engineers Door. Cloud architect and DevOps specialist with 10+ years of infrastructure experience.",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    gradient: "from-[#7c3aed] to-[#0055ff]",
    icon: "ph:gear-six-bold",
    body: `A well-designed CI/CD pipeline is one of the highest-leverage investments an engineering team can make. It catches bugs before they reach production, reduces deployment anxiety, and lets your team ship with confidence.

## What a Good Pipeline Looks Like

A solid CI/CD pipeline has three stages: build, test, and deploy. Each stage should be fast, reliable, and provide clear feedback when something goes wrong.

**Build** — Compile your code, install dependencies, and produce a deployable artifact. This should complete in under 2 minutes.

**Test** — Run your full test suite including unit tests, integration tests, and any static analysis. Fail fast — if tests fail, stop the pipeline immediately.

**Deploy** — Push to your target environment. Use blue-green or canary deployments to minimize risk.

## Key Practices We Follow

**Test in isolation** — Each pipeline run should be completely independent. Use Docker containers to ensure consistent environments across runs.

**Fail loudly** — Configure your pipeline to send notifications on failure. The team should know immediately when something breaks, not hours later.

**Keep secrets out of code** — Use your CI platform's secret management (GitHub Actions secrets, GitLab CI variables) for API keys and credentials. Never commit secrets to the repository.

**Cache dependencies** — Cache your \`node_modules\` or equivalent between runs. This alone can cut pipeline time by 50%.

## Deployment Strategies

For production deployments, we recommend blue-green deployments for most applications. You maintain two identical production environments and switch traffic between them. This gives you instant rollback capability if something goes wrong.

For larger teams, canary deployments let you roll out changes to a small percentage of users first, monitor for errors, then gradually increase the rollout.

## Monitoring After Deploy

A deployment isn't done when the pipeline finishes — it's done when you've confirmed the new version is healthy in production. Set up automated smoke tests that run after every deployment and alert you if key user flows are broken.

The goal is to make deployment a non-event. When your pipeline is solid, deploying multiple times a day feels routine rather than stressful.`,
  },
  {
    slug: "ux-design-principles-enterprise",
    title: "UX Design Principles That Actually Work in Enterprise Software",
    excerpt:
      "Enterprise software doesn't have to be ugly. Here's how we approach UX design for complex, data-heavy applications.",
    category: "Design",
    author: "Sadia Karim",
    authorInitials: "SK",
    authorBio: "Lead UI/UX Designer at Engineers Door. Designer with a background in psychology focused on intuitive interfaces.",
    date: "Apr 15, 2026",
    readTime: "5 min read",
    gradient: "from-[#00c2ff] to-[#7c3aed]",
    icon: "ph:pen-nib-bold",
    body: `Enterprise software has a reputation for being clunky, confusing, and ugly. It doesn't have to be. The same design principles that make consumer apps delightful apply to enterprise tools — they just need to be applied with a different set of constraints in mind.

## Start With the User's Job

Enterprise users aren't browsing for fun — they're trying to get a specific job done, often under time pressure. Every design decision should be evaluated against one question: does this help the user complete their task faster and with fewer errors?

This means ruthlessly cutting features that aren't used, simplifying navigation, and making the most common actions the most accessible.

## Information Density vs. Clarity

Enterprise applications often need to display a lot of data. The temptation is to show everything at once. Resist it.

Use progressive disclosure — show the most important information by default and let users drill down for details. Tables should be scannable, not exhaustive. Use visual hierarchy to guide the eye to what matters.

## Consistency Is a Feature

In enterprise software, consistency is more important than novelty. Users interact with your application for hours every day. Consistent patterns reduce cognitive load and let them build muscle memory.

Invest in a design system early. Define your component library, spacing scale, color system, and typography. Every new feature should use existing components before introducing new ones.

## Error States and Edge Cases

Consumer apps can get away with happy-path design. Enterprise software can't. Users will encounter errors, empty states, loading states, and edge cases constantly.

Design these states explicitly. An empty table should explain why it's empty and what the user can do. Error messages should be specific and actionable, not generic.

## Involve Real Users Early

The biggest mistake in enterprise UX is designing in isolation. Get your designs in front of real users as early as possible — even rough wireframes. The feedback you get from watching someone use your interface for 30 minutes is worth more than weeks of internal debate.`,
  },
  {
    slug: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter in 2026: Which Should You Choose?",
    excerpt:
      "An honest comparison of the two leading cross-platform mobile frameworks based on our experience shipping apps with both.",
    category: "Mobile",
    author: "Tanvir Ahmed",
    authorInitials: "TA",
    authorBio: "Mobile Lead at Engineers Door. React Native and Flutter expert who has shipped 20+ apps across multiple industries.",
    date: "Apr 5, 2026",
    readTime: "7 min read",
    gradient: "from-[#0055ff] to-[#7c3aed]",
    icon: "ph:device-mobile-bold",
    body: `We've shipped production apps with both React Native and Flutter. Here's our honest take on which to choose in 2026.

## The Short Answer

If your team knows JavaScript/TypeScript, use React Native. If you're starting fresh with no existing web codebase to share, Flutter is worth serious consideration.

## React Native in 2026

React Native has matured significantly. The New Architecture (Fabric + JSI) is now stable and delivers near-native performance for most use cases. The ecosystem is massive — almost any native capability you need has a well-maintained library.

The biggest advantage is code sharing with your web team. If you're already using React on the web, your team can contribute to the mobile app with minimal ramp-up time. This is a significant productivity advantage for most companies.

The main weakness is that complex animations and highly custom UI can still be painful. You'll occasionally hit the "bridge" and need to write native modules.

## Flutter in 2026

Flutter's rendering model is fundamentally different — it draws everything itself using Skia/Impeller rather than mapping to native components. This gives you pixel-perfect consistency across platforms and makes complex animations straightforward.

The Dart language is easy to learn but adds a context switch for JavaScript developers. The ecosystem is smaller than React Native's but has grown substantially.

Flutter shines for apps with heavy custom UI, complex animations, or when you need to target multiple platforms including desktop and web from a single codebase.

## Our Recommendation

**Choose React Native if:**
- Your team knows JavaScript/TypeScript
- You want to share code with a web application
- You need a large ecosystem of third-party libraries
- Your app has standard UI patterns

**Choose Flutter if:**
- You're building a highly custom UI with complex animations
- You want to target mobile, web, and desktop from one codebase
- Your team is willing to learn Dart
- Pixel-perfect cross-platform consistency is critical

Both are excellent choices in 2026. The decision should be driven by your team's existing skills and your app's specific requirements, not hype.`,
  },
  {
    slug: "cloud-cost-optimization-aws",
    title: "How We Cut AWS Costs by 40% Without Sacrificing Performance",
    excerpt:
      "A practical guide to cloud cost optimization — the tools, strategies, and mindset shifts that made the biggest difference.",
    category: "Cloud",
    author: "Nadia Rahman",
    authorInitials: "NR",
    authorBio: "CTO at Engineers Door. Cloud architect and DevOps specialist with 10+ years of infrastructure experience.",
    date: "Mar 22, 2026",
    readTime: "9 min read",
    gradient: "from-[#00c2ff] to-[#0055ff]",
    icon: "ph:cloud-bold",
    body: `Cloud costs have a way of creeping up quietly. One day you're paying $2,000/month, and six months later you're at $8,000 without a clear explanation. Here's how we approached a recent cost optimization engagement that cut a client's AWS bill by 40%.

## Start With Visibility

You can't optimize what you can't see. The first step is always getting a clear picture of where money is going. AWS Cost Explorer is your starting point — break down costs by service, by tag, and by region.

We use AWS Cost Anomaly Detection to catch unexpected spikes early. Set up budget alerts so you're notified before costs get out of hand.

## Right-Sizing Compute

The most common source of waste is over-provisioned EC2 instances. Teams provision large instances "just in case" and never revisit them.

AWS Compute Optimizer analyzes your actual utilization and recommends right-sized instances. In our experience, 30-40% of instances are significantly over-provisioned. Downsizing them is usually the single biggest cost reduction.

## Reserved Instances and Savings Plans

On-demand pricing is expensive. If you have predictable baseline workloads, Savings Plans can reduce costs by 30-60% with a 1 or 3-year commitment.

We recommend Compute Savings Plans over EC2 Reserved Instances for most clients — they're more flexible and apply across instance types and regions.

## Storage Optimization

S3 costs are easy to overlook but add up quickly. Implement lifecycle policies to automatically transition objects to cheaper storage classes (S3 Infrequent Access, Glacier) based on access patterns.

For RDS, audit your storage allocation. Many databases are provisioned with far more storage than they use. Also check whether you need Multi-AZ for all environments — dev and staging usually don't need it.

## Eliminate Waste

Run a systematic audit for:
- Unattached EBS volumes (easy to forget after terminating instances)
- Unused Elastic IPs (charged when not attached)
- Old snapshots that are no longer needed
- NAT Gateway data transfer costs (often surprisingly high)

## The Mindset Shift

The biggest change isn't technical — it's cultural. Cloud cost optimization needs to be an ongoing practice, not a one-time project. Make cost visibility part of your engineering culture, tag all resources properly, and review costs monthly.`,
  },
  {
    slug: "hiring-engineers-remote-teams",
    title: "What We Look for When Hiring Engineers for Remote Teams",
    excerpt:
      "Beyond technical skills — the traits, habits, and communication styles that make engineers thrive in a fully remote environment.",
    category: "Culture",
    author: "Mim Chowdhury",
    authorInitials: "MC",
    authorBio: "Head of Client Success at Engineers Door. Bridges the gap between clients and engineering teams.",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    gradient: "from-[#7c3aed] to-[#00c2ff]",
    icon: "ph:handshake-bold",
    body: `Remote work has been the default at Engineers Door since we started. Over the years, we've hired dozens of engineers and learned a lot about what separates people who thrive in remote environments from those who struggle.

## Technical Skills Are Table Stakes

We obviously evaluate technical ability — code quality, problem-solving, system design. But for remote roles, technical skills are just the entry requirement. The differentiating factors are almost always non-technical.

## Written Communication Is Everything

In a remote team, most communication happens in writing — Slack messages, pull request descriptions, design documents, async updates. Engineers who communicate clearly in writing are dramatically more effective than those who don't.

In interviews, we pay close attention to how candidates write. Are their messages clear and concise? Do they provide context? Can they explain a technical concept in writing without ambiguity?

We also ask candidates to write a short technical explanation as part of our process. It's one of the most predictive signals we've found.

## Proactive Over Reactive

Remote work requires self-direction. We look for engineers who proactively share updates, flag blockers early, and ask for help before they're stuck for hours. The worst remote work pattern is going silent when things get hard.

In interviews, we ask about times candidates have worked independently on ambiguous problems. How did they structure their work? How did they communicate progress? What did they do when they got stuck?

## Async-First Mindset

The best remote engineers default to async communication. They write things down rather than scheduling a call. They document decisions. They leave clear context in their pull requests so reviewers don't need to ask basic questions.

This doesn't mean they avoid synchronous communication — it means they use it intentionally for things that genuinely benefit from real-time discussion.

## Reliability Over Brilliance

A brilliant engineer who misses deadlines and goes dark for days is less valuable than a solid engineer who consistently delivers what they commit to and communicates proactively. Remote teams run on trust, and trust is built through reliability.

We'd rather hire someone who consistently ships good work and communicates well than someone with an impressive resume who struggles with the discipline remote work requires.`,
  },
];

export const categories = ["All", "Engineering", "DevOps", "Design", "Mobile", "Cloud", "Culture"];
