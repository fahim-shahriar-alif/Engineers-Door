"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import AnimateIn from "@/components/ui/AnimateIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#070b1f] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="relative bg-[#0d1435] border border-[#00c2ff]/20 rounded-2xl px-8 py-14 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#00c2ff] opacity-[0.05] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#00c2ff]" />
                <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                  Stay in the Loop
                </span>
                <span className="h-px w-10 bg-[#00c2ff]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Get New Articles in Your Inbox
              </h2>
              <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
                No spam. Just practical engineering insights delivered once or
                twice a month.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#00c2ff]/10 border border-[#00c2ff]/30 flex items-center justify-center text-[#00c2ff]">
                    <Icon icon="ph:check-bold" className="w-6 h-6" />
                  </div>
                  <p className="text-white font-medium">You're subscribed!</p>
                  <p className="text-gray-500 text-sm">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-[#0a0f2c] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#00c2ff]/50 transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="bg-[#00c2ff] text-[#0a0f2c] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white transition-colors duration-200 whitespace-nowrap"
                  >
                    Subscribe →
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
