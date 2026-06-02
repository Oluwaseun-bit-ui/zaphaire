/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Gift,
  Briefcase,
  Presentation,
  Sparkles,
  Flower,
  Users,
  Infinity as InfinityIcon,
  Clock,
  ShieldCheck,
  Paintbrush,
  Truck,
  ArrowRight,
  X,
  CheckCircle,
} from "lucide-react";

// Helper to determine icon component dynamically
const iconMapper: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Gift,
  Briefcase,
  Presentation,
  Sparkles,
  Flower,
  Users,
  Infinity: InfinityIcon,
  Clock,
  ShieldCheck,
  Paintbrush,
  Truck,
};

interface ServicesProps {
  onSelectServiceType: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceType }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookService = (title: string) => {
    setSelectedService(null);
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
    <section id="services" className="py-24 bg-neutral-50 relative overflow-hidden border-b border-gray-100">
      
      {/* Decorative Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-32 bg-gradient-to-b from-brand-purple/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-tight mb-4">
            Bespoke Orchestration for Every Celebration
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mb-6" />
          <p className="text-neutral-600 text-base font-light leading-relaxed">
            From design curation and raw floor plan transitions to precise logistics schedules and vendor alignment. We execute each event with pristine, artistic excellence.
          </p>
        </div>

        {/* Services Grid (All 12 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((srv, index) => {
            const IconComponent = iconMapper[srv.iconName] || Sparkles;
            return (
              <motion.div
                key={srv.id}
                id={`service-card-${srv.id}`}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group relative bg-white rounded-none p-6 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Micro Hover Gradient Block */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <div>
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-none bg-brand-beige flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-brand-gold transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-serif font-bold text-brand-purple tracking-tight group-hover:text-brand-gold transition-colors duration-200 mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6">
                    {srv.description}
                  </p>
                </div>

                {/* View Details CTA */}
                <button
                  id={`btn-learn-${srv.id}`}
                  onClick={() => setSelectedService(srv)}
                  className="flex items-center gap-1.5 text-[10px] text-neutral-800 font-sans font-bold uppercase tracking-widest hover:text-brand-purple transition-colors mt-auto w-fit group/btn focus:outline-none cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Service Detail Dialogue overlay */}
      <AnimatePresence>
        {selectedService && (
          <div id="service-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
            />

            {/* Inner Dialog Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-lg w-full bg-white rounded-none overflow-hidden shadow-2xl z-10 border border-neutral-100"
            >
              {/* Decorative top strip */}
              <div className="h-[3px] bg-brand-gold" />

              <div className="p-8">
                {/* Header with Title and close icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-beige rounded-none flex items-center justify-center text-brand-purple">
                      {(() => {
                        const Icon = iconMapper[selectedService.iconName] || Sparkles;
                        return <Icon className="w-5 h-5" />;
                      })()}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-purple tracking-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                  
                  <button
                    id="close-service-modal"
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-none hover:bg-neutral-100 text-neutral-400 hover:text-neutral-950 transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body details */}
                <div className="space-y-4">
                  <p className="text-brand-purple text-[10px] tracking-widest font-sans uppercase font-bold">
                    Signature Event Plan Description
                  </p>
                  <p className="text-neutral-600 outline-none leading-relaxed text-xs font-sans">
                    {selectedService.fullDetails}
                  </p>

                  {/* Vetted elements checklist */}
                  <div className="py-4 border-t border-b border-neutral-100 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>Dedicated, experienced coordinator lead</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>Negotiated rates & coordination with 4.6-star Lagos networks</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>Full layout diagrams, design boards & run lists</span>
                    </div>
                  </div>
                </div>

                {/* Booking Options on Modal footer */}
                <div className="mt-8 flex gap-3">
                  <button
                    id="modal-btn-dismiss"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 py-3 border border-neutral-200 text-neutral-600 rounded-none font-bold text-xs uppercase tracking-widest hover:bg-neutral-50 transition-all font-sans cursor-pointer text-center"
                  >
                    Close
                  </button>
                  <button
                    id="modal-btn-book"
                    onClick={() => handleBookService(selectedService.title)}
                    className="flex-1 py-3 bg-brand-purple text-white rounded-none font-bold text-xs uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all font-sans cursor-pointer text-center shadow"
                  >
                    Select & Book Now
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
