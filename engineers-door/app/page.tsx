import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Engineers<span className="text-[#00c2ff]">Door</span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-xl">
          Your gateway to world-class IT solutions, software development, and tech talent.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="/services"
            className="bg-[#00c2ff] text-[#0a0f2c] px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-200"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="border border-[#00c2ff] text-[#00c2ff] px-6 py-3 rounded-full font-semibold hover:bg-[#00c2ff] hover:text-[#0a0f2c] transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
