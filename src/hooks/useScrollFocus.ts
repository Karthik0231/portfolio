"use client";
import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollFocusOptions = {
  triggerElement: RefObject<HTMLElement | null>;
  itemSelector: string;
  onActive?: (index: number, element: HTMLElement) => void;
  onInactive?: (index: number, element: HTMLElement) => void;
};

export function useScrollFocus({
  triggerElement,
  itemSelector,
  onActive,
  onInactive,
}: ScrollFocusOptions) {
  useEffect(() => {
    if (!triggerElement.current) return;
    
    // Register ScrollTrigger to be safe, though global layout should have done it
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(itemSelector);
      
      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%", // Focus zone starts slightly below center
          end: "bottom 40%", // Focus zone ends slightly above center
          onEnter: () => {
            gsap.to(item, { opacity: 1, scale: 1.02, duration: 0.5, ease: "power2.out" });
            if (onActive) onActive(index, item);
          },
          onLeave: () => {
            gsap.to(item, { opacity: 0.5, scale: 1, duration: 0.5, ease: "power2.out" });
            if (onInactive) onInactive(index, item);
          },
          onEnterBack: () => {
            gsap.to(item, { opacity: 1, scale: 1.02, duration: 0.5, ease: "power2.out" });
            if (onActive) onActive(index, item);
          },
          onLeaveBack: () => {
            gsap.to(item, { opacity: 0.5, scale: 1, duration: 0.5, ease: "power2.out" });
            if (onInactive) onInactive(index, item);
          },
        });
      });
    }, triggerElement);
    
    return () => ctx.revert();
  }, [triggerElement, itemSelector, onActive, onInactive]);
}
