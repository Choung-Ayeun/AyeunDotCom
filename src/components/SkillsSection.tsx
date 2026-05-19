"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const languages = [
  { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "PHP", icon: `${DEVICON}/php/php-original.svg` },
];

const frameworks = [
  { name: "Vue.js", icon: `${DEVICON}/vuejs/vuejs-original.svg` },
  { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
  { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
  { name: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg` },
];

const data = [
  { name: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "Pandas", icon: `${DEVICON}/pandas/pandas-original.svg` },
  { name: "Tableau", icon: `${DEVICON}/tableau/tableau-original.svg` },
  { name: "NumPy", icon: `${DEVICON}/numpy/numpy-original.svg` },
]

const softSkills = [
  "Leadership",
  "Project Planning",
  "Stakeholder Comms",
  "Critical Thinking",
  "Communication",
  "Adaptability",
  "Team Collaboration",
];

function IconRow({ items }: { items: { name: string; icon: string }[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden mt-4">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex flex-col items-center gap-2 mr-8 shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.icon}
              alt={item.name}
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-mono text-[9px] tracking-[0.1em] text-muted">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillCard({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="skill-card glass-card rounded-xl p-6 overflow-hidden cursor-default"
    >
      <div>
        <p className="font-serif italic text-lg text-cream">{title}</p>
        <p className="font-mono text-[9px] tracking-[0.2em] text-muted mt-0.5">
          HOVER TO EXPLORE
        </p>
      </div>
      {children}
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-28 px-8 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-heading">tools I work with</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <SkillCard title="Languages" delay={0.1}>
            <IconRow items={languages} />
          </SkillCard>

          <SkillCard title="Frameworks &amp; Tools" delay={0.2}>
            <IconRow items={frameworks} />
          </SkillCard>

          <SkillCard title="Data &amp; Analytics" delay={0.3}>
            <IconRow items={data} />
          </SkillCard>

          <SkillCard title="Soft Skills" delay={0.4}>
            <div className="flex flex-wrap gap-2 mt-4">
              {softSkills.map((skill) => (
                <span key={skill} className="tag-pill">
                  {skill}
                </span>
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}
