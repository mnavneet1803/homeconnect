import { z } from "zod";
import { SERVICE_SLUGS } from "@/constants/services";
import { FORM } from "@/constants/app";

export const leadTimelineSchema = z.enum([
  "asap",
  "1-2-weeks",
  "1-3-months",
  "researching",
]);

export const leadSourceSchema = z
  .object({
    pageUrl: z.string().url().optional(),
    referrer: z.string().optional(),
    utmSource: z.string().optional(),
    utmMedium: z.string().optional(),
    utmCampaign: z.string().optional(),
  })
  .optional();

export const leadFormSchema = z.object({
  serviceSlug: z.enum(SERVICE_SLUGS, {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  postalCode: z
    .string()
    .min(6, "Postal code is required")
    .regex(
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\s?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
      "Enter a valid Canadian postal code"
    ),
  description: z
    .string()
    .min(
      FORM.minDescriptionLength,
      `Please describe your project (${FORM.minDescriptionLength} characters minimum)`
    ),
  timeline: leadTimelineSchema,
  name: z.string().min(2, "Name is required"),
  phone: z
    .string()
    .min(10, "Phone number is required")
    .refine(
      (val) => {
        const digits = val.replace(/\D/g, "");
        return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
      },
      { message: "Enter a valid phone number" }
    ),
  email: z.string().email("Enter a valid email address"),
  source: leadSourceSchema,
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;
