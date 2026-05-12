"use client";

import { motion, useInView, type Transition } from "framer-motion";
import { useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const transition: Transition = {
    duration: 0.7,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98],
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        filter: "blur(8px)",
        ...directionOffset[direction],
      }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0, x: 0 }
          : { opacity: 0, filter: "blur(8px)", ...directionOffset[direction] }
      }
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
