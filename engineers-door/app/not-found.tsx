import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="relative bg-[#0a0f2c] min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00c2ff] opacity-[0.05] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* 404 number */}
          <p className="text-[10rem] md:text-[14rem] font-bold leading-none text-white/5 select-none">
            404
          </p>

          {/* Overlay content */}
          <div className="-mt-16 md:-mt-24">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#00c2ff]" />
              <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
                Page Not Found
              </span>
              <span className="h-px w-10 bg-[#00c2ff]" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Looks Like You're Lost
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="bg-[#00c2ff] text-[#0a0f2c] px-8 py-3.5 rounded-md font-semibold text-sm hover:bg-white transition-colors duration-200 w-full sm:w-auto"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:border-[#00c2ff] hover:text-[#00c2ff] transition-colors duration-200 w-full sm:w-auto"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
