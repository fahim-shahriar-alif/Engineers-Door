"use client";

import { motion } from "framer-motion";

export default function PageHeroOrbs() {
  return (
    <>
      <motion.div
        className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#00c2ff", opacity: 0.06, filter: "blur(120px)" }}
        animate={{ scale: [1, 1.15, 0.95, 1.1, 1], y: [0, -20, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-40px] right-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "#7c3aed", opacity: 0.05, filter: "blur(100px)" }}
        animate={{ scale: [1, 1.1, 0.9, 1.05, 1], y: [0, 15, -10, 5, 0] }}
        transition={{ duration: 15, delay: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
