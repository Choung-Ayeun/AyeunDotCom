"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link: string) => {
    const id = link.toLowerCase();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
          scrolled ? "bg-bg/90 backdrop-blur-md border-b border-white/5" : ""
        }`}
      >
        <button
          onClick={() => handleNav("Home")}
          className="font-mono text-sm tracking-[0.2em] text-cream hover:text-pink transition-colors"
        >
          CHOUNG A YEUN
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="font-mono text-xs tracking-[0.12em] text-muted hover:text-cream transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="font-mono text-base tracking-[0.2em] text-cream hover:text-pink transition-colors"
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
