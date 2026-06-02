/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { luxuryHeroImg } from "../data";

export default function Hero() {
  const handleScrollToSegment = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Absolute Background Image Layout */}
      <div className="absolute inset-0 z-0">
        <img
          src={luxuryHeroImg}
          alt="Luxury event hall setup beautifully coordinated by Zapphaire Events"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Radial and Linear Gradient Overlays to preserve absolute premium style & readability */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/40 via-[#270433]/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Geometric Balance Header Accent */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-[1px] w-8 sm:w-12 bg-brand-gold block"></span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
            Est. 2010 • Lagos' Leading Luxury Organizers
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-brand-gold block"></span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-normal mb-8 leading-[1.15]"
        >
          Creating <span className="italic font-light text-brand-gold">Unforgettable</span> Events, Beautifully Executed
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          id="hero-subheadline"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg text-neutral-200 font-sans max-w-3xl mb-12 leading-relaxed font-light"
        >
          From intimate celebrations to large-scale corporate galas in Lagos, Zapphaire Events delivers exceptional planning, creative coordination, and spectacular decorative design tailored to your vision.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <button
            id="hero-cta-consult"
            onClick={() => handleScrollToSegment("contact")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-brand-purple text-white font-sans font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-dark hover:shadow-lg hover:shadow-brand-gold/15 active:scale-95 transition-all cursor-pointer"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            id="hero-cta-portfolio"
            onClick={() => handleScrollToSegment("portfolio")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-white/40 bg-white/5 text-white font-sans font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-brand-dark active:scale-95 transition-all backdrop-blur-sm cursor-pointer"
          >
            View Portfolio
          </button>
        </motion.div>

        {/* Trusted Stats Bar matching Theme Specification */}
        <motion.div
          id="hero-rating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 justify-center border-t border-white/20 pt-8 w-full max-w-3xl"
        >
          <div className="text-center px-4">
            <div className="text-3xl font-serif text-brand-gold mb-1">4.6 ★</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Client Rating</div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden sm:block self-center"></div>
          <div className="text-center px-4">
            <div className="text-3xl font-serif text-brand-gold mb-1">15+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Years Experience</div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden sm:block self-center"></div>
          <div className="text-center px-4">
            <div className="text-3xl font-serif text-brand-gold mb-1">500+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">Events Held</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
        <button
          id="hero-scroll-btn"
          aria-label="Scroll to About Section"
          onClick={() => handleScrollToSegment("about")}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#d97706]/80 select-none">SCROLL DISCOVER</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-1 text-amber-500"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
