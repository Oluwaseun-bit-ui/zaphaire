/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Filter, Eye, ChevronLeft, ChevronRight, X, Calendar, MapPin, Sparkles } from "lucide-react";

type PortfolioCategory = "All" | "Weddings" | "Corporate" | "Celebrations" | "Decoration" | "Conferences" | "Social";

interface PortfolioProps {
  onSelectServiceType: (serviceTitle: string) => void;
}

export default function Portfolio({ onSelectServiceType }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: PortfolioCategory[] = [
    "All",
    "Weddings",
    "Corporate",
    "Celebrations",
    "Decoration",
    "Conferences",
    "Social",
  ];

  // Filter items based on active category
  const filteredItems = activeFilter === "All"
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeFilter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleConsultFromLightbox = (title: string) => {
    setLightboxIndex(null);
    onSelectServiceType(title);
    
    // Smooth scroll down to contact section
    const target = document.getElementById("contact");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-neutral-50 relative overflow-hidden border-b border-gray-100">
      
      {/* Structural visual ambient layer */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-beige rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
            VISUAL SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-tight">
            Our Portfolio of Executed Luxury
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-600 text-base font-light leading-relaxed">
            Every snapshot represents a meticulous coordinate orchestration of florist blueprints, strict security protocols, and pristine lighting states across Nigeria.
          </p>
        </div>

        {/* Filter Navigation Menu List */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs text-neutral-400 uppercase font-sans tracking-wider mr-2 hidden md:flex">
            <Filter className="w-3.5 h-3.5" /> Filter Category:
          </div>
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                type="button"
                onClick={() => {
                  setActiveFilter(cat);
                  setLightboxIndex(null); // Reset lightbox to prevent drift index
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-none text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none cursor-pointer ${
                  isActive
                    ? "bg-brand-purple text-white shadow-md border border-brand-purple"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-brand-purple hover:border-brand-purple border border-neutral-200/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  id={`portfolio-item-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative bg-white rounded-none overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-gold/45 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                >
                  
                  {/* Portfolio Image Aspect-Ratio Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark Hover overlay layer */}
                    <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-none bg-white text-brand-purple flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Left corner tag for Category */}
                    <span className="absolute top-4 left-4 text-[9px] text-brand-purple font-sans font-bold tracking-widest uppercase bg-brand-gold px-3 py-1.5 rounded-none shadow-md z-10">
                      {item.category}
                    </span>
                  </div>

                  {/* Portfolio Information bottom box */}
                  <div className="p-6">
                    <div className="flex justify-between items-center text-[10px] font-sans text-neutral-400 font-bold uppercase tracking-widest mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-gold" /> {item.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-brand-purple" /> {item.year}
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-brand-purple tracking-tight mb-2 group-hover:text-brand-gold transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-none border border-dashed border-neutral-200">
            <p className="text-xs uppercase tracking-widest font-bold text-neutral-400">No project highlights found in this category.</p>
          </div>
        )}

      </div>

      {/* Interactive Lightbox Layer Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div id="lightbox-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark background canopy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-neutral-950/95"
            />

            {/* Content canvas holder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full flex flex-col lg:flex-row bg-neutral-900 border border-neutral-800 rounded-none shadow-2xl overflow-hidden z-10"
            >
              
              {/* Left Side: Large image with navigation overlay buttons */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] object-contain w-full h-auto select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Left navigation arrow widget */}
                <button
                  id="lightbox-prev"
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-none bg-neutral-950/90 border border-neutral-800 hover:bg-brand-purple text-brand-gold flex items-center justify-center focus:outline-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation arrow widget */}
                <button
                  id="lightbox-next"
                  type="button"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-none bg-neutral-950/90 border border-neutral-800 hover:bg-brand-purple text-brand-gold flex items-center justify-center focus:outline-none transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image counter top left tag */}
                <span className="absolute top-4 left-4 text-[9px] font-sans font-bold tracking-widest text-neutral-400 bg-neutral-950 py-1.5 px-3 rounded-none border border-neutral-850">
                  IMAGE {lightboxIndex + 1} OF {filteredItems.length}
                </span>
              </div>

              {/* Right Side: Informative text column panel */}
              <div className="w-full lg:w-96 p-8 flex flex-col justify-between text-white border-t lg:border-t-0 lg:border-l border-neutral-800 bg-brand-dark">
                <div>
                  
                  {/* Top Close icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] font-sans tracking-widest text-brand-purple font-bold uppercase bg-brand-gold px-3 py-1 rounded-none">
                      {filteredItems[lightboxIndex].category}
                    </span>
                    <button
                      id="close-lightbox"
                      type="button"
                      onClick={() => setLightboxIndex(null)}
                      className="p-1.5 rounded-none bg-neutral-800 hover:bg-brand-purple text-neutral-400 hover:text-white transition-colors focus:outline-none"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight mb-2 leading-tight">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-6">
                    {filteredItems[lightboxIndex].description}
                  </p>

                  <div className="space-y-3.5 pt-6 border-t border-neutral-800/80 text-xs">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-brand-gold" />
                      <span>Executive Venue: <b className="font-semibold text-white">{filteredItems[lightboxIndex].location}</b></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-brand-gold" />
                      <span>Year Scheduled: <b className="font-semibold text-white">{filteredItems[lightboxIndex].year}</b></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-brand-gold" />
                      <span>Execution Protocol: <b className="font-semibold text-white">Full-Service Orchestration</b></span>
                    </div>
                  </div>

                </div>

                {/* Consult triggers inside Portfolio lightbox panel */}
                <div className="mt-8 pt-6 border-t border-neutral-800/80">
                  <button
                    id="lightbox-cta-book"
                    onClick={() => handleConsultFromLightbox(filteredItems[lightboxIndex].category === "Weddings" ? "Wedding Planning" : filteredItems[lightboxIndex].category === "Corporate" ? "Corporate Events" : filteredItems[lightboxIndex].category === "Conferences" ? "Conferences & Seminars" : "Social Gatherings")}
                    className="w-full py-4 bg-brand-gold text-neutral-950 font-sans font-bold text-[10px] uppercase tracking-widest rounded-none hover:bg-brand-purple hover:text-white transition-all cursor-pointer text-center"
                  >
                    Discuss Similar Event Plan
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
