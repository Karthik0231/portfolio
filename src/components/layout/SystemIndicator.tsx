"use client";

import { useSystemStore } from "@/store/systemStore";
import { useInteractionStore } from "@/store/interactionStore";
import { useEffect, useState } from "react";

export function SystemIndicator() {
  const { activeSection, activeSectionIndex, blueprintState } = useSystemStore();
  const { isSystemOnline, triggerSystemOnline, setCursor } = useInteractionStore();
  const [mounted, setMounted] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (isSystemOnline) return;
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) {
      triggerSystemOnline();
    }
  };

  if (!mounted) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 md:bottom-12 md:left-12 z-40 pointer-events-auto mix-blend-difference text-white flex flex-col gap-1 font-mono text-[10px] md:text-xs tracking-widest uppercase cursor-none"
      onClick={handleClick}
      onMouseEnter={() => setCursor("EXPLORE")}
      onMouseLeave={() => setCursor("DEFAULT")}
      data-cursor="EXPLORE"
    >
      <div className="flex items-center gap-2 opacity-50">
        <span>{activeSectionIndex}</span>
        <span className="w-4 h-[1px] bg-white/50"></span>
        <span>{activeSection}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full bg-white ${isSystemOnline ? 'animate-ping' : 'animate-pulse'}`}></span>
        <span className={`${isSystemOnline ? 'text-green-400' : ''}`}>SYS: {isSystemOnline ? 'ONLINE_MODE_ACTIVATED' : blueprintState}</span>
      </div>
    </div>
  );
}
