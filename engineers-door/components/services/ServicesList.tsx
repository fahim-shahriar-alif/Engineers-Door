import { Icon } from "@iconify/react";

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
    icon: "ph:code-bold",
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
    icon: "ph:device-mobile-bold",
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
    icon: "ph:cloud-bold",
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
    icon: "ph:pen-nib-bold",
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
    icon: "ph:chart-line-up-bold",
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
    icon: "ph:users-three-bold",
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
                <Icon icon={service.icon} className="w-8 h-8" />
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
