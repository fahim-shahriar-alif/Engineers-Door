const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "We design and build custom software solutions — from internal tools to customer-facing platforms. Our team works across the full stack to deliver reliable, maintainable, and scalable applications.",
    features: [
      "Custom web applications",
      "API design & integration",
      "Legacy system modernization",
      "SaaS product development",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "We build native and cross-platform mobile applications for iOS and Android. Whether it's a consumer app or an enterprise tool, we focus on performance, usability, and a polished experience.",
    features: [
      "iOS & Android development",
      "React Native & Flutter",
      "App Store & Play Store launch",
      "Push notifications & offline support",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6.75V15Zm0-3h.008v.008H6.75V12Zm0-3h.008v.008H6.75V9Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "We help teams move to the cloud, automate their infrastructure, and ship faster with modern DevOps practices. From AWS to GCP, we design systems that are resilient, cost-efficient, and easy to manage.",
    features: [
      "Cloud migration & architecture",
      "CI/CD pipeline setup",
      "Docker & Kubernetes",
      "Infrastructure as Code (Terraform)",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "Great software starts with great design. Our designers create intuitive, accessible, and visually compelling interfaces that users love — backed by research and tested with real users.",
    features: [
      "User research & wireframing",
      "Figma prototyping",
      "Design systems & component libraries",
      "Usability testing",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "IT Consulting",
    description:
      "Not sure where to start? Our consultants work with your leadership team to assess your current tech landscape, identify gaps, and build a clear roadmap for digital transformation.",
    features: [
      "Technology audits",
      "Digital transformation strategy",
      "Vendor & tool selection",
      "Architecture review",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Talent Solutions",
    description:
      "Need to scale your engineering team fast? We provide vetted, experienced developers and engineers who integrate seamlessly with your existing team — on a contract or long-term basis.",
    features: [
      "Staff augmentation",
      "Dedicated development teams",
      "Technical hiring support",
      "Onboarding & team integration",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

export default function ServicesList() {
  return (
    <section className="bg-[#0a0f2c] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`group flex flex-col lg:flex-row gap-8 bg-[#0d1435] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#00c2ff]/30 transition-all duration-300 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left — Icon + Number */}
            <div className="flex-shrink-0 flex flex-col items-start gap-4 lg:w-48">
              <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 select-none">
                {service.number}
              </span>
              <div className="w-14 h-14 rounded-xl bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff]">
                {service.icon}
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {service.description}
              </p>
              {/* Feature list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
