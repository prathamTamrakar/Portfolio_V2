import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill, index }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Match the spotlight color to the category theme
  const getSpotlightColor = (cat) => {
    switch (cat) {
      case "Frontend":
        return "rgba(34, 211, 238, 0.18)"; // Cyan
      case "Backend":
        return "rgba(139, 92, 246, 0.18)"; // Purple
      case "Database":
        return "rgba(52, 211, 153, 0.18)"; // Emerald
      case "Tools":
        return "rgba(250, 204, 21, 0.15)"; // Yellow
      default:
        return "rgba(255, 255, 255, 0.1)";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-md p-6 group transition-all duration-500 hover:shadow-xl hover:shadow-black/40 overflow-hidden"
    >
      {/* Dynamic Colored Spotlight Glow Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, ${getSpotlightColor(
            skill.category
          )}, transparent 85%)`,
        }}
      />

      {/* Ambient background blob */}
      <div
        className={`absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br ${skill.glowColor} blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
      />

      {/* Skill Card Title */}
      <h3 className={`font-heading text-lg font-bold ${skill.textColor} mb-4 relative z-10 select-none`}>
        {skill.category}
      </h3>

      {/* Skill Badges List */}
      <div className="flex flex-wrap gap-2.5 relative z-10">
        {skill.items.map((item, itemIdx) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-xs font-medium px-3 py-1.5 rounded-lg border border-white/5 bg-black/30 text-text-primary/95 shadow-sm hover:border-white/20 select-none cursor-default hover:bg-black/50"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
