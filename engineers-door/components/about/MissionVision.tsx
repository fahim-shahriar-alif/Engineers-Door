import { Icon } from "@iconify/react";

export default function MissionVision() {
  return (
    <section className="bg-[#0a0f2c] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Mission */}
          <div className="relative bg-[#0d1435] border border-white/5 rounded-2xl p-10 overflow-hidden group hover:border-[#00c2ff]/30 transition-all duration-300">
            <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-[#00c2ff] opacity-[0.04] rounded-full blur-[60px] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff] mb-6">
                <Icon icon="ph:rocket-launch-bold" className="w-6 h-6" />
              </div>
              <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                Our Mission
              </span>
              <h3 className="text-white text-2xl font-bold mt-2 mb-4">
                Empowering Businesses Through Technology
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Our mission is to deliver high-quality, scalable technology
                solutions that empower businesses to grow, compete, and succeed
                in a digital-first world. We do this by combining deep technical
                expertise with a genuine commitment to our clients&apos; success.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-[#0d1435] border border-white/5 rounded-2xl p-10 overflow-hidden group hover:border-[#00c2ff]/30 transition-all duration-300">
            <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-[#00c2ff] opacity-[0.04] rounded-full blur-[60px] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff] mb-6">
                <Icon icon="ph:eye-bold" className="w-6 h-6" />
              </div>
              <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                Our Vision
              </span>
              <h3 className="text-white text-2xl font-bold mt-2 mb-4">
                To Be the Most Trusted IT Partner Globally
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                We envision a world where every business — regardless of size or
                location — has access to world-class engineering talent and
                technology solutions. Engineers Door aims to be the bridge that
                makes that possible.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
