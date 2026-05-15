const stats = [
  { value: "9+", label: "Projects Delivered" },
  { value: "6", label: "Industries Served" },
  { value: "4", label: "Regions" },
  { value: "100%", label: "On-time Delivery" },
];

export default function PortfolioStats() {
  return (
    <section className="bg-[#070b1f] border-y border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-[#00c2ff]">{s.value}</p>
            <p className="text-gray-500 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
