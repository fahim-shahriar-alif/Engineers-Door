"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 30, suffix: "+", label: "Global Clients" },
  { value: 5, suffix: "+", label: "Years of Experience" },
];

const floatingOrbs = [
  { size: 600, top: "-10%", left: "30%", color: "#00c2ff", duration: 14, delay: 0 },
  { size: 400, top: "40%", left: "-5%", color: "#0055ff", duration: 18, delay: 3 },
  { size: 350, top: "20%", left: "70%", color: "#7c3aed", duration: 16, delay: 6 },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98],
  } as Transition,
});

export default function Hero() {
  const { displayed, done } = useTypewriter("One Solution at a Time", 55, 900);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a0f2c]">

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00c2ff 1px, transparent 1px), linear-gradient(90deg, #00c2ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating animated orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            background: orb.color,
            opacity: 0.07,
            filter: "blur(120px)",
          }}
          animate={{
            y: [0, -40, 20, -20, 0],
            x: [0, 20, -15, 10, 0],
            scale: [1, 1.08, 0.95, 1.04, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          {...fadeUp(0.1)}
        >
          <motion.span
            className="h-px bg-[#00c2ff]"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <span className="text-[#00c2ff] text-xs font-semibold tracking-[0.2em] uppercase">
            Engineering Excellence
          </span>
          <motion.span
            className="h-px bg-[#00c2ff]"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Heading with typewriter */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          {...fadeUp(0.25)}
        >
          Building the Future,{" "}
          <br className="hidden md:block" />
          One{" "}
          <span className="text-[#00c2ff]">
            {displayed}
          </span>
          {/* Blinking cursor */}
          {!done && (
            <motion.span
              className="inline-block w-[3px] h-[0.85em] bg-[#00c2ff] ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          {...fadeUp(0.4)}
        >
          Engineers Door delivers end-to-end software development, IT consulting,
          and technology solutions that drive real business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          {...fadeUp(0.55)}
        >
          <Link
            href="/services"
            className="relative overflow-hidden group bg-[#00c2ff] text-[#0a0f2c] px-8 py-3.5 rounded-md font-semibold text-sm w-full sm:w-auto"
          >
            <span className="relative z-10">Our Services</span>
            <motion.span
              className="absolute inset-0 bg-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 text-white px-8 py-3.5 rounded-md font-semibold text-sm hover:border-[#00c2ff] hover:text-[#00c2ff] transition-colors duration-300 w-full sm:w-auto"
          >
            Start a Project →
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 border-t border-white/10 pt-10"
          {...fadeUp(0.7)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  delay={800 + i * 120}
                  className="text-3xl md:text-4xl font-bold text-white"
                />
                <p className="text-gray-500 text-xs mt-1.5 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0f2c] to-transparent pointer-events-none" />
    </section>
  );
}
