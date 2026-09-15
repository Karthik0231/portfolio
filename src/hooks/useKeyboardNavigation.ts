"use client";

import { useEffect } from "react";
import { useInteractionStore } from "@/store/interactionStore";

export function useKeyboardNavigation() {
  const { setCursor, setTrace } = useInteractionStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "1":
          document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "2":
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "3":
          document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "4":
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          break;
        case "Escape":
          setCursor("DEFAULT");
          setTrace(null);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCursor, setTrace]);
}
