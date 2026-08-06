import React, { useState } from "react";
import { Clipboard, Check, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_CODE } from "../constants/portfolio";

export default function CodeEditor() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(HERO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ y: [0, -8, 0] }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: { duration: 0.8 },
      }}
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Glow Backdrops */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl pointer-events-none animate-pulse-slow" />

      {/* Editor Main Container */}
      <div className="relative rounded-xl border border-white/10 glass-premium overflow-hidden shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm text-left">
        {/* Header Tab Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/5 select-none">
          {/* OS Circle Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          {/* Active File Name Tab */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-t-md bg-surface border-t border-x border-white/10 text-[11px] text-muted font-medium">
            <Terminal size={12} className="text-secondary" />
            <span>portfolio.json</span>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 text-muted hover:text-text-primary transition-all active:scale-95"
            title="Copy Code"
          >
            {copied ? (
              <Check size={14} className="text-emerald-400" />
            ) : (
              <Clipboard size={14} />
            )}
          </button>
        </div>

        {/* Code Content Editor Area */}
        <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed bg-[#0c0c0e]/60 min-h-[280px] flex">
          {/* Line Numbers Sidebar */}
          <div className="text-muted/30 text-right pr-4 select-none border-r border-white/5 flex flex-col justify-between">
            {Array.from({ length: 15 }, (_, i) => (
              <span key={i} className="block text-[11px] sm:text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </div>

          {/* Styled Code Area */}
          <div className="pl-4 flex-1 whitespace-pre">
            {/* Row 1 */}
            <div>
              <span className="text-secondary">{"{"}</span>
            </div>
            {/* Row 2 */}
            <div>
              {"  "}
              <span className="text-primary">"name"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-accent">"Pratham Tamrakar"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 3 */}
            <div>
              {"  "}
              <span className="text-primary">"title"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-accent">"Full Stack Developer"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 4 */}
            <div>
              {"  "}
              <span className="text-primary">"location"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-accent">"Jabalpur, India"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 5 */}
            <div>
              {"  "}
              <span className="text-primary">"experience"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-accent">"Full Stack Developer Intern"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 6 */}
            <div>
              {"  "}
              <span className="text-primary">"education"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-accent">"B.Tech CSE (2026)"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 7 */}
            <div>
              {"  "}
              <span className="text-primary">"status"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-accent">"Available for Full-Time"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 8 */}
            <div>
              {"  "}
              <span className="text-primary">"specialization"</span>
              <span className="text-muted">:</span>{" "}
              <span className="text-secondary">{"["}</span>
            </div>
            {/* Row 9 */}
            <div>
              {"    "}
              <span className="text-emerald-400">"React"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 10 */}
            <div>
              {"    "}
              <span className="text-emerald-400">"Node.js"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 11 */}
            <div>
              {"    "}
              <span className="text-emerald-400">"Laravel"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 12 */}
            <div>
              {"    "}
              <span className="text-emerald-400">"MongoDB"</span>
              <span className="text-muted">,</span>
            </div>
            {/* Row 13 */}
            <div>
              {"    "}
              <span className="text-emerald-400">"PostgreSQL"</span>
            </div>
            {/* Row 14 */}
            <div>
              {"  "}
              <span className="text-secondary">{"]"}</span>
            </div>
            {/* Row 15 */}
            <div className="flex items-center">
              <span className="text-secondary">{"}"}</span>
              {/* Blinking typing cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-4 bg-primary ml-1 inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
