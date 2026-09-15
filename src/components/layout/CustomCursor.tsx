"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInteractionStore } from "@/store/interactionStore";
import { useKeyboardNavigation } from "@/hooks/useKeyboardNavigation";

export function CustomCursor() {
  useKeyboardNavigation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorType, cursorLabel } = useInteractionStore();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('[data-cursor]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Determine variant based on state
  const isDefault = cursorType === 'DEFAULT' && !isHovering;
  const showRing = cursorType !== 'DEFAULT' || isHovering;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isDefault ? 1 : 0
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[100] mix-blend-difference hidden md:flex"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          opacity: showRing ? 1 : 0,
          scale: showRing ? 1 : 0.5,
          width: 64,
          height: 64,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      >
        <div className="w-full h-full rounded-full border border-foreground opacity-50 relative flex items-center justify-center">
          {cursorLabel && (
            <span className="absolute -bottom-8 text-[10px] font-mono tracking-widest uppercase text-foreground whitespace-nowrap opacity-80">
              {cursorLabel}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
}
