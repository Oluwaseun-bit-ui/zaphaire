/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROCESS_STEPS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, ClipboardList, PenTool, Radio, Rocket, ShieldAlert, ArrowRight } from "lucide-react";

// Icons for each process step number
const stepIcons = [Coffee, ClipboardList, PenTool, Radio, Rocket, ShieldAlert];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden text-neutral-900 border-b border-gray-100">
      
      {/* Structural visual lines */}
      <div className="absolute left-1/4 right-1/4 top-1/2 h-0.5 bg-neutral-100 hidden lg:block -translate-y-12 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
            METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-tight">
            Our Seamless Six-Step Event Journey
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-600 text-base font-light leading-relaxed">
            We divide planning into clean geometric milestones, keeping you informed at every turn while we handle the heavy lifting.
          </p>
        </div>

        {/* Timeline Stepper (Horizontal on Large, Vertical on Small) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Stepper Controllers (6 steps) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4">
            <h3 className="text-xs font-sans font-bold uppercase tracking-widest text-brand-gold mb-6 block">
              Click a phase to explore
            </h3>
            <div className="flex flex-col gap-3">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const IconComponent = stepIcons[idx] || Coffee;
                
                return (
                  <button
                    key={step.stepNumber}
                    id={`btn-step-${idx}`}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-4 p-4 rounded-none w-full text-left transition-all duration-300 focus:outline-none border border-neutral-100 cursor-pointer ${
                      isActive
                        ? "bg-brand-purple text-white shadow-xl border-brand-purple -translate-x-1"
                        : "bg-neutral-50 hover:bg-neutral-100 text-neutral-800"
                    }`}
                  >
                    {/* Step square indicator (Geometric Balance) */}
                    <div
                      className={`w-10 h-10 rounded-none flex items-center justify-center font-bold text-sm shrink-0 transition-all ${
                        isActive
                          ? "bg-brand-gold text-neutral-900 scale-105"
                          : "bg-white text-neutral-500 border border-neutral-200"
                      }`}
                    >
                      {step.stepNumber}
                    </div>

                    {/* Step text briefly */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs uppercase tracking-wider font-sans font-bold leading-tight truncate">
                        {step.title}
                      </h4>
                      <p className={`text-xs truncate transition-all ${
                        isActive ? "text-neutral-200" : "text-neutral-500"
                      }`}>
                        {step.description}
                      </p>
                    </div>

                    {/* Dynamic trailing arrow */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTimelineArrow"
                        className="text-brand-gold p-0.5"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Focused Details Display Panel */}
          <div className="lg:col-span-12 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-none p-8 sm:p-10 border border-neutral-150 shadow-sm relative overflow-hidden"
              >
                {/* Big decorative background stamp number */}
                <div className="absolute right-6 -bottom-10 text-[180px] font-sans font-extrabold text-brand-purple/5 leading-none select-none pointer-events-none">
                  {PROCESS_STEPS[activeStep].stepNumber}
                </div>

                {/* Focus Active Icon */}
                <div className="w-14 h-14 rounded-none bg-brand-beige text-brand-purple flex items-center justify-center mb-8">
                  {(() => {
                    const CurrentIcon = stepIcons[activeStep] || Coffee;
                    return <CurrentIcon className="w-7 h-7" />;
                  })()}
                </div>

                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-brand-gold block mb-2">
                  PHASE 0{PROCESS_STEPS[activeStep].stepNumber} OF 06
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-purple tracking-tight mb-4">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                
                <p className="text-sm text-neutral-700 font-sans leading-relaxed mb-6">
                  {PROCESS_STEPS[activeStep].description}
                </p>

                <div className="p-5 rounded-none bg-brand-beige border border-brand-gold/10 space-y-2">
                  <span className="text-xs uppercase font-sans font-bold tracking-widest text-brand-purple block">
                    What happens in this phase
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                    {PROCESS_STEPS[activeStep].details}
                  </p>
                </div>

                {/* Timeline progress pills - rectangular bar shapes */}
                <div className="flex gap-1.5 mt-8 items-center justify-start">
                  {PROCESS_STEPS.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`h-1.5 transition-all duration-300 ${
                        dotIdx === activeStep ? "w-8 bg-brand-gold" : "w-2 bg-neutral-200"
                      }`}
                    />
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
