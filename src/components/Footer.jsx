import React from "react";
import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { DEVELOPER_INFO } from "../constants/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md py-8 select-none">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo / Name */}
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-heading font-extrabold text-sm tracking-tight text-text-primary">
            {DEVELOPER_INFO.name}
          </span>
          <span className="text-[10px] text-muted font-light mt-0.5">
            Full Stack Developer Portfolio
          </span>
        </div>

        {/* Made with and Copyright */}
        <div className="flex items-center gap-1 text-[11px] text-muted/60 font-light order-last sm:order-none">
          <span>&copy; {currentYear}</span>
          <span>•</span>
          <span>Made with</span>
          <Heart size={10} className="text-secondary fill-secondary animate-pulse" />
          <span>in India</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 hover:border-white/20 bg-white/3 text-muted hover:text-text-primary transition-all duration-300 hover:scale-105"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={DEVELOPER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 hover:border-white/20 bg-white/3 text-muted hover:text-secondary transition-all duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${DEVELOPER_INFO.email}`}
            className="p-2 rounded-full border border-white/5 hover:border-white/20 bg-white/3 text-muted hover:text-primary transition-all duration-300 hover:scale-105"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
