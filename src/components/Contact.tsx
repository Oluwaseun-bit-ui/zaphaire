/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { InquirySubmission } from "../types";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Inbox,
  X,
  Trash2,
  Calendar,
  DollarSign,
  Briefcase,
} from "lucide-react";

interface ContactProps {
  selectedServiceType: string;
  onClearServiceSelection: () => void;
}

export default function Contact({ selectedServiceType, onClearServiceSelection }: ContactProps) {
  // Inbox / State lists
  const [inquiries, setInquiries] = useState<InquirySubmission[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [message, setMessage] = useState("");

  // Validation feedback
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync eventType component choice
  useEffect(() => {
    if (selectedServiceType) {
      setEventType(selectedServiceType);
    }
  }, [selectedServiceType]);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const loaded = localStorage.getItem("zapphaire_inquiries");
    if (loaded) {
      try {
        setInquiries(JSON.parse(loaded));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleClearInquiries = () => {
    localStorage.removeItem("zapphaire_inquiries");
    setInquiries([]);
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!fullName.trim()) tempErrors.fullName = "Full name is required";
    
    if (!email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please specify a valid email address";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(phone.replace(/\s+/g, ""))) {
      tempErrors.phone = "Please specify a valid phone number";
    }

    if (!eventType) tempErrors.eventType = "Please pick your event type";
    if (!eventDate) tempErrors.eventDate = "Please choose an event date";
    if (!budgetRange) tempErrors.budgetRange = "Please estimate your budget range";
    if (!message.trim()) tempErrors.message = "Brief description of event required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newInquiry: InquirySubmission = {
      id: "inq-" + Date.now(),
      fullName,
      email,
      phone,
      eventType,
      eventTypeDetails: eventType,
      eventDate,
      budgetRange,
      message,
      timestamp: new Date().toLocaleString(),
      status: "Pending",
    } as any;

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);
    localStorage.setItem("zapphaire_inquiries", JSON.stringify(updated));

    // Clear fields
    setFullName("");
    setEmail("");
    setPhone("");
    setEventDate("");
    setBudgetRange("");
    setMessage("");
    onClearServiceSelection();
    
    setErrors({});
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-b border-gray-100">
      
      {/* Decorative Blur bubbles */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-brand-beige rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-brand-gold block mb-3">
            COMMISSION US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-purple tracking-tight">
            Let's Shape Your Vision
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-600 text-base font-light leading-relaxed">
            Fill out our comprehensive event brief, or contact our Yaba showroom directly to align timelines, decorator blueprints, and staging specifications.
          </p>
        </div>

        {/* Local Inquiries Tray Indicator box */}
        {inquiries.length > 0 && (
          <div className="mb-8 flex justify-center">
            <button
              id="view-local-inbox"
              type="button"
              onClick={() => setShowInbox(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-emerald-50 text-emerald-800 border border-emerald-250 text-[10px] font-sans font-bold uppercase tracking-widest shadow-sm hover:bg-emerald-100 cursor-pointer transition-colors"
            >
              <Inbox className="w-4 h-4 text-emerald-600" />
              Your Inquiry Inbox ({inquiries.length} Saved)
            </button>
          </div>
        )}

        {/* Master Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Coordinates & Map Frame */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-brand-purple tracking-tight mb-4">
                Our Executive Office
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 font-sans">
                
                {/* Address block */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-none bg-brand-beige text-brand-purple shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-0.5">Headquarters Location</h4>
                    <p className="leading-relaxed text-xs">
                      371 Borno Way, Off Herbert Macaulay Way,<br />
                      Yaba, Lagos 100001, Nigeria
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-none bg-brand-beige text-brand-purple shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-0.5">Direct Planning Desk</h4>
                    <p className="font-semibold text-neutral-850">
                      +234 805 219 9654
                    </p>
                    <p className="text-[10px] text-neutral-400">Call / WhatsApp coordination</p>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-none bg-brand-beige text-brand-purple shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-0.5">Email Communications</h4>
                    <p className="font-semibold text-neutral-850">
                      info@zapphaireevents.com
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-none bg-brand-beige text-brand-purple shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-0.5">Business Hours</h4>
                    <p className="font-medium text-neutral-850">
                      Monday – Friday, 9:00 AM – 5:00 PM
                    </p>
                    <p className="text-[10px] text-neutral-400">Closed Weekends (Active Event Operations)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Map card */}
            <div className="relative rounded-none overflow-hidden hover:border-brand-gold/60 border border-neutral-200 transform transition-transform duration-350 hover:scale-[1.01] h-72 shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1235122146914!2d3.3768560751010376!3d6.506059293486334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf2027581fb%3A0xe53be0ef6c41b80d!2s371%20Borno%20Way%2C%20Alagomeji%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1780406600000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zapphaire Events HQ layout map"
              />
            </div>
          </div>

          {/* Right Column: Briefing validation Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#fafafc] border border-neutral-200 rounded-none p-8 sm:p-10 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-brand-purple tracking-tight mb-4">
                Structured Event Brief Form
              </h3>
              <p className="text-xs font-sans text-neutral-500 mb-8 leading-relaxed">
                Provide us details about your planned gathering context so we can prepare a high-impact styling blueprint before our showroom appointment.
              </p>

              <form onSubmit={handleFormSubmission} className="space-y-6">
                
                {/* Row 1: Full name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="input-fullname"
                      type="text"
                      className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                        errors.fullName ? "border-red-500" : "border-neutral-200"
                      }`}
                      placeholder="e.g. Dr. Chioma Nnaji"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && <p className="text-red-500 text-[11px] mt-1.5">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="input-email"
                      type="text"
                      className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                        errors.email ? "border-red-500" : "border-neutral-200"
                      }`}
                      placeholder="e.g. name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 2: Phone number and Event type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="input-phone"
                      type="text"
                      className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                        errors.phone ? "border-red-500" : "border-neutral-200"
                      }`}
                      placeholder="e.g. +234 805 219 9654"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <p className="text-red-500 text-[11px] mt-1.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2 flex justify-between items-center">
                      <span>Event Type *</span>
                      {selectedServiceType && (
                        <button
                          type="button"
                          onClick={() => {
                            setEventType("");
                            onClearServiceSelection();
                          }}
                          className="text-[9px] text-brand-purple font-bold uppercase tracking-widest hover:text-brand-gold"
                        >
                          Clear Selection
                        </button>
                      )}
                    </label>
                    <select
                      id="select-event-type"
                      className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                        errors.eventType ? "border-red-500" : "border-neutral-200"
                      }`}
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                    >
                      <option value="">-- Choose Category --</option>
                      <option value="Wedding Planning">Wedding Planning</option>
                      <option value="Birthday Celebrations">Birthday Celebrations</option>
                      <option value="Corporate Events">Corporate Events</option>
                      <option value="Conferences & Seminars">Conferences & Seminars</option>
                      <option value="Product Launches">Product Launches</option>
                      <option value="Event Decoration">Event Decoration</option>
                      <option value="Social Gatherings">Social Gatherings</option>
                      <option value="Anniversary Celebrations">Anniversary Celebrations</option>
                      <option value="Event Coordination">Event Coordination</option>
                      <option value="Vendor Management">Vendor Management</option>
                      <option value="Venue Styling">Venue Styling</option>
                      <option value="Event Logistics">Event Logistics</option>
                    </select>
                    {errors.eventType && <p className="text-red-500 text-[11px] mt-1.5">{errors.eventType}</p>}
                  </div>
                </div>

                {/* Row 3: Event Date and Budget range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      id="input-date"
                      type="date"
                      className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                        errors.eventDate ? "border-red-500" : "border-neutral-200"
                      }`}
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                    />
                    {errors.eventDate && <p className="text-red-500 text-[11px] mt-1.5">{errors.eventDate}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2">
                      Estimated Budget Range *
                    </label>
                    <select
                      id="select-budget"
                      className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                        errors.budgetRange ? "border-red-500" : "border-neutral-200"
                      }`}
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                    >
                      <option value="">-- Pick Estimated Range --</option>
                      <option value="Under ₦5,000,000">Under ₦5,000,000</option>
                      <option value="₦5,000,000 - ₦15,000,000">₦5,000,000 - ₦15,000,000</option>
                      <option value="₦15,000,000 - ₦50,000,000">₦15,000,000 - ₦50,000,000</option>
                      <option value="Above ₦50,000,000">Above ₦50,000,000</option>
                    </select>
                    {errors.budgetRange && <p className="text-red-500 text-[11px] mt-1.5">{errors.budgetRange}</p>}
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-700 mb-2">
                    Detailed Event Description / Message *
                  </label>
                  <textarea
                    id="input-message"
                    rows={4}
                    className={`w-full bg-white border rounded-none px-4 py-3 text-neutral-800 text-xs focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple ${
                      errors.message ? "border-red-500" : "border-neutral-200"
                    }`}
                    placeholder="Tell us about your guest count, location preferences, color themes, or florist ideas..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1.5">{errors.message}</p>}
                </div>

                {/* Toast Success dialog inside form */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-none bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="font-bold uppercase tracking-widest mb-0.5">Brief Submitted Successfully!</p>
                        <p className="text-[11px] text-emerald-700 font-sans font-medium">Inquiry stored locally. Tap the "Your Inquiry Inbox" button above to view your logs.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button trigger */}
                <button
                  id="btn-submit-brief"
                  type="submit"
                  className="w-full py-4 rounded-none bg-brand-purple hover:bg-brand-gold hover:text-brand-dark text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Send className="w-4 h-4" />
                  Submit Booking Inquiry
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Local Inquiry Inbox Sidebar Drawer Modal */}
      <AnimatePresence>
        {showInbox && (
          <div id="inbox-drawer-overlay" className="fixed inset-0 z-50 flex justify-end">
            
            {/* Backdrop black overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInbox(false)}
              className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
            />

            {/* Sidebar drawer body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 border-l border-neutral-200 rounded-none"
            >
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-neutral-50 rounded-none font-sans">
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-5 h-5 text-brand-purple" />
                  <div>
                    <h3 className="text-base font-serif font-bold text-brand-purple">Inquiry Brief History</h3>
                    <p className="text-[9px] uppercase tracking-widest text-neutral-400">Local temporary records (localStorage)</p>
                  </div>
                </div>
                
                <button
                  id="close-inbox-drawer"
                  type="button"
                  onClick={() => setShowInbox(false)}
                  className="p-1.5 rounded-none hover:bg-neutral-200 text-neutral-500 focus:outline-none transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body list */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-4 bg-neutral-50 rounded-none border border-neutral-200 relative space-y-3"
                  >
                    <span className="absolute right-4 top-4 text-[9px] font-sans font-bold tracking-widest bg-brand-gold/15 text-brand-purple px-2.5 py-0.5 rounded-none uppercase">
                      {inq.status}
                    </span>

                    <div>
                      <h4 className="text-sm font-sans font-bold text-brand-purple uppercase tracking-wider leading-snug">
                        {inq.fullName}
                      </h4>
                      <p className="text-[10px] font-sans text-neutral-400">
                        Submitted: {inq.timestamp}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-200 text-[11px] text-neutral-600 font-sans">
                      <div className="flex items-center gap-1.5 truncate">
                        <Briefcase className="w-3.5 h-3.5 text-brand-purple" />
                        <span className="truncate font-bold text-neutral-800">{inq.eventType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{inq.eventDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 col-span-2">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Budget: <b className="font-semibold text-neutral-800">{inq.budgetRange}</b></span>
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-neutral-150 rounded-none space-y-1">
                      <span className="text-[9px] uppercase font-sans font-bold tracking-widest text-neutral-400 block">Briefed Scope</span>
                      <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                        {inq.message}
                      </p>
                    </div>

                    <div className="text-[10px] text-neutral-500 space-y-0.5 pt-1.5 font-sans uppercase tracking-wider">
                      <p>📞 Phone: <span className="text-neutral-800 font-bold">{inq.phone}</span></p>
                      <p>✉️ Email: <span className="text-neutral-800 font-bold">{inq.email}</span></p>
                    </div>

                  </div>
                ))}
              </div>

              {/* Drawer Footer controls */}
              <div className="p-6 border-t border-neutral-100 bg-neutral-50 flex gap-3 rounded-none">
                <button
                  id="clear-inbox-history"
                  onClick={handleClearInquiries}
                  className="flex-1 py-3 border border-red-250 text-red-650 hover:bg-red-50 font-sans font-bold text-[10px] tracking-widest uppercase rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear History
                </button>
                <button
                  id="close-inbox-history-dismiss"
                  onClick={() => setShowInbox(false)}
                  className="flex-1 py-3 bg-brand-purple hover:bg-brand-gold hover:text-brand-dark text-white font-sans font-bold text-[10px] tracking-widest uppercase rounded-none transition-all cursor-pointer text-center"
                >
                  Done Reviewing
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
