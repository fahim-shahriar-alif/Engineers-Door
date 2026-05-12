"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function CountUp({
  value,
  suffix = "",
  duration = 1800,
  delay = 0,
  className,
}: CountUpProps) {
  const { count, ref } = useCountUp(value, duration, delay);

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
}
