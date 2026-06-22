"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { SOCIAL_LINKS } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim())            errors.name    = "Name is required.";
  if (!data.email.trim())           errors.email   = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Enter a valid email.";
  if (!data.subject.trim())         errors.subject = "Subject is required.";
  if (!data.message.trim())         errors.message = "Message is required.";
  else if (data.message.length < 10) errors.message = "At least 10 characters.";
  return errors;
}

export function ContactSection() {
  const [form,    setForm]    = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors,  setErrors]  = useState<FormErrors>({});
  const [status,  setStatus]  = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    // Simulated async — replace with your API route or EmailJS call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const SOCIAL = [
    { href: SOCIAL_LINKS.github,   icon: Github,   label: "GitHub",   sub: "https://github.com/vikal230" },
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: "LinkedIn", sub: "https://www.linkedin.com/in/vikal-saini-546119339/" },
    { href: SOCIAL_LINKS.email,    icon: Mail,     label: "Email",    sub: "vikalsaini06@gmail.com" },
  ];

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Together"
        subtitle="Open to freelance, full-time roles, and interesting collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Social sidebar */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {SOCIAL.map(({ href, icon: Icon, label, sub }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-[var(--border)] hover:border-brand-500/30 group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/20 transition-colors shrink-0">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm text-[var(--text-primary)]">{label}</p>
                <p className="text-xs text-[var(--text-muted)] truncate">{sub}</p>
              </div>
            </motion.a>
          ))}

          <div className="glass-card p-5 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent mt-2">
            <p className="text-sm font-medium text-emerald-500 dark:text-emerald-400 mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available Now
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Open to remote roles, contract work, and exciting full-stack projects.
            </p>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-card p-6 sm:p-8 rounded-2xl border border-[var(--border)] flex flex-col gap-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            type="text"
            placeholder="Let's work together"
            value={form.subject}
            onChange={handleChange}
            error={errors.subject}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              className={`input-field resize-none ${errors.message ? "border-rose-500/50 focus:border-rose-500" : ""}`}
            />
            {errors.message && <p className="text-xs text-rose-500">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" ? { scale: 0.98 } : {}}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white bg-brand-500 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-brand-500/25"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === "loading" ? (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </motion.span>
              ) : status === "success" ? (
                <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <CheckCircle size={16} /> Sent!
                </motion.span>
              ) : status === "error" ? (
                <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <AlertCircle size={16} /> Try again
                </motion.span>
              ) : (
                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <Send size={16} /> Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

function Field({
  label, name, type, placeholder, value, onChange, error,
}: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[var(--text-secondary)]">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-field ${error ? "border-rose-500/50 focus:border-rose-500" : ""}`}
      />
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  );
}
