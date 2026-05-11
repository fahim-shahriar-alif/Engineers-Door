import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#0d1435] border border-[#00c2ff]/20 rounded-2xl px-8 py-14 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-[#00c2ff] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#00c2ff]" />
              <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                Let's Work Together
              </span>
              <span className="h-px w-10 bg-[#00c2ff]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us what you're building and we'll put together the right team
              and plan to make it happen. No commitment required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#00c2ff] text-[#0a0f2c] px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-white transition-colors duration-200 w-full sm:w-auto"
              >
                Start a Conversation
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/20 text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:border-[#00c2ff] hover:text-[#00c2ff] transition-colors duration-200 w-full sm:w-auto"
              >
                View Our Work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
