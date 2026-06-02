/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Send, X, ShieldAlert, Sparkles } from "lucide-react";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");

  const handleWhatsappRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanMsg = chatMsg.trim() || "Hi Zapphaire Events, I'd like to book a luxury consultation!";
    const whatsappUrl = `https://wa.me/2348052199654?text=${encodeURIComponent(cleanMsg)}`;
    
    // Reset and open whatsapp link in a new tab
    setChatMsg("");
    setIsOpen(false);
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="whatsapp-fixed-anchor" className="fixed bottom-6 right-6 z-40 font-sans">
      
      {/* Dialog box canopy */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="absolute bottom-16 right-0 w-80 sm:w-85 bg-white border border-neutral-200 rounded-none shadow-2xl overflow-hidden z-50 text-neutral-800"
          >
            {/* Header banner */}
            <div className="bg-emerald-600 text-white p-5 flex items-center justify-between border-b border-emerald-700">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-none border border-emerald-250 bg-white/10 flex items-center justify-center font-bold text-lg">
                  Z
                  <div className="absolute right-0 bottom-0 w-2.5 h-2.5 bg-emerald-300 border border-emerald-700 rounded-none" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold uppercase tracking-wider leading-snug">Zapphaire Desk</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center gap-1 font-sans">
                    <Sparkles className="w-3 h-3 text-emerald-200" /> Typically replies in 5m
                  </p>
                </div>
              </div>
              
              <button
                id="close-wa-pop"
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-none hover:bg-white/10 text-emerald-150 hover:text-white transition-colors"
                aria-label="Close Whatsapp chatbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-5 bg-neutral-50/50 space-y-4">
              <div className="p-3.5 bg-white rounded-none border border-neutral-200 shadow-sm text-xs text-neutral-600 leading-relaxed font-sans">
                <p>
                  Hello! Welcome to <b>Zapphaire Events</b>. How can we assist you with your wedding, corporate banquet, or logistics brief today?
                </p>
              </div>

              {/* Form block */}
              <form onSubmit={handleWhatsappRedirect} className="space-y-3">
                <div className="relative">
                  <textarea
                    id="wa-chat-textbox"
                    rows={2}
                    className="w-full bg-white border border-neutral-200 rounded-none px-3.5 py-2 text-xs text-neutral-850 focus:outline-none focus:border-emerald-650 resize-none min-h-[50px] font-sans"
                    placeholder="Type your message description here..."
                    value={chatMsg}
                    onChange={(e) => setChatMsg(e.target.value)}
                  />
                </div>

                <button
                  id="btn-whatsapp-submit"
                  type="submit"
                  className="w-full py-2.5 rounded-none bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Start WhatsApp Chat
                </button>
              </form>

            </div>

            {/* Micro disclaimer terms */}
            <div className="p-3 bg-neutral-50 border-t border-neutral-100 text-[9px] text-neutral-400 text-center flex items-center justify-center gap-1 font-sans uppercase tracking-wider">
              <ShieldAlert className="w-3 h-3 text-neutral-300" />
              <span>Launches WhatsApp Web/Application securely.</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary breathing float button */}
      <motion.button
        id="wa-trigger-bubble"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-14 h-14 rounded-none rotate-45 bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-700 hover:rotate-90 transition-all duration-300 cursor-pointer border border-emerald-500 z-40 text-center focus:outline-none relative"
        aria-label="Open Whatsapp support drawer"
      >
        <MessageCircle className="w-6 h-6 -rotate-45 group-hover:-rotate-90 transition-all duration-300" />
        <span className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-brand-gold rounded-none animate-ping" />
        <span className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-brand-gold rounded-none" />
      </motion.button>

    </div>
  );
}
