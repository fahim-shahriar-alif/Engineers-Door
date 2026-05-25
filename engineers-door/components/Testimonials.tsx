"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";

const testimonials = [
  {
    name: "James Whitfield",
    role: "CTO",
    company: "NovaPay",
    initials: "JW",
    gradient: "from-[#0055ff] to-[#00c2ff]",
    quote:
      "Engineers Door completely transformed our payment infrastructure. They delivered a robust, scalable system in half the time we expected. Their communication was exceptional throughout — we always knew exactly where things stood.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Head of Product",
    company: "HealthBridge",
    initials: "PM",
    gradient: "from-[#7c3aed] to-[#00c2ff]",
    quote:
      "We hired Engineers Door to build our telemedicine platform from scratch. The team was deeply technical, asked the right questions, and built something we're genuinely proud of. Our users love the experience.",
    rating: 5,
  },
  {
    name: "Daniel Osei",
    role: "Founder & CEO",
    company: "ShopFlow",
    initials: "DO",
    gradient: "from-[#00c2ff] to-[#7c3aed]",
    quote:
      "I've worked with several dev agencies before, and Engineers Door is in a different league. They don't just execute — they think strategically about your product. Our conversion rate doubled after the redesign.",
    rating: 5,
  },
  {
    name: "Sarah Lindqvist",
    role: "VP Engineering",
    company: "LogiTrack",
    initials: "SL",
    gradient: "from-[#0055ff] to-[#7c3aed]",
    quote:
      "The fleet management app they built handles 200+ vehicles in real time without a hiccup. The code quality is outstanding — our internal team was able to take it over seamlessly after handoff.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Director of IT",
    company: "RetailIQ",
    initials: "AA",
    gradient: "from-[#00c2ff] to-[#0055ff]",
    quote:
      "Their IT consulting team helped us navigate a complex digital transformation. They gave us an honest assessment, a clear roadmap, and stayed involved through implementation. Exactly what we needed.",
    rating: 5,
  },
  {
    name: "Mei Zhang",
    role: "Co-Founder",
    company: "EduPath",
    initials: "MZ",
    gradient: "from-[#7c3aed] to-[#0055ff]",
    quote:
      "Engineers Door built our entire LMS platform — live classes, progress tracking, certificates. They were fast, responsive, and genuinely cared about the outcome. We launched on time and under budget.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} icon="ph:star-fill" className="w-4 h-4 text-[#00c2ff]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const visible = [
    testimonials[(active) % testimonials.length],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimateIn className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              Client Stories
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            Don&apos;t take our word for it — here&apos;s what the people we&apos;ve worked
            with have to say.
          </p>
        </AnimateIn>

        {/* Cards */}
        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {visible.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className={`bg-[#0d1435] border rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 ${
                  i === 0
                    ? "border-[#00c2ff]/30 shadow-lg shadow-[#00c2ff]/5"
                    : "border-white/5"
                }`}
              >
                {/* Stars */}
                <StarRating count={t.rating} />

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &quot;{t.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#00c2ff]/50 hover:text-[#00c2ff] transition-all duration-200"
            >
              <Icon icon="ph:caret-left-bold" className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === active
                      ? "w-6 h-2 bg-[#00c2ff]"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#00c2ff]/50 hover:text-[#00c2ff] transition-all duration-200"
            >
              <Icon icon="ph:caret-right-bold" className="w-4 h-4" />
            </button>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
