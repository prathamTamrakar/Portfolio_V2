import { useState, useEffect } from "react";

/**
 * Tracks which section ID is active in the viewport.
 * @param {string[]} ids Array of section IDs (e.g. ['home', 'about', 'skills'])
 * @param {object} options IntersectionObserver configurations
 */
export function useScrollSpy(ids, options) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    const observerOptions = options || {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when element is in the middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [ids, options]);

  return activeId;
}
