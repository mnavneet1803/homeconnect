export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "vetting" | "pricing" | "process";
  featured?: boolean;
}
