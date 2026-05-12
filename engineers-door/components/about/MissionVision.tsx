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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
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
                expertise with a genuine commitment to our clients' success.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-[#0d1435] border border-white/5 rounded-2xl p-10 overflow-hidden group hover:border-[#00c2ff]/30 transition-all duration-300">
            <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] bg-[#00c2ff] opacity-[0.04] rounded-full blur-[60px] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-[#00c2ff]/10 border border-[#00c2ff]/20 flex items-center justify-center text-[#00c2ff] mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
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
