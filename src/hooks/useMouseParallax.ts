"use client";

import { useEffect, useState, RefObject } from "react";
import { motion, useSpring } from "framer-motion";

export function useMouseParallax(containerRef: RefObject<HTMLElement | null>, foregroundOffset = 10, backgroundOffset = -10) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const fgX = useSpring(0, springConfig);
  const fgY = useSpring(0, springConfig);
  const bgX = useSpring(0, springConfig);
  const bgY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5

      fgX.set(x * foregroundOffset);
      fgY.set(y * foregroundOffset);
      bgX.set(x * backgroundOffset);
      bgY.set(y * backgroundOffset);
    };

    const handleMouseLeave = () => {
      fgX.set(0);
      fgY.set(0);
      bgX.set(0);
      bgY.set(0);
    };

    const currentRef = containerRef.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [containerRef, foregroundOffset, backgroundOffset, fgX, fgY, bgX, bgY]);

  return { fgX, fgY, bgX, bgY };
}
