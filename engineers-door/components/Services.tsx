import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";

const services = [
  {
    icon: "ph:code-bold",
    title: "Software Development",
    description:
      "Custom web and desktop applications built with modern technologies, tailored to your business needs.",
  },
  {
    icon: "ph:device-mobile-bold",
    title: "Mobile App Development",
    description:
      "iOS and Android applications with seamless user experiences, from concept to App Store launch.",
  },
  {
    icon: "ph:cloud-bold",
    title: "Cloud & DevOps",
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices that keep your systems running smoothly.",
  },
  {
    icon: "ph:pen-nib-bold",
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality — interfaces people actually enjoy using.",
  },
  {
    icon: "ph:chart-line-up-bold",
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help your business make the right decisions and stay ahead of the curve.",
  },
  {
    icon: "ph:users-three-bold",
    title: "Talent Solutions",
    description:
      "Access a vetted pool of skilled engineers and developers ready to integrate with your team on demand.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <AnimateIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            From strategy to execution, we cover the full spectrum of technology
            services your business needs to grow.
          </p>
        </AnimateIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 0.08}>
              <div className="group bg-[#0d1435] border border-white/5 rounded-xl p-7 hover:border-[#00c2ff]/40 hover:bg-[#0f1840] transition-all duration-300 h-full">
                <div className="text-[#00c2ff] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={service.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
