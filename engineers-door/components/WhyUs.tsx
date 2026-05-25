import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";

const reasons = [
  {
    icon: "ph:seal-check-bold",
    title: "Proven Expertise",
    description:
      "Our engineers bring deep domain knowledge across industries — finance, healthcare, e-commerce, and more.",
  },
  {
    icon: "ph:lightning-bold",
    title: "Fast Delivery",
    description:
      "We move quickly without cutting corners. Agile workflows and clear communication keep every project on track.",
  },
  {
    icon: "ph:handshake-bold",
    title: "Client-First Approach",
    description:
      "We treat every project as a partnership. Your goals are our goals — we stay involved from kickoff to launch.",
  },
  {
    icon: "ph:shield-check-bold",
    title: "Security by Default",
    description:
      "Security is built into every layer of our development process — not added as an afterthought.",
  },
  {
    icon: "ph:trend-up-bold",
    title: "Scalable Solutions",
    description:
      "We architect systems that grow with your business — built to handle today's needs and tomorrow's demands.",
  },
  {
    icon: "ph:headset-bold",
    title: "24/7 Support",
    description:
      "Our team is always available. Post-launch support, maintenance, and monitoring — we've got you covered.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <AnimateIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Engineers Door
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Difference Is in the Details
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            We don&apos;t just write code — we solve problems, build relationships,
            and deliver results that matter.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimateIn key={reason.title} delay={i * 0.08}>
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff]">
                  <Icon icon={reason.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
