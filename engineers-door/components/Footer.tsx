import Link from "next/link";
import { Icon } from "@iconify/react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Software Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
    { label: "IT Consulting", href: "/services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socials = [
  { label: "LinkedIn", href: "#", icon: "ph:linkedin-logo-bold" },
  { label: "GitHub",   href: "#", icon: "ph:github-logo-bold"   },
  { label: "Twitter",  href: "#", icon: "ph:x-logo-bold"        },
];

export default function Footer() {
  return (
    <footer className="bg-[#070b1f] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-white text-2xl font-bold tracking-tight">
              Engineers<span className="text-[#00c2ff]">Door</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
              Delivering end-to-end technology solutions that help businesses
              build, scale, and innovate with confidence.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-500 hover:text-[#00c2ff] transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00c2ff] rounded"
                >
                  <Icon icon={s.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#00c2ff] text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00c2ff] rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Engineers Door. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Founded 2022 · Dhaka, Bangladesh
          </p>
        </div>

      </div>
    </footer>
  );
}
