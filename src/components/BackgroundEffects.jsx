import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const spotlightRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(800px circle at ${ev.clientX}px ${ev.clientY}px, rgba(139, 92, 246, 0.08), rgba(34, 211, 238, 0.06) 35%, transparent 70%)`;
        }
        rafId.current = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background select-none pointer-events-none">
      {/* Noise filter overlay for texture */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-80" />

      {/* Structured CSS grid system */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      {/* Global Vignette (Dark borders) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#09090B_95%)] pointer-events-none" />

      {/* Mouse Spotlight effect — updated via direct DOM ref, no React re-renders */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none opacity-40 hidden md:block"
      />

      {/* Floating Ambient Mesh Blob 1 (Cyan/Primary) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-primary/10 blur-[130px] pointer-events-none"
      />

      {/* Floating Ambient Mesh Blob 2 (Violet/Secondary) */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-secondary/10 blur-[150px] pointer-events-none"
      />

      {/* Floating Ambient Mesh Blob 3 (Yellow/Accent - Subtle center) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
          scale: [0.8, 1, 0.8, 0.8],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] rounded-full bg-accent/3 blur-[120px] pointer-events-none"
      />
    </div>
  );
}
