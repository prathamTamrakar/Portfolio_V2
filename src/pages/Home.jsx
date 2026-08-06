import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Sparkles, Briefcase, GraduationCap, Award } from "lucide-react";
import { Github } from "../components/BrandIcons";
import { motion } from "framer-motion";
import { DEVELOPER_INFO, SKILLS, PROJECTS, EXPERIENCE, CERTIFICATIONS } from "../constants/portfolio";
import CodeEditor from "../components/CodeEditor";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const handleScrollTo = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full select-none">
      
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="min-h-screen pt-28 pb-16 flex flex-col justify-center items-center gap-12 lg:gap-16 border-b border-white/5 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full max-w-6xl mx-auto">
          {/* Left Column: Heading and description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold mb-6 animate-pulse-slow">
              <Sparkles size={12} className="text-primary fill-primary" />
              <span>Available for Full-Time Roles</span>
            </div>

            {/* Title / Name */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {DEVELOPER_INFO.name}
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-text-primary/90 mb-4">
              {DEVELOPER_INFO.tagline}
            </h2>

            {/* Subtitle */}
            <p className="text-muted text-sm sm:text-base font-light leading-relaxed max-w-md mb-8">
              {DEVELOPER_INFO.subtitle}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full max-w-sm lg:max-w-none">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo("projects", e)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-3 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-background font-bold text-sm shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all select-none cursor-pointer"
              >
                View Projects
                <ArrowRight size={16} />
              </a>

              <a
                href={DEVELOPER_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 py-3 px-6 rounded-full border border-white/10 hover:border-white/20 bg-surface/50 text-text-primary font-semibold text-sm hover:scale-[1.02] active:scale-95 transition-all select-none cursor-pointer"
              >
                Resume
              </a>
            </div>

            {/* Secondary CTA Links */}
            <div className="flex items-center gap-6 mt-8">
              <a
                href={DEVELOPER_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-muted hover:text-text-primary font-semibold transition-colors duration-300"
              >
                <Github size={14} />
                GitHub
              </a>
              <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <a
                href="#contact"
                onClick={(e) => handleScrollTo("contact", e)}
                className="flex items-center gap-1.5 text-xs text-muted hover:text-text-primary font-semibold transition-colors duration-300"
              >
                <Mail size={14} />
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code Editor Mockup */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <CodeEditor />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-2">About Me</h2>
            <p className="text-muted text-sm max-w-md mx-auto font-light">
              Get to know the developer, his specialization, and quick highlights.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Avatar vector mockup */}
            <motion.div variants={itemVariants} className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-white/5 bg-surface/30 backdrop-blur-md p-2 group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/15 opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
                
                {/* Tech grid SVG overlay */}
                <svg
                  className="w-full h-full text-muted/15 absolute inset-0 pointer-events-none group-hover:text-primary/10 transition-colors duration-500"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <path d="M10,0 L10,100 M20,0 L20,100 M30,0 L30,100 M40,0 L40,100 M50,0 L50,100 M60,0 L60,100 M70,0 L70,100 M80,0 L80,100 M90,0 L90,100" stroke="currentColor" strokeWidth="0.2" />
                  <path d="M0,10 L100,10 M0,20 L100,20 M0,30 L100,30 M0,40 L100,40 M0,50 L100,50 M0,60 L100,60 M0,70 L100,70 M0,80 L100,80 M0,90 L100,90" stroke="currentColor" strokeWidth="0.2" />
                  <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3,3" />
                  <polygon points="50,22 76,64 24,64" stroke="currentColor" strokeWidth="0.4" />
                </svg>

                {/* Shimmer reflection */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Center Initials */}
                <div className="absolute inset-0 flex items-center justify-center font-heading text-5xl font-black tracking-widest text-text-primary/30 group-hover:text-primary transition-colors duration-500 select-none">
                  PT
                </div>
              </div>
            </motion.div>

            {/* Right Col: Introduction + highlights */}
            <motion.div variants={itemVariants} className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <h3 className="font-heading text-xl font-bold text-text-primary">
                Passionate about clean code and modern designs.
              </h3>
              <p className="text-muted text-sm sm:text-base font-light leading-relaxed">
                I'm a B.Tech Computer Science & Engineering student (graduating in 2026) and a Full Stack Developer Intern based in Jabalpur, India. I specialize in building responsive, lightning-fast web applications. My core stack covers Laravel, React, Node.js, and relational/non-relational databases. I aim to write clean, secure, and production-ready code.
              </p>

              {/* Highlights cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-white/5 bg-surface/20 text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-primary">1+</p>
                  <p className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-surface/20 text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-secondary">10+</p>
                  <p className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Projects Built</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-surface/20 text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-accent">React</p>
                  <p className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Frontend Core</p>
                </div>
                <div className="p-4 rounded-xl border border-white/5 bg-surface/20 text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-emerald-400">Laravel</p>
                  <p className="text-[10px] text-muted font-medium uppercase tracking-wider mt-1">Backend Choice</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="py-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-2">My Skillset</h2>
            <p className="text-muted text-sm max-w-md mx-auto font-light">
              Here are the languages, frameworks, databases, and workflow tools I specialize in.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SKILLS.map((skill, index) => (
              <SkillCard key={skill.category} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 max-w-[90rem] mx-auto">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-2">Featured Projects</h2>
            <p className="text-muted text-sm max-w-md mx-auto font-light">
              A curated selection of applications representing my full-stack and front-end capabilities.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE TIMELINE SECTION ================= */}
      <section id="experience" className="py-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-2">Work History</h2>
            <p className="text-muted text-sm max-w-md mx-auto font-light">
              A look at my professional full-stack developer internship.
            </p>
          </div>

          {/* Vertical Timeline container */}
          <div className="relative max-w-5xl mx-auto pl-8 sm:pl-0">
            {/* Timeline center line */}
            <div className="absolute top-0 bottom-0 left-[21px] sm:left-1/2 w-[2px] bg-gradient-to-b from-secondary via-primary to-transparent -translate-x-1/2 pointer-events-none" />

            {/* Timeline element */}
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className={`relative flex flex-col sm:flex-row sm:items-center sm:justify-between group mb-12 ${idx % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-27px] sm:left-1/2 w-4 h-4 rounded-full bg-[#09090B] border-2 border-primary -translate-x-1/2 top-1.5 sm:top-1/2 sm:-translate-y-1/2 z-10 group-hover:scale-125 group-hover:border-secondary transition-all duration-300 shadow-md shadow-primary/25" />

                {/* Left block (Date) */}
                <div className={`w-full sm:w-[45%] mb-2 sm:mb-0 select-none ${idx % 2 === 0 ? "text-left sm:text-right sm:pr-8" : "text-left sm:text-left sm:pl-8"}`}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-white/5 bg-surface/40 backdrop-blur-sm text-secondary">
                    <Briefcase size={12} />
                    {exp.period}
                  </span>
                  <p className="text-[10px] text-muted/60 mt-1 font-light">{exp.location}</p>
                </div>

                {/* Right block (Content Card) */}
                <div className="w-full sm:w-[45%] rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-sm p-6 text-left relative overflow-hidden group-hover:border-white/10 transition-colors">
                  {/* Category Accent */}
                  <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-primary group-hover:bg-secondary transition-colors" />

                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-primary text-xs font-semibold mt-0.5">
                    {exp.company}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-muted leading-relaxed font-light">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CERTIFICATIONS SECTION ================= */}
      <section id="certifications" className="py-20 border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-2">Certifications</h2>
            <p className="text-muted text-sm max-w-md mx-auto font-light">
              Credentials validating my engineering principles and cloud foundational skills.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className={`p-5 rounded-2xl border border-white/5 bg-surface/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 hover:border-white/10 bg-gradient-to-br ${cert.badgeColor}`}
              >
                <div className="space-y-3">
                  <div className={`w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center ${cert.textColor}`}>
                    <Award size={18} />
                  </div>
                  <h4 className="font-heading font-semibold text-sm leading-snug text-text-primary group-hover:text-primary transition-colors duration-300">
                    {cert.name}
                  </h4>
                </div>
                <span className="text-[10px] text-muted/80 mt-4 block font-medium uppercase tracking-wider">
                  {cert.issuer}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight mb-2">Get in Touch</h2>
            <p className="text-muted text-sm max-w-md mx-auto font-light">
              Send a direct message or connect through my social links.
            </p>
          </div>

          {/* Form and info details */}
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
