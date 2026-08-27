"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2027",
    category: "FUTURE",
    period: "2027",
    badge: "open to offers",
    badgeClass: "border-cream/40 text-cream/70",
    title: "Seeking Internship Opportunities",
    subtitle: "Open to applications",
    org: "",
    description:
      "Actively looking for internship opportunities for 2027. Interested in data-driven roles, product development, or financial technology.",
  },
  {
    year: "2026",
    category: "WORK EXPERIENCE",
    period: "JUL 2026 – DEC 2026",
    badge: "present",
    badgeClass: "border-pink/60 text-pink",
    title: "Internship",
    subtitle: "",
    org: "Hyundai Motor Group Innovation Center Singapore (HMGICS)",
    description:
      "Upcoming 6-month internship placement. Will be stationed as a project management (digital transformation) intern.",
  },
  {
    year: "2025",
    category: "COMMUNITY SERVICE",
    period: "JAN 2025 – DEC 2025",
    badge: "",
    badgeClass: "",
    title: "Project Leader — Floorever Friends 3",
    subtitle: "",
    org: "SMU Community Service Programme",
    description:
      "Co-led a year-long community service programme with LCSS. Led a team of 12, managed a $5,000 budget, and facilitated weekly sessions for 24 beneficiaries.",
  },
  {
    year: "2025",
    category: "CCA LEADERSHIP",
    period: "MAY 2025 – PRESENT",
    badge: "",
    badgeClass: "",
    title: "Vice-Captain, SMU Women's Floorball Team",
    subtitle: "",
    org: "Singapore Management University",
    description:
      "Co-led team operations and player development. Planned a 2-day training camp and organised inter-tertiary friendly matches involving 9 schools and clubs.",
  },
  {
    year: "2024",
    category: "EDUCATION",
    period: "AUG 2024 – PRESENT",
    badge: "",
    badgeClass: "",
    title: "Bachelor of Science (Information Systems)",
    subtitle: "",
    org: "Singapore Management University",
    description:
      "Major in Business Analytics and Financial Technology. Active member of SMU Women's Floorball Team (Vice-Captain from May 2025).",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Drive the progress line from scroll position within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 35%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Dot fill thresholds — evenly spaced across scroll progress
  const dotThresholds = timeline.map((_, i) => i / (timeline.length - 1));

  return (
    <section id="experience" ref={sectionRef} className="relative py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Timeline</p>
          <h2 className="section-heading">
            experience &amp;
            <br />
            journey
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div ref={timelineRef} className="relative">
          {/* Gray base line */}
          <div className="absolute left-[88px] md:left-[112px] top-0 bottom-0 w-px bg-white/10" />

          {/* Animated pink progress line */}
          <div className="absolute left-[88px] md:left-[112px] top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-pink origin-top"
              style={{ scaleY: lineScaleY, height: "100%" }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="flex gap-6 md:gap-8 items-start"
              >
                {/* Year */}
                <div className="w-16 md:w-20 shrink-0 pt-1 text-right">
                  <span className="font-mono text-xs text-muted">{item.year}</span>
                </div>

                {/* Dot — animates to filled pink when progress passes its threshold */}
                <div className="relative shrink-0 flex items-start justify-center w-8 pt-1.5 z-10">
                  {/* Outer ring */}
                  <motion.div
                    className="absolute w-5 h-5 rounded-full border border-pink/30"
                    animate={
                      inView
                        ? { scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }
                        : {}
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                  {/* Inner dot */}
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full border-2 border-pink"
                    style={{
                      backgroundColor: "var(--bg)",
                    }}
                    animate={
                      scrollYProgress.get() >= dotThresholds[i]
                        ? { backgroundColor: "var(--pink)" }
                        : {}
                    }
                  />
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-pink">
                      {item.category}
                      {item.period && (
                        <span className="text-muted"> · {item.period}</span>
                      )}
                    </span>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-mono tracking-[0.08em] border px-3 py-1 rounded-full ${item.badgeClass}`}
                      >
                        {item.badge === "present" && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink mr-1.5 align-middle" />
                        )}
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif italic text-lg text-cream mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="font-mono text-xs text-muted mb-1">
                      {item.subtitle}
                    </p>
                  )}
                  {item.org && (
                    <p className="font-mono text-xs text-muted/60 mb-3">
                      {item.org}
                    </p>
                  )}
                  <p className="font-mono text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
