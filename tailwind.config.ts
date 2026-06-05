import type { Config } from "tailwindcss";

/**
 * Edmonton Home Connect — Premium Design System
 * Tailwind v3+ configuration
 *
 * Aesthetic: Stripe × Linear × Vercel × Housecall Pro
 * Avoid: contractor orange, heavy shadows, clip-art energy
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      /* ─── Color Palette ─────────────────────────────────────────── */
      colors: {
        ink: {
          DEFAULT: "#111827",
          950: "#0A0F14",
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#D1D5DB",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          0: "#FFFFFF",
          50: "#FAFBFC",
          100: "#F4F6F8",
          200: "#ECEEF1",
          elevated: "#FFFFFF",
          overlay: "rgba(10, 15, 20, 0.45)",
        },
        brand: {
          DEFAULT: "#0F766E",
          950: "#042F2E",
          900: "#134E4A",
          800: "#115E59",
          700: "#0F766E",
          600: "#0D9488",
          500: "#14B8A6",
          400: "#2DD4BF",
          300: "#5EEAD4",
          200: "#99F6E4",
          100: "#CCFBF1",
          50: "#F0FDFA",
        },
        accent: {
          DEFAULT: "#6366F1",
          700: "#4338CA",
          600: "#4F46E5",
          500: "#6366F1",
          100: "#E0E7FF",
          50: "#EEF2FF",
        },
        success: {
          DEFAULT: "#059669",
          700: "#047857",
          600: "#059669",
          500: "#10B981",
          100: "#D1FAE5",
          50: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#D97706",
          700: "#B45309",
          600: "#D97706",
          500: "#F59E0B",
          100: "#FEF3C7",
          50: "#FFFBEB",
        },
        error: {
          DEFAULT: "#DC2626",
          700: "#B91C1C",
          600: "#DC2626",
          500: "#EF4444",
          100: "#FEE2E2",
          50: "#FEF2F2",
        },
        border: {
          DEFAULT: "#E5E7EB",
          subtle: "#ECEEF1",
          strong: "#D1D5DB",
          focus: "#0F766E",
        },
      },

      /* ─── Typography ────────────────────────────────────────────── */
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-geist-sans)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.035em", fontWeight: "600" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],
        "heading-md": ["1.25rem", { lineHeight: "1.35", letterSpacing: "-0.015em", fontWeight: "600" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.6", letterSpacing: "-0.006em", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        "label-md": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "label-sm": ["0.75rem", { lineHeight: "1.35", letterSpacing: "0.02em", fontWeight: "500" }],
        "caption": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "400" }],
      },

      /* ─── Spacing (semantic aliases on 4px grid) ───────────────── */
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        section: "5rem",
        "section-lg": "7.5rem",
        gutter: "1.5rem",
        "gutter-lg": "2rem",
      },
      maxWidth: {
        prose: "65ch",
        content: "72rem",
        narrow: "42rem",
        form: "28rem",
      },

      /* ─── Border Radius ─────────────────────────────────────────── */
      borderRadius: {
        none: "0",
        xs: "0.25rem",
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        pill: "9999px",
      },

      /* ─── Shadows (Stripe / Linear layered depth) ──────────────── */
      boxShadow: {
        none: "none",
        xs: "0 1px 2px 0 rgba(10, 15, 20, 0.04)",
        sm: "0 1px 3px 0 rgba(10, 15, 20, 0.06), 0 1px 2px -1px rgba(10, 15, 20, 0.04)",
        DEFAULT: "0 2px 8px -2px rgba(10, 15, 20, 0.08), 0 1px 3px -1px rgba(10, 15, 20, 0.04)",
        md: "0 4px 16px -4px rgba(10, 15, 20, 0.10), 0 2px 6px -2px rgba(10, 15, 20, 0.05)",
        lg: "0 8px 32px -8px rgba(10, 15, 20, 0.12), 0 4px 12px -4px rgba(10, 15, 20, 0.06)",
        xl: "0 16px 48px -12px rgba(10, 15, 20, 0.14), 0 8px 20px -8px rgba(10, 15, 20, 0.08)",
        inner: "inset 0 1px 2px 0 rgba(10, 15, 20, 0.06)",
        focus: "0 0 0 3px rgba(15, 118, 110, 0.25)",
        "focus-error": "0 0 0 3px rgba(220, 38, 38, 0.20)",
        card: "0 1px 2px rgba(10, 15, 20, 0.04), 0 0 0 1px rgba(10, 15, 20, 0.06)",
        "card-hover": "0 4px 16px -4px rgba(10, 15, 20, 0.10), 0 0 0 1px rgba(10, 15, 20, 0.06)",
        elevated: "0 8px 32px -8px rgba(10, 15, 20, 0.12), 0 0 0 1px rgba(10, 15, 20, 0.04)",
        sticky: "0 -4px 24px -4px rgba(10, 15, 20, 0.10)",
      },

      /* ─── Animation ─────────────────────────────────────────────── */
      transitionDuration: {
        instant: "100ms",
        fast: "150ms",
        normal: "200ms",
        DEFAULT: "200ms",
        slow: "300ms",
        slower: "450ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out forwards",
        "fade-up": "fade-up 300ms ease-out forwards",
        "fade-down": "fade-down 200ms ease-out forwards",
        "scale-in": "scale-in 200ms ease-out forwards",
        shimmer: "shimmer 1.8s ease-in-out infinite",
        "slide-up": "slide-up 300ms cubic-bezier(0, 0, 0.2, 1) forwards",
      },

      /* ─── Layout ────────────────────────────────────────────────── */
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      zIndex: {
        base: "0",
        raised: "10",
        dropdown: "20",
        sticky: "30",
        overlay: "40",
        modal: "50",
        toast: "60",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #0F766E 0%, #0D9488 50%, #14B8A6 100%)",
        "gradient-brand-subtle": "linear-gradient(180deg, #F0FDFA 0%, #FAFBFC 100%)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(20, 184, 166, 0.12) 0%, transparent 70%)",
        "gradient-surface": "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
        "noise": "url('/textures/noise.png')",
      },
      ringWidth: {
        DEFAULT: "3px",
        focus: "3px",
      },
      ringOffsetWidth: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
