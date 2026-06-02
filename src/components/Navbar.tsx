/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Calendar, Award } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Background styling toggle
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section active status
      const sections = ["hero", "about", "services", "why-choose", "process", "portfolio", "testimonials", "faq", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero", targetId: "hero" },
    { label: "About", href: "#about", targetId: "about" },
    { label: "Services", href: "#services", targetId: "services" },
    { label: "Why Zapphaire", href: "#why-choose", targetId: "why-choose" },
    { label: "Our Process", href: "#process", targetId: "process" },
    { label: "Portfolio", href: "#portfolio", targetId: "portfolio" },
    { label: "Reviews", href: "#testimonials", targetId: "testimonials" },
    { label: "FAQ", href: "#faq", targetId: "faq" },
    { label: "Contact", href: "#contact", targetId: "contact" },
  ];

  const handleScrollToSegment = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="main-nav-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleScrollToSegment(e, "hero")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-brand-purple flex items-center justify-center rotate-45 transition-transform duration-500 group-hover:rotate-135 shadow-md">
              <span className="text-brand-gold font-serif text-2xl -rotate-45 block">Z</span>
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-lg font-serif font-bold tracking-widest text-brand-purple uppercase leading-none">
                ZAPPHAIRE
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-bold mt-1">
                Events & Management
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.targetId}`}
                  href={item.href}
                  onClick={(e) => handleScrollToSegment(e, item.targetId)}
                  className={`relative py-2 text-[11px] font-sans font-bold uppercase tracking-widest transition-all duration-200 ${
                    isActive
                      ? "text-brand-purple"
                      : scrolled
                      ? "text-neutral-500 hover:text-brand-purple"
                      : "text-neutral-800 hover:text-brand-purple"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:flex items-center">
            <a
              id="nav-cta-consult"
              href="#contact"
              onClick={(e) => handleScrollToSegment(e, "contact")}
              className="flex items-center gap-2 px-5 py-3 bg-brand-purple text-white text-[11px] uppercase tracking-widest font-bold transition-all duration-300 shadow hover:bg-brand-gold hover:text-brand-dark"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors focus:outline-none`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-xl overflow-hidden py-4 z-40 lg:hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.targetId;
                return (
                  <a
                    key={item.href}
                    id={`mobile-link-${item.targetId}`}
                    href={item.href}
                    onClick={(e) => handleScrollToSegment(e, item.targetId)}
                    className={`block px-4 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-brand-beige text-brand-purple border-l-4 border-brand-gold"
                        : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-purple"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-neutral-100 px-4">
                <a
                  id="mobile-nav-cta-consult"
                  href="#contact"
                  onClick={(e) => handleScrollToSegment(e, "contact")}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-purple text-white text-[11px] font-bold uppercase tracking-widest transition-all hover:bg-brand-gold hover:text-brand-dark"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
