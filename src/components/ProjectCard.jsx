import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl border border-white/5 bg-surface/40 backdrop-blur-md overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
    >
      {/* Dynamic Cursor Spotlight Border Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`,
        }}
      />

      {/* Card Image Area */}
      <div className="relative overflow-hidden aspect-video border-b border-white/5">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
          loading="lazy"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow select-none">
        {/* Project Name */}
        <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-300 mb-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-4 flex-grow font-light">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-muted border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button Actions */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg border border-white/10 hover:border-text-primary text-muted hover:text-text-primary transition-all active:scale-95 bg-black/25"
          >
            <Github size={14} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-primary hover:bg-cyan-400 text-background font-bold transition-all active:scale-95 shadow-md shadow-primary/10"
          >
            <ExternalLink size={14} />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
