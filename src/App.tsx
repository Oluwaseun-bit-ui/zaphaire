/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  // State to track auto-filled event type selections from Services or Portfolio Lightbox
  const [selectedServiceType, setSelectedServiceType] = useState("");

  const handleSelectServiceType = (serviceTitle: string) => {
    setSelectedServiceType(serviceTitle);
  };

  const handleClearServiceSelection = () => {
    setSelectedServiceType("");
  };

  return (
    <div id="zapphaire-applet-root" className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950 overflow-x-hidden antialiased">
      
      {/* Dynamic Header Navbar with backdrop-blur and responsive triggers */}
      <Navbar />

      <main id="applet-primary-layout">
        {/* Hero Section featuring luxury decor overlays and key CTAs */}
        <Hero />

        {/* About Us section with Longevity stats bar and leadership story */}
        <About />

        {/* Services mapping 12 modules with detail popups */}
        <Services onSelectServiceType={handleSelectServiceType} />

        {/* Why Choose Us detailing the 8 pillars of event management */}
        <WhyChooseUs />

        {/* Interactive step process timeline */}
        <Process />

        {/* Portfolio gallery featuring Twilight Wedding, corporate galas & lightbox */}
        <Portfolio onSelectServiceType={handleSelectServiceType} />

        {/* Star Rating Reviews displaying user accounts */}
        <Testimonials />

        {/* Accordion FAQ answering timeline & budget issues */}
        <FAQ />

        {/* Validated Inquiry contacts & Location Map details */}
        <Contact
          selectedServiceType={selectedServiceType}
          onClearServiceSelection={handleClearServiceSelection}
        />
      </main>

      {/* Elegant footer details and branding */}
      <Footer />

      {/* Interactive floating WhatsApp coordinates */}
      <WhatsAppFloat />

    </div>
  );
}
