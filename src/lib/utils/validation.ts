import { VALID_POSTAL_PREFIXES } from "@/constants/locations";

const POSTAL_REGEX = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\s?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

export function isValidCanadianPostalCode(input: string): boolean {
  const normalized = input.replace(/\s/g, "").toUpperCase();
  return POSTAL_REGEX.test(normalized);
}

export function isEdmontonMetroPostalCode(input: string): boolean {
  if (!isValidCanadianPostalCode(input)) return false;
  const prefix = input.replace(/\s/g, "").toUpperCase().slice(0, 2);
  return VALID_POSTAL_PREFIXES.includes(
    prefix as (typeof VALID_POSTAL_PREFIXES)[number]
  );
}

export function isValidPhone(input: string): boolean {
  const digits = input.replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

export function isValidEmail(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}
