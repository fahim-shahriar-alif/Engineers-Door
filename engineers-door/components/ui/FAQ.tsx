"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <AnimateIn className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              FAQ
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className={`bg-[#0d1435] border rounded-xl overflow-hidden transition-all duration-300 ${
                  open === i ? "border-[#00c2ff]/30" : "border-white/5"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={`text-sm font-semibold transition-colors duration-200 ${open === i ? "text-[#00c2ff]" : "text-white"}`}>
                    {item.question}
                  </span>
                  <span className={`flex-shrink-0 ml-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "border-[#00c2ff] text-[#00c2ff] rotate-45"
                      : "border-white/20 text-gray-400"
                  }`}>
                    <Icon icon="ph:plus-bold" className="w-3 h-3" />
                  </span>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${open === i ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
