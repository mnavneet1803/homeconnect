import type { ServiceSlug } from "@/constants/services";

export type LeadTimeline =
  | "asap"
  | "1-2-weeks"
  | "1-3-months"
  | "researching";

export interface LeadFormData {
  serviceSlug: ServiceSlug;
  postalCode: string;
  description: string;
  timeline: LeadTimeline;
  name: string;
  phone: string;
  email: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  leadId?: string;
  message: string;
  crmDelivered?: boolean;
  errors?: Record<string, string[]>;
}
