/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#fafafc] relative overflow-hidden text-neutral-900 border-b border-gray-100">
      
      {/* Decorative side accent lines */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-beige/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-tight">
            Frequently Asked Queries
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-600 text-base font-light leading-relaxed max-w-2xl mx-auto">
            Find immediate answers on budget negotiations, planning timelines, wedding styling customizer options, and corporate coverage.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-white rounded-none border border-neutral-200 shadow-sm overflow-hidden hover:border-brand-gold/30 transition-shadow duration-300"
              >
                {/* Trigger Button bar */}
                <button
                  id={`btn-faq-trigger-${faq.id}`}
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-gold shrink-0 group-hover:scale-105 transition-transform" />
                    <span className="text-sm sm:text-base font-serif font-bold text-brand-purple group-hover:text-brand-gold transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  
                  {/* Indicator icon toggle (Geometric Balance) */}
                  <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-brand-purple text-white rotate-180" : "bg-brand-beige text-brand-purple border border-brand-gold/15"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanding Content wrapper layer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs text-neutral-600 border-t border-neutral-100 bg-[#fafafc]/50 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* FAQ Closing Badge */}
        <div className="mt-12 text-center p-6 bg-white rounded-none border border-neutral-250 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-neutral-500 font-sans">
            Don't see your specific question? Reach out to our planning coordinators.
          </p>
          <a
            id="faq-cta-contact"
            href="#contact"
            className="text-xs font-sans font-bold tracking-widest text-brand-purple uppercase flex items-center gap-1.5 hover:text-brand-gold transition-colors cursor-pointer"
          >
            Ask a Custom Question →
          </a>
        </div>

      </div>
    </section>
  );
}
