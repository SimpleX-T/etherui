"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CounterAnimation({
  end,
  suffix = "",
  duration = 2000,
  className = "text-5xl md:text-7xl font-bold text-purple-400",
}: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`text-transparent bg-clip-text bg-gradient-to-bl from-[#D2FF3A] to-[#6843EC] ${className}`}
    >
      {count}
      {suffix}
    </div>
  );
}
