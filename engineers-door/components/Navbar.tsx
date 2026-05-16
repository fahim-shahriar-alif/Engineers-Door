"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", sectionId: "services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const homeSections = ["home", "services", "why-us", "tech"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(pathname === "/" ? homeSections : []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (link: (typeof navLinks)[0]) => {
    if (pathname === "/" && link.sectionId) {
      if (activeSection === "") return link.href === "/";
      return activeSection === link.sectionId;
    }
    return link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
  };

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f2c]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-[#0a0f2c] border-b border-[#1a2050]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold tracking-tight flex-shrink-0">
          Engineers<span className="text-[#00c2ff]">Door</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 block ${
                    active ? "text-[#00c2ff]" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-[#00c2ff]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href="/contact"
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
              pathname === "/contact"
                ? "bg-white text-[#0a0f2c]"
                : "bg-[#00c2ff] text-[#0a0f2c] hover:bg-white"
            }`}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00c2ff] rounded p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Icon icon={menuOpen ? "ph:x-bold" : "ph:list-bold"} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#0d1435] border-t border-white/5 px-6 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <ul className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        active
                          ? "text-[#00c2ff] bg-[#00c2ff]/5"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#00c2ff] flex-shrink-0" />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="block bg-[#00c2ff] text-[#0a0f2c] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-200 text-center"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
