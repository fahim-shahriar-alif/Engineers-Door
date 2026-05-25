import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Team() {
  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#00c2ff]" />
            <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
              The People Behind It
            </span>
            <span className="h-px w-10 bg-[#00c2ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet the Team
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base">
            A dedicated group of engineers and designers based in Dhaka,
            Bangladesh — passionate about building technology that works.
          </p>
        </div>

        <div className="bg-[#0d1435] border border-white/5 rounded-2xl p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff] mx-auto mb-5">
            <Icon icon="ph:users-three-bold" className="w-8 h-8" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Team profiles coming soon</h3>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            We&apos;re putting together our team page. In the meantime, feel free to
            reach out and get to know us directly.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 border border-[#00c2ff]/30 text-[#00c2ff] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#00c2ff] hover:text-[#0a0f2c] transition-all duration-200"
          >
            Get in Touch →
          </Link>
        </div>

      </div>
    </section>
  );
}
