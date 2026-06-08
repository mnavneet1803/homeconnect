import type { Config } from "tailwindcss";

/**
 * Edmonton Home Connect — Premium Design System
 * Tailwind v3+ configuration
 *
 * Aesthetic: Apple × Stripe × Canadian healthcare trust
 * Goal: calm, credible, conversion-focused for Edmonton homeowners
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      /* ─── Color Palette ─────────────────────────────────────────── */
      colors: {
        ink: {
          DEFAULT: "#1C1917",
          950: "#0C0A09",
          900: "#1C1917",
          800: "#292524",
          700: "#44403C",
          600: "#57534E",
          500: "#78716C",
          400: "#A8A29E",
          300: "#D6D3D1",
          200: "#E7E5E4",
          100: "#F5F5F4",
          50: "#FAFAF9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          0: "#FFFFFF",
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#ECEAE8",
          elevated: "#FFFFFF",
          overlay: "rgba(12, 10, 9, 0.4)",
        },
        brand: {
          DEFAULT: "#0D6B64",
          950: "#042F2E",
          900: "#134E4A",
          800: "#115E59",
          700: "#0D6B64",
          600: "#0F766E",
          500: "#14B8A6",
          400: "#2DD4BF",
          300: "#5EEAD4",
          200: "#99F6E4",
          100: "#CCFBF1",
          50: "#F0FDFA",
        },
        accent: {
          DEFAULT: "#0D6B64",
          700: "#0F766E",
          600: "#0D9488",
          500: "#14B8A6",
          100: "#CCFBF1",
          50: "#F0FDFA",
        },
        success: {
          DEFAULT: "#047857",
          700: "#065F46",
          600: "#047857",
          500: "#059669",
          100: "#D1FAE5",
          50: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#B45309",
          700: "#92400E",
          600: "#B45309",
          500: "#D97706",
          100: "#FEF3C7",
          50: "#FFFBEB",
        },
        error: {
          DEFAULT: "#B91C1C",
          700: "#991B1B",
          600: "#B91C1C",
          500: "#DC2626",
          100: "#FEE2E2",
          50: "#FEF2F2",
        },
        border: {
          DEFAULT: "#E7E5E4",
          subtle: "#ECEAE8",
          strong: "#D6D3D1",
          focus: "#0D6B64",
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
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "500" }],
        "display-xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "500" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "500" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.015em", fontWeight: "500" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "500" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.45", letterSpacing: "-0.005em", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.65", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "label-md": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "label-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "caption": ["0.75rem", { lineHeight: "1.45", letterSpacing: "0.005em", fontWeight: "400" }],
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
        section: "5.5rem",
        "section-lg": "8rem",
        gutter: "1.25rem",
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
        xs: "0.375rem",
        sm: "0.5rem",
        DEFAULT: "0.625rem",
        md: "0.75rem",
        lg: "0.875rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        pill: "9999px",
      },

      /* ─── Shadows (soft, layered depth) ─────────────────────────── */
      boxShadow: {
        none: "none",
        xs: "0 1px 2px 0 rgba(12, 10, 9, 0.03)",
        sm: "0 1px 3px 0 rgba(12, 10, 9, 0.04), 0 1px 2px -1px rgba(12, 10, 9, 0.03)",
        DEFAULT: "0 2px 8px -2px rgba(12, 10, 9, 0.06), 0 1px 3px -1px rgba(12, 10, 9, 0.03)",
        md: "0 4px 16px -4px rgba(12, 10, 9, 0.07), 0 2px 6px -2px rgba(12, 10, 9, 0.04)",
        lg: "0 8px 32px -8px rgba(12, 10, 9, 0.08), 0 4px 12px -4px rgba(12, 10, 9, 0.04)",
        xl: "0 16px 48px -12px rgba(12, 10, 9, 0.1), 0 8px 20px -8px rgba(12, 10, 9, 0.05)",
        inner: "inset 0 1px 2px 0 rgba(12, 10, 9, 0.04)",
        focus: "0 0 0 3px rgba(13, 107, 100, 0.2)",
        "focus-error": "0 0 0 3px rgba(185, 28, 28, 0.15)",
        card: "0 1px 2px rgba(12, 10, 9, 0.03), 0 0 0 1px rgba(12, 10, 9, 0.05)",
        "card-hover": "0 4px 20px -4px rgba(12, 10, 9, 0.08), 0 0 0 1px rgba(12, 10, 9, 0.05)",
        elevated: "0 8px 32px -8px rgba(12, 10, 9, 0.08), 0 0 0 1px rgba(12, 10, 9, 0.04)",
        sticky: "0 -4px 24px -4px rgba(12, 10, 9, 0.06)",
      },

      /* ─── Animation ─────────────────────────────────────────────── */
      transitionDuration: {
        instant: "100ms",
        fast: "150ms",
        normal: "250ms",
        DEFAULT: "250ms",
        slow: "350ms",
        slower: "500ms",
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
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
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
        "fade-in": "fade-in 300ms ease-out forwards",
        "fade-up": "fade-up 400ms ease-out forwards",
        "fade-down": "fade-down 300ms ease-out forwards",
        "scale-in": "scale-in 300ms ease-out forwards",
        shimmer: "shimmer 2s ease-in-out infinite",
        "slide-up": "slide-up 350ms cubic-bezier(0, 0, 0.2, 1) forwards",
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
        "gradient-brand": "linear-gradient(135deg, #0D6B64 0%, #0F766E 100%)",
        "gradient-brand-subtle": "linear-gradient(180deg, #FAFAF9 0%, #F5F5F4 100%)",
        "gradient-hero": "linear-gradient(180deg, #FAFAF9 0%, #FFFFFF 60%)",
        "gradient-surface": "linear-gradient(180deg, #FFFFFF 0%, #FAFAF9 100%)",
        "gradient-trust": "linear-gradient(180deg, #F0FDFA 0%, #FAFAF9 100%)",
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
