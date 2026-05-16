"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#00c2ff] text-[#0a0f2c] flex items-center justify-center shadow-lg shadow-[#00c2ff]/20 hover:bg-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c2ff]"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon icon="ph:arrow-up-bold" className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
