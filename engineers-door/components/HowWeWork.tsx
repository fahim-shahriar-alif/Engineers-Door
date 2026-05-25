import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    icon: "ph:magnifying-glass-bold",
    title: "Discovery & Planning",
    description:
      "We start with a deep-dive into your goals, constraints, and users. We ask the hard questions upfront so there are no surprises later — and leave with a clear scope, timeline, and plan.",
    details: ["Requirements gathering", "Technical feasibility review", "Project roadmap & timeline", "Fixed-price or T&M proposal"],
  },
  {
    number: "02",
    icon: "ph:pencil-ruler-bold",
    title: "Design & Architecture",
    description:
      "Before a single line of code is written, we design the system and the experience. UI/UX wireframes, database schema, API contracts — everything is agreed on before development begins.",
    details: ["UI/UX wireframes & prototypes", "System architecture design", "Tech stack finalization", "Design system setup"],
  },
  {
    number: "03",
    icon: "ph:code-bold",
    title: "Agile Development",
    description:
      "We build in two-week sprints with regular demos and check-ins. You see real progress every week — not a black box that opens at the end. Feedback is incorporated continuously.",
    details: ["2-week sprint cycles", "Weekly progress demos", "Continuous integration & testing", "Transparent communication"],
  },
  {
    number: "04",
    icon: "ph:rocket-launch-bold",
    title: "Launch & Handover",
    description:
      "We handle deployment, monitoring setup, and documentation. After launch, we stay involved — whether that's ongoing support, training your team, or scaling the system as you grow.",
    details: ["Production deployment", "Performance monitoring", "Full documentation & handover", "Post-launch support"],
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How We Work
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            A clear, repeatable process that keeps projects on track and clients
            informed — from first call to final launch.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.1}>
              <div className="relative group bg-[#0d1435] border border-white/5 rounded-2xl p-7 hover:border-[#00c2ff]/40 transition-all duration-300 h-full flex flex-col">

                {/* Connector line (desktop only, not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-white/10 z-10" />
                )}

                {/* Step number */}
                <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300 select-none absolute top-5 right-6">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff] mb-5 group-hover:bg-[#00c2ff]/20 transition-colors duration-300">
                  <Icon icon={step.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {step.description}
                </p>

                {/* Detail list */}
                <ul className="space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-[#00c2ff] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={0.4}>
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Ready to get started? The first call is free and there&apos;s no commitment.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#00c2ff] text-[#0a0f2c] px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-white transition-colors duration-200"
            >
              Start a Conversation →
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
