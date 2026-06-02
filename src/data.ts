/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, TestimonialItem, ProcessStep, FAQItem } from "./types";

// Import generated premium assets
import luxuryHeroImg from "./assets/images/luxury_event_hero_1780406620379.png";
import luxuryWeddingImg from "./assets/images/luxury_wedding_1780406637879.png";
import corporateEventImg from "./assets/images/corporate_event_1780406656255.png";
import eventDecorationImg from "./assets/images/event_decoration_1780406676038.png";
import ownerPortraitImg from "./assets/images/owner_portrait_1780406697813.png";
import conferenceSetupImg from "./assets/images/conference_setup_1780406712779.png";
import socialEventImg from "./assets/images/social_event_1780406731197.png";

export {
  luxuryHeroImg,
  luxuryWeddingImg,
  corporateEventImg,
  eventDecorationImg,
  ownerPortraitImg,
  conferenceSetupImg,
  socialEventImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description: "Full-service planning, styling, and coordination to create the luxury wedding of your dreams.",
    fullDetails: "Our Wedding Planning service covers every detail from budget management and vendor curation to bespoke decor styling and on-site timeline management. We curate every aspect with extreme precision to reflect the couple's personal story.",
    iconName: "Heart",
  },
  {
    id: "birthday-celebrations",
    title: "Birthday Celebrations",
    description: "Milestone birthday setups with beautiful detailing, entertainment, and modern venue styling.",
    fullDetails: "From majestic golden jubilees to vibrant themed parties, we design birthdays with dynamic backdrops, custom photo-ops, high-end seating, premium catering networks, and curated musical acts for absolute sensory delight.",
    iconName: "Gift",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description: "Sophisticated galas, year-end celebrations, and high-impact corporate event experiences.",
    fullDetails: "We build immersive brand experiences, combining professional staging, audio-visual technical compliance, step-and-repeat backdrops, and flawless hosting protocol to reflect your corporate brand excellence.",
    iconName: "Briefcase",
  },
  {
    id: "conferences-seminars",
    title: "Conferences & Seminars",
    description: "Seamless execution, technical support, stage design, and registration coordination.",
    fullDetails: "Handling technical layout, stage build, digital check-ins, VIP concierge, translation tech support, and breakout session coordinates with peak administrative precision.",
    iconName: "Presentation",
  },
  {
    id: "product-launches",
    title: "Product Launches",
    description: "Creative activation designs to generate powerful buzz and captivate target audiences.",
    fullDetails: "Our product launch solutions bring brands to life. We arrange custom light projections, interactive displays, custom branding, and social-first aesthetics to maximize organic press and consumer engagement.",
    iconName: "Sparkles",
  },
  {
    id: "event-decoration",
    title: "Event Decoration",
    description: "Stunning floral installations, bespoke centerpieces, and premium table styling.",
    fullDetails: "We design a sensory experience. Our master florists and styling crew custom-engineer color palettes, drape designs, candle configurations, and luxury table layouts specified for high-impact visual beauty.",
    iconName: "Flower",
  },
  {
    id: "social-gatherings",
    title: "Social Gatherings",
    description: "Exquisite planning for elite private dinners, fashion shows, and networking events.",
    fullDetails: "Providing ultra-personalized private setups where privacy, exclusive atmosphere, high-end tableware, culinary excellence, and curated luxury hosting protocols are perfectly balanced.",
    iconName: "Users",
  },
  {
    id: "anniversary-celebrations",
    title: "Anniversary Celebrations",
    description: "Honoring milestones of partnership and love with romantic and elegant planning designs.",
    fullDetails: "Recreate magical memories with sophisticated silver, gold, cluster crystal themes, grand entrance layouts, and memorable family highlight reels in premium spaces.",
    iconName: "Infinity",
  },
  {
    id: "event-coordination",
    title: "Event Coordination",
    description: "Day-of management to oversee schedules, vendor activities, and guest assistance.",
    fullDetails: "Our coordination captains arrive with multi-page cue lists. We manage vendor load times, audio checks, guest queues, menu pacing, and any sudden situations, ensuring you host completely stress-free.",
    iconName: "Clock",
  },
  {
    id: "vendor-management",
    title: "Vendor Management",
    description: "Sourcing and managing premium caterers, photographers, DJs, and live music bands.",
    fullDetails: "Leveraging our 4.6-star trusted network across Lagos. We handle vendor contracting, technical compliance, briefing, staging permissions, and financial settlements cleanly.",
    iconName: "ShieldCheck",
  },
  {
    id: "venue-styling",
    title: "Venue Styling",
    description: "Complete transformation of blank spaces into magnificent settings.",
    fullDetails: "We remodel raw spaces. Using customized lighting rigs, carpet laying, dramatic drapery, themed ceilings, and bespoke entry tunnels, we convert any warehouse or field into a fairy tale space.",
    iconName: "Paintbrush",
  },
  {
    id: "event-logistics",
    title: "Event Logistics",
    description: "Handling equipment transport, emergency power systems, and guest flow layouts.",
    fullDetails: "Deploying high-duty silent backup generators, traffic coordinators, guest parking plans, usher guides, and safe load-in schedules to satisfy all civic compliance rules.",
    iconName: "Truck",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "proj-1",
    title: "The Golden Opulence Wedding",
    category: "Weddings",
    image: luxuryWeddingImg,
    description: "A luxury twilight reception under a clear marquee with extensive white floral trails, crystal chandeliers, and customized high-gloss white flooring.",
    location: "Ikoyi, Lagos",
    year: "2025",
  },
  {
    id: "proj-2",
    title: "EmpowerTech Annual Corporate Gala",
    category: "Corporate",
    image: corporateEventImg,
    description: "An elegant stage experience for 500+ guests featuring deep-purple accent styling, neon branding, and tailored award segments.",
    location: "Victoria Island, Lagos",
    year: "2026",
  },
  {
    id: "proj-3",
    title: "Bespoke Floral Table Scapes",
    category: "Decoration",
    image: eventDecorationImg,
    description: "A close-up view of a customized golden-plated dinner design featuring floating candle arrays and tall fresh orchid centerpieces.",
    location: "Lekki Phase 1, Lagos",
    year: "2025",
  },
  {
    id: "proj-4",
    title: "Lagos Leadership Summit",
    category: "Conferences",
    image: conferenceSetupImg,
    description: "Full stage setup, digital banners, premium modular seating configurations, and crystal-clear sound projection systems for key government events.",
    location: "Yaba, Lagos",
    year: "2026",
  },
  {
    id: "proj-5",
    title: "Velvet Nights Birthday Soirée",
    category: "Celebrations",
    image: socialEventImg,
    description: "An intimate and high-end milestone birthday party styled with custom violet floral columns, plush velvet lounges, and warm background uplighting.",
    location: "Ikeja GRA, Lagos",
    year: "2025",
  },
  {
    id: "proj-6",
    title: "Grand Imperial Banquet Setup",
    category: "Social",
    image: luxuryHeroImg,
    description: "A majestic event design displaying hanging ambient chandeliers, white rose curtains, and complete visual coordination for elite VIP delegates.",
    location: "Eko Atlantic, Lagos",
    year: "2026",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Dr. Chioma Nnaji",
    role: "Bride",
    content: "Zapphaire Events turned our wedding dream into a spectacular reality! The decoration was pure luxury, the vendor timeline was exact to the minute, and our guests are still speaking about the beautiful coordination. Highly recommend their professional team!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t-2",
    name: "Mr. Segun Adebayo",
    role: "Head of Brand Strategy",
    company: "Vanguard Tech Corp",
    content: "Flawless execution! Their team managed our product launch with ultimate professionalism. The modern branding, customized stage design, and smooth registration workflow exceeded our corporate expectations. Absolutely reliable and creative.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t-3",
    name: "Mrs. Funmi Olowu",
    role: "Founder",
    company: "Olowu Textiles & Design",
    content: "For my 50th golden birthday celebration, I wanted something breathtaking but intimate. Zapphaire Events curated a magnificent velvet room with superb floral detailing that felt incredibly modern and high-end. Excellent support throughout!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t-4",
    name: "Tunde Edun",
    role: "Event Delegate",
    company: "Annual Finance Convention",
    content: "The level of event logistics and guest flow coordination during the conference was unparalleled. Sound was pristine, visual screens were sharp, and ushers were beautifully polite. Zapphaire Events sets a gold standard in Lagos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "t-5",
    name: "Amara Nwosu",
    role: "Executive Secretary",
    company: "Vibrant Foundation",
    content: "A women-owned powerhouse! Their team is exceptionally creative, reliable, and patient. They respected our budget constraints and negotiated premium pricing with top Lagos caterers. Stress-free coordination from start to end.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Consultation",
    description: "Initial discovery conversation to understand your vision, guest count, general themes, and budgeting ideas.",
    details: "We sit down (virtually or at our Yaba office) to talk style, color stories, mood boards, and absolute non-negotiables for your special day.",
  },
  {
    stepNumber: 2,
    title: "Planning & Strategy",
    description: "Creating concrete event outlines, layout drafts, logistics timelines, and structural checklists.",
    details: "We draw initial scale configurations, detail out emergency safety plans, allocate budget parts, and draft individual crew scopes.",
  },
  {
    stepNumber: 3,
    title: "Design & Preparation",
    description: "Sourcing exquisite decoration flowers, premium backdrops, custom fabric drapes, and staging gear.",
    details: "Our styling studio organizes mock table displays. We secure fine rentals, printed collateral, custom lighting packages, and special effects.",
  },
  {
    stepNumber: 4,
    title: "Coordination",
    description: "Aligning and managing contracted caterers, guest hosts, decorators, tech hands, and performers.",
    details: "We run vendor briefs, coordinate soundcheck slots, configure entry passes, and lock all delivery and setup times firmly.",
  },
  {
    stepNumber: 5,
    title: "Event Execution",
    description: "On-site management during the entire event, covering minute-by-minute cues, pacing, and logistics.",
    details: "From dawn load-in to midnight wrap-up, our senior directors guide guest flow, usher VIPs, supervise meal service, and execute schedule cues.",
  },
  {
    stepNumber: 6,
    title: "Post-Event Follow-Up",
    description: "Managing complete site loadout, final vendor clearances, photo curation, and structured recap chats.",
    details: "We ensure safe exit coordination, clean venue return, close remaining agreements, and deliver raw highlight photo links for immediate joy.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How far in advance should we book Zapphaire Events?",
    answer: "For premium weddings and large conferences, we highly recommend booking at least 3 to 6 months in advance. However, for birthday soirées, social dinners, or product launches, a lead time of 4 to 8 weeks is often sufficient.",
  },
  {
    id: "faq-2",
    question: "Do you offer customizable event services or only full plans?",
    answer: "Absolutely! We customize our packages to suit your distinct requirements. Whether you need full end-to-end planning and design, specific decoration hire, or strictly day-of coordination, we tailor our contract to match your scope.",
  },
  {
    id: "faq-3",
    question: "How do you handle budget limitations or changes?",
    answer: "Transparency is our foundation. We help prioritize expenditures—focusing resources on high-impact areas like venue styling and food presentation, while optimizing where cost-effective. We provide detailed estimates so there are never surprises.",
  },
  {
    id: "faq-4",
    question: "Can you plan events outside of Yaba and Lagos?",
    answer: "Yes, we handle planning across Nigera and destination coordinates! While our main office is in Yaba, Lagos, we possess an active national vendor network capable of taking our signature luxury styling to any destination.",
  },
  {
    id: "faq-5",
    question: "What types of corporate events do you manage?",
    answer: "We manage a broad spectrum, including standard company award dinners, end-of-year brand galas, multi-session professional panels, interactive product launches, VIP board retreats, and regional sales conferences.",
  },
  {
    id: "faq-6",
    question: "Who handles vendor selections and contracts?",
    answer: "We source and present vetted vendors with excellent track records. While the final selection and approval rests on you, we draft all service expectations, coordinate contracts, and manage their operations cleanly from load-in to departure.",
  },
];
