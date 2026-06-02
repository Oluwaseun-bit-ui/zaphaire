/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollToSegment = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 85,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 font-sans pt-20 pb-10 border-t border-brand-purple/20 relative overflow-hidden">
      
      {/* Absolute Decorative elements */}
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Brand description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a
              id="footer-logo"
              href="#hero"
              onClick={(e) => handleScrollToSegment(e, "hero")}
              className="flex items-center gap-2 group w-fit focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-none border border-brand-gold rotate-45 group-hover:rotate-90 group-hover:bg-brand-purple group-hover:border-transparent text-brand-gold transition-all duration-300">
                <Award className="w-5 h-5 -rotate-45 group-hover:-rotate-90 text-white transition-all duration-300" />
              </div>
              <div className="flex flex-col ml-1">
                <span className="text-xl font-sans font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-200">
                  ZAPPHAIRE
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#a855f7] -mt-1 font-bold">
                  EVENTS
                </span>
              </div>
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              An experienced, trusted, and women-owned event planning and event management company in Lagos, Nigeria. Delivering exceptional coordination and bespoke luxury venue styling since 2011.
            </p>

            {/* Social action icon buttons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://facebook.com/zapphaireevents", id: "fb" },
                { Icon: Instagram, href: "https://instagram.com/zapphaireevents", id: "ig" },
                { Icon: Twitter, href: "https://twitter.com/zapphaireevents", id: "tw" },
                { Icon: Linkedin, href: "https://linkedin.com/company/zapphaireevents", id: "li" },
              ].map((soc) => {
                const IconComp = soc.Icon;
                return (
                  <a
                    key={soc.id}
                    id={`footer-soc-${soc.id}`}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-none bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand-gold hover:bg-brand-purple hover:text-white hover:border-brand-purple hover:-translate-y-0.5 transition-all focus:outline-none"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-white border-l border-brand-gold pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {[
                { label: "Home", target: "hero" },
                { label: "About Us", target: "about" },
                { label: "Services", target: "services" },
                { label: "Why Choose Us", target: "why-choose" },
                { label: "Our Process", target: "process" },
                { label: "Portfolio", target: "portfolio" },
                { label: "Reviews", target: "testimonials" },
                { label: "FAQ", target: "faq" },
              ].map((link) => (
                <li key={link.target}>
                  <a
                    id={`footer-nav-${link.target}`}
                    href={`#${link.target}`}
                    onClick={(e) => handleScrollToSegment(e, link.target)}
                    className="hover:text-brand-gold hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Highlighted Services (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-white border-l border-brand-gold pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-neutral-400">
              {[
                { label: "Wedding Planning", target: "services" },
                { label: "Birthday Celebrations", target: "services" },
                { label: "Corporate Events", target: "services" },
                { label: "Conferences & Seminars", target: "services" },
                { label: "Product Launches", target: "services" },
                { label: "Event Decoration", target: "services" },
                { label: "Social Gatherings", target: "services" },
                { label: "Venue Styling", target: "services" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-srv-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    href={`#${link.target}`}
                    onClick={(e) => handleScrollToSegment(e, link.target)}
                    className="hover:text-brand-gold hover:underline transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-6 text-xs leading-relaxed font-sans">
            <h4 className="text-xs uppercase font-sans font-bold tracking-widest text-white border-l border-brand-gold pl-2.5">
              Contact Desk
            </h4>
            
            <div className="space-y-4">
              
              <div className="flex gap-3.5 items-start">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p>
                  371 Borno Way, Off Herbert Macaulay Way, Yaba, Lagos 100001, Nigeria
                </p>
              </div>

              <div className="flex gap-3.5 items-center">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <p className="font-bold text-neutral-200">+234 805 219 9654</p>
              </div>

              <div className="flex gap-3.5 items-center">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <p className="font-semibold text-neutral-300 font-sans">info@zapphaireevents.com</p>
              </div>

              <div className="p-3 bg-neutral-900 border border-brand-gold/15 rounded-none uppercase font-sans text-[10px] tracking-widest text-brand-gold">
                ⭐ Rated 4.6 Stars on Lagos Guide
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-4 font-sans text-neutral-500 text-center sm:text-left">
          <div>
            <p>© {currentYear} Zapphaire Events. All Rights Reserved.</p>
            <p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-widest font-sans">
              Planning Perfection • Lagos, Nigeria
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>by Premium Coordination Teams</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
