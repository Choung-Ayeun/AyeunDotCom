"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";

export default function HeroSection() {
  // Outer wrapper drives the scroll — 280vh means user scrolls through all of it
  // before the About section appears. The inner section is sticky (stays in viewport).
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Responsive pixel-based X transforms (recalculate against current viewport width)
  const nameX = useMotionValue(0);    // characters — medium speed (~50%)
  const imagesX = useMotionValue(0);  // name text  — fast speed  (~85%)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const vp = window.innerWidth;
    // name.png  travels ~1.0× viewport width across full hero scroll
    nameX.set(-latest * vp * 1.0);
    // images.png travels ~2.8× viewport width — sweeps dramatically in front of characters
    imagesX.set(-latest * vp * 2.8);
  });

  // Also initialise correctly on mount (scrollYProgress may already be non-zero on HMR)
  useEffect(() => {
    const vp = window.innerWidth;
    const p = scrollYProgress.get();
    nameX.set(-p * vp * 1.0);
    imagesX.set(-p * vp * 2.8);
  }, [scrollYProgress, nameX, imagesX]);


  return (
    <div
      id="home"
      ref={wrapperRef}
      style={{ height: "280vh", scrollSnapAlign: "start", scrollSnapStop: "always" }}
    >
      <section className="sticky top-0 h-screen overflow-hidden">

        {/* ── Layer 1 (bottom): name.png — character poses, behind images ─── */}
        <motion.div
          style={{ x: nameX }}
          className="absolute top-0 left-0 h-full z-10 pointer-events-none"
        >
          <img
            src="/name.png"
            alt=""
            className="h-full w-auto max-w-none object-left"
            draggable={false}
          />
        </motion.div>

        {/* ── Layer 2 (top): images.png — name text, FAST sweep, on top ─── */}
        {/* Moves 1.7× viewport width → sweeps in front of the character layer */}
        <motion.div
          style={{ x: imagesX }}
          className="absolute top-0 left-0 h-full z-20 pointer-events-none"
        >
          <img
            src="/images.png"
            alt=""
            className="h-full w-auto max-w-none object-left"
            draggable={false}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-muted to-transparent"
          />
        </motion.div>

        {/* Soft edge vignettes — help images blend in/out at edges */}
        <div className="absolute inset-0 z-25 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(27,26,26,0.6) 0%, transparent 8%, transparent 92%, rgba(27,26,26,0.6) 100%)",
          }}
        />
      </section>
    </div>
  );
}
