import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, DEVELOPER_INFO } from "../constants/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract section IDs for scroll spy
  const sectionIds = NAV_LINKS.map((link) => link.href.split("#")[1]).filter(Boolean);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setIsOpen(false);
    const [path, hash] = href.split("#");

    if (location.pathname !== path) {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    } else if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isResumePage = location.pathname === "/resume";

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 py-4">
      <div
        className={`mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "max-w-5xl" : "max-w-[90rem]"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "glass-premium shadow-lg shadow-black/50 border-white/10"
              : "bg-transparent border-transparent"
          } border`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick("/#home", e)}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-background font-bold shadow-md shadow-primary/20 transition-transform group-hover:scale-105 duration-300">
              <Code2 size={18} className="text-black" />
            </div>
            <span className="font-heading font-extrabold text-lg tracking-tight bg-gradient-to-r from-text-primary via-text-primary to-muted bg-clip-text text-transparent group-hover:text-primary transition-colors duration-300">
              PT<span className="text-primary font-light">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const hash = link.href.split("#")[1];
              const isActive = !isResumePage && activeSection === hash;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                    isActive ? "text-primary" : "text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA / Resume Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="/Pratham_Tamrakar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 group overflow-hidden bg-surface border-border-custom text-text-primary hover:border-primary/50"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Resume
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-border-custom glass text-muted hover:text-text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 inset-x-4 z-40 md:hidden"
          >
            <div className="rounded-2xl border border-white/10 glass-premium p-6 shadow-2xl shadow-black/80 flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const hash = link.href.split("#")[1];
                const isActive = !isResumePage && activeSection === hash;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-white/5 hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <hr className="border-white/5 my-1" />
              <a
                href="/Pratham_Tamrakar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-bold text-center flex items-center justify-center gap-1.5 shadow-lg shadow-primary/10"
              >
                View Full Resume
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
