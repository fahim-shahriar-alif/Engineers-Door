export type Metric = {
  value: string;
  label: string;
};

export type TimelineStep = {
  phase: string;
  duration: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  industry: string;
  region: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  result: string; // short for card
  color: string;
  icon: string; // iconify icon name
  teamSize: number;
  timeline: TimelineStep[];
  features: string[];
  techStack: string[];
};

export const projects: Project[] = [
  {
    slug: "fintrack-finance-dashboard",
    title: "FinTrack — Finance Dashboard",
    tagline: "Real-time financial analytics for a high-volume fintech startup",
    category: "Web",
    industry: "Finance & Banking",
    region: "Southeast Asia",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    description:
      "A real-time financial analytics dashboard for a fintech startup, handling 500K+ daily transactions with sub-second query performance.",
    challenge:
      "The client's legacy reporting system took 20–40 seconds to generate basic reports, causing analysts to work off stale data. The system couldn't handle concurrent users and had no real-time capabilities.",
    solution:
      "We rebuilt the platform on Next.js with server-side streaming, PostgreSQL with materialized views for heavy aggregations, and a WebSocket layer for live data updates. A Redis caching layer handles burst traffic without hitting the database.",
    metrics: [
      { value: "3x", label: "Faster Reporting" },
      { value: "500K+", label: "Daily Transactions" },
      { value: "99.99%", label: "Uptime" },
    ],
    result: "3x faster reporting",
    color: "from-[#0055ff] to-[#00c2ff]",
    icon: "ph:chart-bar-bold",
    teamSize: 6,
    timeline: [
      { phase: "Discovery & Planning", duration: "2 weeks" },
      { phase: "UI/UX Design", duration: "2 weeks" },
      { phase: "Core Development", duration: "8 weeks" },
      { phase: "Testing & QA", duration: "2 weeks" },
      { phase: "Deployment & Handover", duration: "1 week" },
    ],
    features: [
      "Real-time transaction feed with WebSocket updates",
      "Customizable dashboard with drag-and-drop widgets",
      "Automated report generation and PDF export",
      "Role-based access control for analysts and admins",
      "Anomaly detection with configurable alert thresholds",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS", "WebSockets", "Vercel"],
  },
  {
    slug: "mediconnect-healthcare-app",
    title: "MediConnect — Healthcare App",
    tagline: "Telemedicine platform connecting patients and doctors across 3 countries",
    category: "Mobile",
    industry: "Healthcare",
    region: "South Asia",
    tags: ["React Native", "Node.js", "MongoDB"],
    description:
      "A telemedicine platform connecting patients with doctors via video, chat, and appointment scheduling — launched in 3 countries.",
    challenge:
      "Healthcare access in the target markets was limited by geography and cost. The client needed a platform that worked on low-end Android devices with poor connectivity, while meeting strict data privacy requirements across multiple jurisdictions.",
    solution:
      "We built a React Native app with offline-first architecture, compressing video streams for low-bandwidth environments. End-to-end encryption was implemented for all consultations. A Node.js backend with MongoDB handles multi-region data residency requirements.",
    metrics: [
      { value: "50K+", label: "Active Users" },
      { value: "3", label: "Countries Launched" },
      { value: "4.8★", label: "App Store Rating" },
    ],
    result: "50K+ active users",
    color: "from-[#7c3aed] to-[#00c2ff]",
    icon: "ph:heartbeat-bold",
    teamSize: 8,
    timeline: [
      { phase: "Discovery & Compliance Review", duration: "3 weeks" },
      { phase: "UI/UX Design", duration: "3 weeks" },
      { phase: "Core Development", duration: "12 weeks" },
      { phase: "Testing & QA", duration: "3 weeks" },
      { phase: "Staged Rollout", duration: "2 weeks" },
    ],
    features: [
      "HD video consultations with adaptive bitrate streaming",
      "Secure in-app messaging with end-to-end encryption",
      "Appointment scheduling with calendar sync",
      "Electronic prescription generation",
      "Multi-language support (English, Bengali, Hindi)",
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "WebRTC", "Firebase", "AWS", "TypeScript"],
  },
  {
    slug: "shopflow-ecommerce-platform",
    title: "ShopFlow — E-Commerce Platform",
    tagline: "High-performance multi-vendor e-commerce with 2x conversion uplift",
    category: "Web",
    industry: "E-Commerce",
    region: "Global",
    tags: ["Next.js", "Stripe", "Redis"],
    description:
      "A high-performance e-commerce platform with real-time inventory, multi-vendor support, and a custom checkout experience.",
    challenge:
      "The client's WooCommerce store was slow (4–6s page loads), had a 78% cart abandonment rate, and couldn't support their growing vendor network. Peak traffic events would bring the site down.",
    solution:
      "We rebuilt on Next.js with edge caching, a custom checkout flow optimized for mobile, and a Redis-backed inventory system that handles flash sales without overselling. Stripe handles payments with automatic tax calculation.",
    metrics: [
      { value: "2x", label: "Conversion Rate" },
      { value: "0.8s", label: "Avg Page Load" },
      { value: "60%", label: "Cart Abandonment Reduction" },
    ],
    result: "2x conversion rate",
    color: "from-[#00c2ff] to-[#7c3aed]",
    icon: "ph:storefront-bold",
    teamSize: 7,
    timeline: [
      { phase: "Audit & Planning", duration: "2 weeks" },
      { phase: "Design System", duration: "2 weeks" },
      { phase: "Platform Development", duration: "10 weeks" },
      { phase: "Migration & Testing", duration: "3 weeks" },
      { phase: "Launch & Monitoring", duration: "1 week" },
    ],
    features: [
      "Multi-vendor marketplace with vendor dashboards",
      "Real-time inventory management with low-stock alerts",
      "One-page checkout with address autocomplete",
      "Automated tax calculation across regions",
      "Advanced analytics and sales reporting",
    ],
    techStack: ["Next.js", "Stripe", "Redis", "PostgreSQL", "Tailwind CSS", "Vercel", "TypeScript"],
  },
  {
    slug: "cloudmigrate-infrastructure",
    title: "CloudMigrate — Infrastructure Overhaul",
    tagline: "Legacy monolith to microservices on AWS — 40% cost reduction",
    category: "Cloud",
    industry: "SaaS",
    region: "Europe",
    tags: ["AWS", "Terraform", "Docker"],
    description:
      "Migrated a legacy monolith to a microservices architecture on AWS, reducing infrastructure costs and improving uptime to 99.99%.",
    challenge:
      "A 7-year-old monolithic application was costing $28K/month to run, had frequent outages during peak load, and took 45 minutes to deploy. The engineering team couldn't ship features fast enough due to tight coupling.",
    solution:
      "We decomposed the monolith into 12 microservices, containerized with Docker, orchestrated with ECS, and provisioned with Terraform for reproducibility. A blue-green deployment pipeline reduced deploy time to under 5 minutes with zero downtime.",
    metrics: [
      { value: "40%", label: "Cost Reduction" },
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "5 min", label: "Deploy Time (was 45)" },
    ],
    result: "40% cost reduction",
    color: "from-[#0055ff] to-[#7c3aed]",
    icon: "ph:cloud-arrow-up-bold",
    teamSize: 5,
    timeline: [
      { phase: "Architecture Assessment", duration: "3 weeks" },
      { phase: "Infrastructure Design", duration: "2 weeks" },
      { phase: "Phased Migration", duration: "16 weeks" },
      { phase: "Performance Tuning", duration: "2 weeks" },
      { phase: "Cutover & Monitoring", duration: "1 week" },
    ],
    features: [
      "12 independently deployable microservices",
      "Infrastructure as Code with Terraform",
      "Blue-green deployments with automatic rollback",
      "Centralized logging with CloudWatch and Grafana",
      "Auto-scaling policies based on real traffic patterns",
    ],
    techStack: ["AWS ECS", "Terraform", "Docker", "GitHub Actions", "CloudWatch", "Grafana", "Node.js"],
  },
  {
    slug: "edupath-learning-management",
    title: "EduPath — Learning Management System",
    tagline: "Full-featured LMS with live classes and 10K+ enrolled students",
    category: "Web",
    industry: "EdTech",
    region: "South Asia",
    tags: ["React", "GraphQL", "PostgreSQL"],
    description:
      "A full-featured LMS for an EdTech company with live classes, progress tracking, certificates, and a mobile-first design.",
    challenge:
      "The client was running courses on a patchwork of Zoom, Google Classroom, and spreadsheets. Students had no single place to track progress, instructors couldn't see engagement data, and certificate generation was manual.",
    solution:
      "We built a unified LMS with a React frontend, GraphQL API, and PostgreSQL backend. Live classes use WebRTC with a custom whiteboard. Automated certificate generation triggers on course completion with PDF rendering.",
    metrics: [
      { value: "10K+", label: "Enrolled Students" },
      { value: "94%", label: "Course Completion Rate" },
      { value: "4.9★", label: "Student Satisfaction" },
    ],
    result: "10K+ enrolled students",
    color: "from-[#7c3aed] to-[#0055ff]",
    icon: "ph:graduation-cap-bold",
    teamSize: 6,
    timeline: [
      { phase: "Requirements & Design", duration: "3 weeks" },
      { phase: "Core Platform", duration: "10 weeks" },
      { phase: "Live Class Module", duration: "4 weeks" },
      { phase: "Testing & Beta", duration: "2 weeks" },
      { phase: "Launch", duration: "1 week" },
    ],
    features: [
      "Live video classes with interactive whiteboard",
      "Course builder with video, quizzes, and assignments",
      "Automated progress tracking and completion certificates",
      "Instructor analytics dashboard",
      "Mobile-responsive design with offline video support",
    ],
    techStack: ["React", "GraphQL", "PostgreSQL", "WebRTC", "Node.js", "AWS S3", "TypeScript"],
  },
  {
    slug: "logitrack-fleet-management",
    title: "LogiTrack — Fleet Management",
    tagline: "Real-time fleet tracking for 200+ vehicles with 30% fuel savings",
    category: "Mobile",
    industry: "Logistics",
    region: "South Asia",
    tags: ["Flutter", "Firebase", "Google Maps"],
    description:
      "A real-time fleet tracking and logistics management app for a transport company managing 200+ vehicles across the country.",
    challenge:
      "The client was managing 200+ vehicles with phone calls and WhatsApp. Dispatchers had no visibility into vehicle locations, fuel consumption was unmonitored, and route optimization was non-existent.",
    solution:
      "We built a Flutter app for drivers and a web dashboard for dispatchers. GPS tracking updates every 30 seconds via Firebase Realtime Database. Google Maps integration provides route optimization and ETA calculations.",
    metrics: [
      { value: "30%", label: "Fuel Savings" },
      { value: "200+", label: "Vehicles Tracked" },
      { value: "25%", label: "On-time Delivery Improvement" },
    ],
    result: "30% fuel savings",
    color: "from-[#00c2ff] to-[#0055ff]",
    icon: "ph:truck-bold",
    teamSize: 5,
    timeline: [
      { phase: "Discovery & Mapping", duration: "2 weeks" },
      { phase: "Driver App (Flutter)", duration: "6 weeks" },
      { phase: "Dispatcher Dashboard", duration: "6 weeks" },
      { phase: "Integration & Testing", duration: "2 weeks" },
      { phase: "Rollout", duration: "1 week" },
    ],
    features: [
      "Real-time GPS tracking with 30-second updates",
      "Route optimization with traffic-aware ETAs",
      "Fuel consumption monitoring and alerts",
      "Driver behavior scoring (speed, braking, idling)",
      "Automated dispatch and job assignment",
    ],
    techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js", "PostgreSQL", "React", "TypeScript"],
  },
  {
    slug: "brandforge-design-system",
    title: "BrandForge — Design System",
    tagline: "Comprehensive design system that cut UI development time by 50%",
    category: "Design",
    industry: "SaaS",
    region: "Europe",
    tags: ["Figma", "Storybook", "React"],
    description:
      "Built a comprehensive design system and component library for a SaaS company, cutting UI development time in half.",
    challenge:
      "A 40-person engineering team was building UI inconsistently across 6 product areas. Designers and developers had no shared language, resulting in duplicated components, inconsistent spacing, and a fragmented user experience.",
    solution:
      "We audited the existing UI, identified 80+ unique components, and consolidated them into a unified design system. Figma tokens sync directly to a React component library published on npm. Storybook serves as the living documentation.",
    metrics: [
      { value: "50%", label: "Faster UI Development" },
      { value: "80+", label: "Components Built" },
      { value: "40", label: "Engineers Onboarded" },
    ],
    result: "50% faster UI dev",
    color: "from-[#7c3aed] to-[#00c2ff]",
    icon: "ph:paint-brush-bold",
    teamSize: 4,
    timeline: [
      { phase: "UI Audit", duration: "2 weeks" },
      { phase: "Token & Foundation Design", duration: "2 weeks" },
      { phase: "Component Library Build", duration: "8 weeks" },
      { phase: "Documentation & Storybook", duration: "2 weeks" },
      { phase: "Team Rollout", duration: "2 weeks" },
    ],
    features: [
      "80+ production-ready React components",
      "Design tokens synced between Figma and code",
      "Storybook documentation with live examples",
      "Accessibility-first (WCAG 2.1 AA compliant)",
      "Dark mode support out of the box",
    ],
    techStack: ["Figma", "React", "TypeScript", "Storybook", "Tailwind CSS", "npm", "GitHub Actions"],
  },
  {
    slug: "secureops-devsecops-pipeline",
    title: "SecureOps — DevSecOps Pipeline",
    tagline: "Fully automated security pipeline with zero incidents post-launch",
    category: "Cloud",
    industry: "FinTech",
    region: "Middle East",
    tags: ["GitHub Actions", "Kubernetes", "Vault"],
    description:
      "Designed and implemented a fully automated DevSecOps pipeline with security scanning, secret management, and zero-downtime deployments.",
    challenge:
      "A fintech client was failing security audits due to hardcoded secrets, no automated vulnerability scanning, and manual deployment processes that introduced human error. They needed to pass SOC 2 compliance within 6 months.",
    solution:
      "We implemented a DevSecOps pipeline with SAST/DAST scanning at every PR, HashiCorp Vault for secret management, and Kubernetes with OPA Gatekeeper for policy enforcement. All infrastructure changes require peer review and automated compliance checks.",
    metrics: [
      { value: "0", label: "Security Incidents" },
      { value: "SOC 2", label: "Compliance Achieved" },
      { value: "100%", label: "Secret Rotation Automated" },
    ],
    result: "Zero security incidents",
    color: "from-[#0055ff] to-[#00c2ff]",
    icon: "ph:shield-check-bold",
    teamSize: 4,
    timeline: [
      { phase: "Security Audit", duration: "2 weeks" },
      { phase: "Pipeline Architecture", duration: "2 weeks" },
      { phase: "Implementation", duration: "8 weeks" },
      { phase: "Compliance Review", duration: "3 weeks" },
      { phase: "SOC 2 Audit Support", duration: "2 weeks" },
    ],
    features: [
      "Automated SAST/DAST scanning on every pull request",
      "HashiCorp Vault for centralized secret management",
      "Kubernetes with OPA Gatekeeper policy enforcement",
      "Automated compliance reporting for SOC 2",
      "Zero-downtime rolling deployments",
    ],
    techStack: ["Kubernetes", "HashiCorp Vault", "GitHub Actions", "OPA Gatekeeper", "Trivy", "Prometheus", "Grafana"],
  },
  {
    slug: "retailiq-digital-transformation",
    title: "RetailIQ — Digital Transformation",
    tagline: "End-to-end digital transformation roadmap for a national retail chain",
    category: "Consulting",
    industry: "Retail",
    region: "South Asia",
    tags: ["Strategy", "Architecture", "Roadmap"],
    description:
      "Led a full digital transformation engagement for a retail chain — from technology audit to vendor selection and implementation roadmap.",
    challenge:
      "A 50-store retail chain was running on a 15-year-old ERP with no e-commerce presence, no customer data platform, and siloed inventory systems. Leadership knew they needed to modernize but didn't know where to start.",
    solution:
      "We conducted a 4-week technology audit across all systems, interviewed 30+ stakeholders, and delivered an 18-month transformation roadmap with phased priorities, vendor recommendations, and a total cost of ownership analysis.",
    metrics: [
      { value: "18-mo", label: "Roadmap Delivered" },
      { value: "30+", label: "Stakeholders Interviewed" },
      { value: "35%", label: "Projected Cost Savings" },
    ],
    result: "18-month roadmap delivered",
    color: "from-[#00c2ff] to-[#7c3aed]",
    icon: "ph:path-bold",
    teamSize: 3,
    timeline: [
      { phase: "Stakeholder Interviews", duration: "2 weeks" },
      { phase: "Technology Audit", duration: "2 weeks" },
      { phase: "Roadmap Development", duration: "3 weeks" },
      { phase: "Vendor Evaluation", duration: "2 weeks" },
      { phase: "Presentation & Handover", duration: "1 week" },
    ],
    features: [
      "Current-state technology audit across 15 systems",
      "18-month phased transformation roadmap",
      "Vendor shortlist with evaluation scorecard",
      "Total cost of ownership analysis",
      "Change management and team upskilling plan",
    ],
    techStack: ["Strategy", "Enterprise Architecture", "Vendor Analysis", "TCO Modeling", "Stakeholder Management"],
  },
];

export const categories = ["All", "Web", "Mobile", "Cloud", "Design", "Consulting"];
