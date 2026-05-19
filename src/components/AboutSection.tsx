"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cards = [
  { title: "Year 2", subtitle: "SMU · INFORMATION SYSTEMS" },
  { title: "BA + FinTech", subtitle: "DUAL SPECIALISATION" },
  { title: "Vice-Captain", subtitle: "SMU WOMEN'S FLOORBALL" },
];

function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-mono text-pink font-medium">{children}</strong>;
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-8 md:px-24"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-heading">who I am</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="font-mono text-sm leading-relaxed text-text-primary">
              I&apos;m a Year 2 <B>Information Systems</B> student at Singapore
              Management University, specialising in <B>Business Analytics</B>{" "}
              and <B>FinTech</B>, with a growing interest in how{" "}
              <B>technology and data</B> can shape smarter business and financial
              solutions.
            </p>
            <p className="font-mono text-sm leading-relaxed text-text-primary">
              Outside of academics, I play floorball as my side quest, serving
              as <B>Vice-Captain</B> of my school&apos;s varsity team while also
              competing for a <B>Division 1 club.</B> Beyond sports, I enjoy
              doodling and creating handcrafted projects, which reflect my
              creative side and attention to detail.
            </p>
            <p className="font-mono text-sm leading-relaxed text-text-primary">
              Through leading volunteering initiatives and coordinating community
              projects, I&apos;ve developed valuable experience in{" "}
              <B>leadership, teamwork,</B> and <B>project management,</B> while
              learning how to work with people from diverse backgrounds and
              create meaningful impact.
            </p>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6 mt-2">
              <table className="w-full text-xs font-mono">
                <tbody className="space-y-3">
                  <tr>
                    <td className="text-muted tracking-[0.15em] uppercase pr-8 py-1.5 w-28">
                      University
                    </td>
                    <td className="text-text-primary">
                      Singapore Management University
                    </td>
                  </tr>
                  <tr>
                    <td className="text-muted tracking-[0.15em] uppercase pr-8 py-1.5">
                      Degree
                    </td>
                    <td className="text-text-primary">B.Sc. Information Systems</td>
                  </tr>
                  <tr>
                    <td className="text-muted tracking-[0.15em] uppercase pr-8 py-1.5">
                      Year
                    </td>
                    <td className="text-text-primary">Year 2 · 2024–2028</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-2 px-6 py-3 border border-white/20 text-cream font-mono text-xs tracking-[0.12em] hover:border-pink hover:text-pink transition-all duration-200 rounded-lg"
            >
              Contact Me →
            </button>
          </motion.div>

          {/* Right: cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="glass-card rounded-xl p-6 hover:border-white/15 transition-all duration-200"
              >
                <p className="font-serif italic text-2xl text-cream mb-1">
                  {card.title}
                </p>
                <p className="font-mono text-[10px] tracking-[0.18em] text-pink uppercase">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
