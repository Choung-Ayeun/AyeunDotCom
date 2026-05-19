"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    category: "DATA ANALYTICS",
    status: "ONGOING",
    badge: "in progress",
    title: "Data-Driven Analytics Project",
    description:
      "Currently developing a comprehensive data-driven project focused on uncovering actionable insights through statistical analysis and visualisation. Applying end-to-end data pipeline skills from collection and cleaning to modelling and storytelling.",
    tags: ["Python", "SQL", "Data Analytics", "Visualisation"],
  },
  {
    category: "CERTIFICATION",
    status: "ONGOING",
    badge: "in progress",
    title: "Google Data Analytics & Business Intelligence Certificate",
    description:
      "Completing Google's professional certificate programme covering the full data analytics workflow. Gaining hands-on experience with real-world datasets, dashboards, and business intelligence tools.",
    tags: ["Google Analytics", "BigQuery", "Tableau", "SQL"],
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-heading">work I&apos;ve built</h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="glass-card rounded-xl p-8 hover:border-white/14 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-pink">
                  {project.category}{" "}
                  <span className="text-muted">· {project.status}</span>
                </span>
                <span className="badge-pink shrink-0">{project.badge}</span>
              </div>

              <h3 className="font-serif italic text-xl text-cream mb-3">
                {project.title}
              </h3>

              <p className="font-mono text-xs leading-relaxed text-muted mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
