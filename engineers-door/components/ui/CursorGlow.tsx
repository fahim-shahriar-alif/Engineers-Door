"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-[400px] h-[400px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(0,194,255,0.07) 0%, rgba(0,194,255,0.03) 40%, transparent 70%)",
        transition: "transform 0.12s ease-out",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
