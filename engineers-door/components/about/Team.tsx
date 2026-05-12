const team = [
  {
    name: "Aryan Hossain",
    role: "Founder & CEO",
    bio: "Full-stack engineer with 10+ years of experience building scalable products for global companies.",
    initials: "AH",
  },
  {
    name: "Nadia Rahman",
    role: "CTO",
    bio: "Cloud architect and DevOps specialist who has led infrastructure for platforms serving millions of users.",
    initials: "NR",
  },
  {
    name: "Rafiq Islam",
    role: "Head of Engineering",
    bio: "Backend engineer passionate about clean architecture, performance, and mentoring the next generation of developers.",
    initials: "RI",
  },
  {
    name: "Sadia Karim",
    role: "Lead UI/UX Designer",
    bio: "Designer with a background in psychology, focused on creating interfaces that are both beautiful and intuitive.",
    initials: "SK",
  },
  {
    name: "Tanvir Ahmed",
    role: "Mobile Lead",
    bio: "React Native and Flutter expert who has shipped 20+ apps across healthcare, fintech, and e-commerce.",
    initials: "TA",
  },
  {
    name: "Mim Chowdhury",
    role: "Head of Client Success",
    bio: "Bridges the gap between clients and engineering teams, ensuring every project delivers real business value.",
    initials: "MC",
  },
];

const avatarColors = [
  "from-[#00c2ff] to-[#0055ff]",
  "from-[#7c3aed] to-[#00c2ff]",
  "from-[#0055ff] to-[#7c3aed]",
  "from-[#00c2ff] to-[#7c3aed]",
  "from-[#0055ff] to-[#00c2ff]",
  "from-[#7c3aed] to-[#0055ff]",
];

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
            A group of dedicated engineers, designers, and strategists who love
            what they do and care about doing it well.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="bg-[#0d1435] border border-white/5 rounded-xl p-7 hover:border-[#00c2ff]/30 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center text-white font-bold text-lg mb-5`}
              >
                {member.initials}
              </div>

              {/* Info */}
              <h3 className="text-white font-semibold text-lg">{member.name}</h3>
              <p className="text-[#00c2ff] text-xs font-medium tracking-wide mt-0.5 mb-3">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
