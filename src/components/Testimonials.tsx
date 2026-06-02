/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TESTIMONIALS } from "../data";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden text-neutral-900 border-b border-gray-100">
      
      {/* Structural visual glows */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-brand-beige/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
            VERIFIED SUCCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-tight">
            Words From Our Gracious Hosts
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-600 text-base font-light leading-relaxed">
            We are honored to maintain a 4.6-star rating. Read true accounts of our coordination precision, floral aesthetics, and catering logistics across Lagos.
          </p>
        </div>

        {/* Testimonials Masonry or Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => {
            return (
              <motion.div
                key={test.id}
                id={`testimonial-card-${test.id}`}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#fafafc] border border-neutral-100 rounded-none p-8 shadow-sm hover:shadow-xl hover:bg-white hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Quote Icon watermark */}
                <div className="absolute right-6 top-6 text-brand-beige group-hover:text-brand-purple/10 transition-colors pointer-events-none">
                  <Quote className="w-10 h-10 transform scale-x-[-1]" />
                </div>

                <div className="space-y-4">
                  {/* Star rating component */}
                  <div className="flex gap-0.5 text-brand-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < test.rating ? "fill-brand-gold text-brand-gold" : "text-neutral-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Main client comment text */}
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans italic">
                    "{test.content}"
                  </p>
                </div>

                {/* Profile credentials box */}
                <div className="mt-8 pt-6 border-t border-neutral-150 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none overflow-hidden border border-brand-gold shadow">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover rounded-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-brand-purple">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-neutral-500 font-sans uppercase tracking-wider">
                      {test.role} {test.company ? `• ${test.company}` : ""}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
