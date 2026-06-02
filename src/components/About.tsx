/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Bookmark, ShieldCheck, Heart, User, Sparkles } from "lucide-react";
import { ownerPortraitImg } from "../data";

export default function About() {
  const coreValues = [
    {
      title: "Passion for Experiences",
      description: "We don't just plan events; we orchestrate magical moments that linger in the minds of guests for years.",
      icon: Heart,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Obsessive Attention to Detail",
      description: "From the fabric thread count to the micro-timing of dinner service, we control every single coordinate.",
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Elite Coordination Team",
      description: "Our certified planners navigate high-pressure schedules seamlessly, solving issues instantly on the floor.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Women-Owned & Championed",
      description: "Fiercely independent, detail-oriented Leadership driving excellence, empathy, and grace in high-end spaces.",
      icon: User,
      color: "text-pink-600 bg-pink-50",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-beige/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-beige/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Headline Intro */}
        <div className="text-center md:text-left mb-16 md:grid md:grid-cols-12 md:gap-8 items-end">
          <div className="md:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
              ESTABLISHED IN LAGOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-normal leading-tight">
              Creating <span className="italic font-light">Unforgettable</span> Journeys, Beautifully Executed.
            </h2>
          </div>
          <div className="md:col-span-6 mt-4 md:mt-0 text-neutral-600 text-base font-light leading-relaxed">
            Zapphaire Events is Lagos' ultimate, award-winning event management mastermind. Driven by a rigorous ethos of geometric precision and aesthetic balance, we transform empty spaces into majestic, high-society arenas. We bring pristine coordinate control, gorgeous material layouts, and flawless event flow to high-profile weddings and executive corporate galas.
          </div>
        </div>

        {/* Story Grid with Founder Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left side column: Premium Images Overlay */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Outer Decorative frame - crisp rectangle offset */}
              <div className="absolute -inset-3 border-2 border-brand-gold pointer-events-none transform translate-x-2 translate-y-2" />
              
              <div className="relative rounded-none overflow-hidden bg-neutral-900 shadow-2xl">
                <img
                  src={ownerPortraitImg}
                  alt="Founder of Zapphaire Events"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white p-4 shadow-lg border-l-4 border-brand-purple rounded-none">
                  <p className="text-[10px] font-sans font-bold text-brand-purple uppercase tracking-widest mb-0.5">
                    Women-Owned & Driven
                  </p>
                  <p className="text-base font-serif font-bold text-neutral-900">
                    Lead Director & Founder
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Trusted across Nigeria since 2011
                  </p>
                </div>
              </div>

              {/* Years Experience Badge */}
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-brand-purple text-brand-gold border border-brand-gold shadow-xl flex flex-col items-center justify-center text-center p-2 z-10 select-none rounded-none rotate-12">
                <span className="text-2xl font-bold font-serif">15+</span>
                <span className="text-[9px] font-sans tracking-widest text-white uppercase leading-none mt-1">Years Exp</span>
              </div>
            </div>
          </div>

          {/* Right side column: Main message & core descriptors */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-brand-purple flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-brand-gold" /> Our Commitment to Excellence
              </h3>
              <p className="text-neutral-600 leading-relaxed font-sans text-sm">
                At Zapphaire Events, we hold a profound belief: every gathering possesses a pulse, an energy, and a message. We collaborate intimately with our clients, treating their personal or corporate visions as our ultimate checklist. Whether coordinating a high-security political conference, or styling a dreamy coastal wedding reception in Victoria Island, our commitment remains uncompromising.
              </p>
            </div>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((val) => {
                const IconComp = val.icon;
                return (
                  <div key={val.title} className="flex gap-4 items-start p-4 bg-brand-beige border-l-2 border-brand-gold">
                    <div className="p-2 bg-brand-purple text-brand-gold shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-sans font-bold text-brand-purple mb-1">
                        {val.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Structured Points with Checkmarks */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between text-xs tracking-wider uppercase font-bold text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>Personalized Event Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>On-Site Coordination Captains</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>Premium Vendor Clearance</span>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
