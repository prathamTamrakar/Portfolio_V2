import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to track the user's cursor position.
 * Throttled via requestAnimationFrame to avoid flooding the main thread.
 */
export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (rafId.current) return; // skip if a frame is already queued
      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
        rafId.current = null;
      });
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return mousePosition;
}
