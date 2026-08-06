import React from "react";
import { Link } from "react-router-dom";
import { Printer, ArrowLeft, Mail, Globe, MapPin, Briefcase, GraduationCap, Award, CheckSquare, Phone } from "lucide-react";
import { Github, Linkedin } from "../components/BrandIcons";
import { motion } from "framer-motion";
import { DEVELOPER_INFO, SKILLS, EXPERIENCE, CERTIFICATIONS, EDUCATION, ACHIEVEMENTS } from "../constants/portfolio";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 select-none">
      {/* Print styles override injection */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4;
            margin: 12mm 12mm 12mm 12mm;
          }
          body {
            background-color: white !important;
            color: #1e293b !important;
            font-family: system-ui, -apple-system, sans-serif !important;
          }
          header, footer, .no-print {
            display: none !important;
          }
          .print-card {
            background-color: transparent !important;
            border: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            color: #1e293b !important;
            padding: 0 !important;
          }
          .print-text {
            color: #0f172a !important;
          }
          .print-muted {
            color: #475569 !important;
          }
          .print-border {
            border-color: #cbd5e1 !important;
          }
          .print-pill {
            background-color: #f8fafc !important;
            border-color: #cbd5e1 !important;
            color: #0f172a !important;
          }
          /* Force columns in print */
          .print-row {
            display: grid !important;
            grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
            gap: 2rem !important;
          }
          .print-left-col {
            grid-column: span 8 / span 8 !important;
          }
          .print-right-col {
            grid-column: span 4 / span 4 !important;
          }
          .print-contacts-grid {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0.5rem !important;
          }
          /* Custom brand icons print colors */
          .text-primary {
            color: #0284c7 !important; /* Royal Blue */
          }
          .text-secondary {
            color: #4f46e5 !important; /* Violet */
          }
          .text-accent {
            color: #0d9488 !important; /* Teal */
          }
          .text-emerald-400 {
            color: #059669 !important; /* Emerald */
          }
          .text-muted {
            color: #475569 !important;
          }
          .text-text-primary {
            color: #0f172a !important;
          }
          .mt-1 {
            margin-top: 0.25rem !important;
          }
        }
      `}} />

      <div className="max-w-4xl mx-auto">
        
        {/* Navigation Actions (Hidden during print) */}
        <div className="flex items-center justify-between mb-8 no-print">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-full border border-white/5 bg-surface/50 text-muted hover:text-text-primary hover:border-white/10 transition-all cursor-pointer"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-bold py-2.5 px-5 rounded-full bg-primary hover:bg-cyan-400 text-background transition-all shadow-md shadow-primary/10 cursor-pointer"
          >
            <Printer size={14} />
            Print Resume / Save PDF
          </button>
        </div>

        {/* Resume Main Document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/5 bg-surface/20 backdrop-blur-md p-8 sm:p-12 shadow-2xl print-card print-border"
        >
          {/* Header */}
          <div className="border-b border-white/5 pb-8 print-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-primary print-text mb-2">
                  {DEVELOPER_INFO.name}
                </h1>
                <p className="text-primary text-base font-semibold uppercase tracking-wider">
                  {DEVELOPER_INFO.title}
                </p>
              </div>

              {/* Quick Contacts details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted print-muted print-contacts-grid">
                <a href={`mailto:${DEVELOPER_INFO.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={12} className="text-secondary print-muted" />
                  {DEVELOPER_INFO.email}
                </a>
                {DEVELOPER_INFO.phone && (
                  <a href={`tel:${DEVELOPER_INFO.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone size={12} className="text-accent print-muted" />
                    {DEVELOPER_INFO.phone}
                  </a>
                )}
                <a href={DEVELOPER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Linkedin size={12} className="text-primary print-muted" />
                  {DEVELOPER_INFO.linkedin.replace("https://", "")}
                </a>
                <a href={DEVELOPER_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Github size={12} className="text-muted print-muted" />
                  {DEVELOPER_INFO.github.replace("https://", "")}
                </a>
                {DEVELOPER_INFO.website && (
                  <a href={DEVELOPER_INFO.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Globe size={12} className="text-emerald-400 print-muted" />
                    {DEVELOPER_INFO.website.replace("https://", "")}
                  </a>
                )}
                <span className="flex items-center gap-2">
                  <MapPin size={12} className="text-accent print-muted" />
                  {DEVELOPER_INFO.location}
                </span>
              </div>
            </div>

            {/* Profile Statement */}
            <p className="text-muted print-muted text-sm leading-relaxed mt-6 font-light">
              Highly motivated and detail-oriented Computer Science Engineering student (B.Tech, CSE 2026) and Full Stack Developer. Passionate about building modern, fast, responsive web systems utilizing the React framework, Node.js runtime, Laravel, and database architectures. Committed to continuous learning, optimizing code quality, and delivering scalable software solutions.
            </p>
          </div>

          {/* Grid Layout for sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 print-row">
            
            {/* Left Column: Experience and Education (8 spans) */}
            <div className="md:col-span-8 space-y-8 print-left-col">
              
              {/* Experience */}
              <div className="space-y-4">
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-text-primary print-text uppercase tracking-wide">
                  <Briefcase size={16} className="text-primary print-muted" />
                  Professional Experience
                </h2>
                
                {EXPERIENCE.map((exp) => (
                  <div key={exp.company} className="relative pl-4 border-l border-white/5 print-border">
                    <div className="flex justify-between items-start gap-4 flex-wrap mb-1">
                      <h3 className="font-heading font-bold text-sm text-text-primary print-text">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-secondary font-medium print-text">{exp.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-primary/80 mb-3">{exp.company}</p>
                    
                    <ul className="space-y-1.5 text-xs text-muted print-muted leading-relaxed font-light">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              {EDUCATION && (
                <div className="space-y-4">
                  <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-text-primary print-text uppercase tracking-wide">
                    <GraduationCap size={16} className="text-secondary print-muted" />
                    Education
                  </h2>

                  <div className="relative pl-4 border-l border-white/5 print-border">
                    <div className="flex justify-between items-start gap-4 flex-wrap mb-1">
                      <h3 className="font-heading font-bold text-sm text-text-primary print-text">
                        {EDUCATION.degree}
                      </h3>
                      <span className="text-xs text-secondary font-medium print-text">{EDUCATION.period}</span>
                    </div>
                    <p className="text-xs text-muted print-muted mb-1">{EDUCATION.institution}, {EDUCATION.location}</p>
                    <p className="text-xs text-primary/80 font-medium">CGPA: {EDUCATION.cgpa}</p>
                    {EDUCATION.coursework && (
                      <p className="text-xs text-muted print-muted mt-2 font-light">
                        <strong className="font-medium text-text-primary/80">Key Coursework:</strong> {EDUCATION.coursework.join(", ")}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {ACHIEVEMENTS && ACHIEVEMENTS.length > 0 && (
                <div className="space-y-4">
                  <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-text-primary print-text uppercase tracking-wide">
                    <Award size={16} className="text-accent print-muted" />
                    Achievements
                  </h2>

                  <div className="relative pl-4 border-l border-white/5 print-border">
                    <ul className="space-y-2 text-xs text-muted print-muted leading-relaxed font-light">
                      {ACHIEVEMENTS.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Skills and Certifications (4 spans) */}
            <div className="md:col-span-4 space-y-8 print-right-col">
              
              {/* Skills */}
              <div className="space-y-4">
                <h2 className="flex items-center gap-2 font-heading text-base font-bold text-text-primary print-text uppercase tracking-wide">
                  <CheckSquare size={16} className="text-accent print-muted" />
                  Technical Skills
                </h2>

                <div className="space-y-4">
                  {SKILLS.map((skill) => (
                    <div key={skill.category} className="space-y-1.5">
                      <h3 className="text-xs font-bold text-text-primary/80 print-text uppercase tracking-wider">
                        {skill.category}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="text-[10px] px-2 py-0.5 rounded border border-white/5 bg-white/3 text-muted print-pill"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h2 className="flex items-center gap-2 font-heading text-base font-bold text-text-primary print-text uppercase tracking-wide">
                  <Award size={16} className="text-emerald-400 print-muted" />
                  Certifications
                </h2>

                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.id} className="text-xs">
                      <h4 className="font-semibold text-text-primary/95 print-text">
                        {cert.name}
                      </h4>
                      <p className="text-[10px] text-muted/80 print-muted mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
