/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Weddings" | "Corporate" | "Celebrations" | "Decoration" | "Conferences" | "Social";
  image: string;
  description: string;
  location: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquirySubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  budgetRange: string;
  message: string;
  timestamp: string;
  status: "Pending" | "Reviewed";
}
