import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { motion, AnimatePresence } from "framer-motion";
import { DEVELOPER_INFO } from "../constants/portfolio";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setSubmittedName(formData.name);

    emailjs
      .sendForm(
        "service_2qhoeoj",
        "template_n8ya0jr",
        e.target,
        "QPadN7oZoAMfEbnBt"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          // Reset status back to idle after a while
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          // Reset status back to idle after a while
          setTimeout(() => setStatus("idle"), 6000);
        }
      );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-stretch select-none">
      {/* Contact Details Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-md p-8 relative overflow-hidden"
      >
        {/* Decorative corner glow */}
        <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-secondary/10 blur-xl pointer-events-none" />

        <div className="space-y-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
              Let's Connect
            </h3>
            <p className="text-muted text-sm font-light leading-relaxed">
              Have a project in mind, looking for a developer, or just want to chat? Drop me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {/* Email link */}
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-muted font-medium">Email Me</p>
                <p className="text-sm font-semibold text-text-primary/90 group-hover:text-primary transition-colors">
                  {DEVELOPER_INFO.email}
                </p>
              </div>
            </a>

            {/* LinkedIn link */}
            <a
              href={DEVELOPER_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted font-medium">LinkedIn</p>
                <p className="text-sm font-semibold text-text-primary/90 group-hover:text-secondary transition-colors">
                  {DEVELOPER_INFO.linkedin.replace("https://linkedin.com/in/", "").replace("https://www.linkedin.com/in/", "").replace("/", "")}
                </p>
              </div>
            </a>

            {/* GitHub link */}
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:scale-105 transition-transform">
                <Github size={18} />
              </div>
              <div>
                <p className="text-xs text-muted font-medium">GitHub Profile</p>
                <p className="text-sm font-semibold text-text-primary/90 group-hover:text-text-primary transition-colors">
                  {DEVELOPER_INFO.github.replace("https://", "")}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-3 rounded-xl border border-transparent cursor-default">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-muted font-medium">Location</p>
                <p className="text-sm font-semibold text-text-primary/90">
                  {DEVELOPER_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-xs text-muted/60 font-light select-none">
          ⚡ Open for freelance work and full-time opportunities.
        </div>
      </motion.div>

      {/* Form Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-md p-8 relative flex flex-col justify-center"
      >
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form
              key="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-muted tracking-wider uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/5 hover:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/40 outline-none transition-all duration-300"
                    placeholder="John Doe"
                    disabled={status === "sending"}
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-muted tracking-wider uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/5 hover:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/40 outline-none transition-all duration-300"
                    placeholder="john@example.com"
                    disabled={status === "sending"}
                  />
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-muted tracking-wider uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/5 hover:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/40 outline-none transition-all duration-300"
                  placeholder="Collaborating on a project..."
                  disabled={status === "sending"}
                />
              </div>

              {/* Message field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-muted tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/5 hover:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-muted/40 outline-none transition-all duration-300 resize-none"
                  placeholder="Hey Pratham, I'd love to chat about..."
                  disabled={status === "sending"}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-background font-bold hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 active:scale-[0.98] disabled:opacity-50 select-none cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-rose-500 text-xs text-center mt-2 font-medium">
                  Failed to send message. Please try again or email me directly at {DEVELOPER_INFO.email}.
                </p>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <CheckCircle2 size={36} className="animate-bounce" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                Message Sent Successfully!
              </h3>
              <p className="text-muted text-sm max-w-sm font-light leading-relaxed">
                Thank you for reaching out, {submittedName || "there"}. I have received your message and will get back to you as soon as possible!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-xs font-semibold px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 text-muted hover:text-text-primary transition-all duration-300"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
