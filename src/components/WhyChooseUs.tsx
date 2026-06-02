/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Award,
  Compass,
  Smile,
  Network,
  Sliders,
  CalendarCheck,
  Eye,
  HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Experienced Event Professionals",
      description: "Our core planning team consists of certified architects, logistics managers, and catering professionals who have managed 500+ successful events.",
      icon: Award,
    },
    {
      title: "Creative Event Concepts",
      description: "We don't recycle portfolios. Every client gets a custom, bespoke styling concept tailored exactly to their unique taste and background.",
      icon: Compass,
    },
    {
      title: "Stress-Free Planning Process",
      description: "You are the host, not the operator. We handle 100% of the spreadsheets, contracts, and timing so you focus solely on sharing joy.",
      icon: Smile,
    },
    {
      title: "Reliable Vendor Network",
      description: "Enjoy exclusive deals and robust guarantees through our vetted network of elite Lagos decorators, master bakers, and security groups.",
      icon: Network,
    },
    {
      title: "Personalized Client Experience",
      description: "No corporate hierarchy. You get a direct dedicated communication thread matching you to a primary planner throughout your planning.",
      icon: Sliders,
    },
    {
      title: "On-Time Delivery",
      description: "Rigorous minute-by-minute cue pacing ensures dinner service is prompt, presentations stay on time, and schedules are met with precision.",
      icon: CalendarCheck,
    },
    {
      title: "Attention to Detail",
      description: "Every candle placement, backdrop seam alignment, floral cluster hydration level, and lighting cue is checked multiple times by directors.",
      icon: Eye,
    },
    {
      title: "Exceptional Customer Service",
      description: "Our customer service is highly responsive and warm. We meet regularly at our Yaba office or via video so you feel fully supported.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-brand-dark text-white relative overflow-hidden border-b border-white/5">
      
      {/* Decorative Golden Ambient Backlights */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
              THE ZAPPHAIRE DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-normal text-white">
              Why Discerning Hosts Choose Zapphaire Events
            </h2>
          </div>
          <div className="lg:col-span-6 text-neutral-400 font-light text-base sm:text-lg leading-relaxed">
            By blending geometric precision and creative curation with strict administrative logistics, we eliminate the stress of hosting, ensuring every spectacular detail is perfectly managed.
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pil, index) => {
            const IconComponent = pil.icon;
            return (
              <motion.div
                key={pil.title}
                id={`why-pillar-${index}`}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-[#222225] rounded-none p-6 border border-[#2d2d31] hover:border-brand-gold/50 transition-all duration-300 overflow-hidden"
              >
                {/* Pillar Icon */}
                <div className="w-11 h-11 rounded-none bg-brand-dark border border-[#3a3a40] flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-purple group-hover:text-brand-gold transition-all">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Pillar details */}
                <h3 className="text-base font-serif font-bold text-white tracking-tight leading-tight mb-2 group-hover:text-brand-gold transition-colors">
                  {pil.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans font-light">
                  {pil.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Big visual statement footer inside why choose us - Sharp Rectangle layout */}
        <div className="mt-16 bg-[#222225] border border-brand-gold/20 rounded-none p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-white">
              Ready to feel completely secure about your special day?
            </h4>
            <p className="text-xs text-neutral-400">
              Consult with us at our Herbert Macaulay Way, Yaba showroom or book a video appointment.
            </p>
          </div>
          <a
            id="why-choose-book-consultation"
            href="#contact"
            className="px-6 py-4 rounded-none text-xs font-bold uppercase tracking-widest bg-brand-gold hover:bg-brand-purple hover:text-white text-neutral-950 transition-colors shadow shrink-0 cursor-pointer text-center w-full md:w-auto"
          >
            Start Planning Now
          </a>
        </div>

      </div>
    </section>
  );
}
