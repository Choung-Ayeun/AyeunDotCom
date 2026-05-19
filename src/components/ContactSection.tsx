"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formOpen, setFormOpen] = useState(false);

  const Form = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent! (Demo — hook up your preferred form service.)");
      }}
      className="glass-card rounded-xl p-8 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="form-input"
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="form-input"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          Subject
        </label>
        <input
          type="text"
          placeholder="What's this about?"
          className="form-input"
        />
      </div>
      <div className="space-y-2">
        <label className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          Message
        </label>
        <textarea
          rows={5}
          placeholder="Your message..."
          required
          className="form-input resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-cream text-bg font-mono text-xs tracking-[0.18em] hover:bg-cream/90 transition-colors rounded-xl"
      >
        Send Message →
      </button>
    </form>
  );

  return (
    <section id="contact" ref={ref} className="relative py-28 px-8 md:px-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">get in touch</h2>
          <p className="font-mono text-sm text-muted mb-10 -mt-6">
            Have a question or want to connect? Fill in the form and I&apos;ll
            get back to you.
          </p>
        </motion.div>

        {/* Desktop: always show form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:block"
        >
          {Form}
        </motion.div>

        {/* Mobile: toggle button */}
        <div className="md:hidden">
          {!formOpen ? (
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              onClick={() => setFormOpen(true)}
              className="w-full py-4 bg-cream text-bg font-mono text-xs tracking-[0.18em] hover:bg-cream/90 transition-colors rounded-xl"
            >
              Get in Touch →
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {Form}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
