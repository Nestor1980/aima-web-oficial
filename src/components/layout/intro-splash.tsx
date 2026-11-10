"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/logo";

/**
 * Pantalla de entrada: logo AIMA 2026 latiendo sobre fondo claro,
 * que se desvanece a los 2 s (igual que la intro de la web anterior).
 */
export function IntroSplash() {
  const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");

  useEffect(() => {
    const fade = setTimeout(() => setPhase("fade"), 2000);
    const gone = setTimeout(() => setPhase("gone"), 3000);
    return () => {
      clearTimeout(fade);
      clearTimeout(gone);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F14] transition-opacity duration-1000 ease-in-out ${
        phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Logo className="h-16 text-[#F3F4F9] motion-safe:animate-pulse sm:h-24 md:h-32" />
    </div>
  );
}
