import type { Variants, Transition } from "framer-motion";
import { ANIMATION } from "@/constants/app";

/** Premium easing — Stripe / Linear inspired */
export const easePremium = [0.16, 1, 0.3, 1] as const;
export const easeOut = [0.25, 0.1, 0.25, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;

export const defaultTransition: Transition = {
  duration: ANIMATION.duration.normal,
  ease: easePremium,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easePremium },
  },
};

export const fadeInUpSubtle: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easePremium },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: easePremium },
  },
};

export const fadeInBlur: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: easePremium },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easePremium },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easePremium },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.03,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easePremium },
  },
};

/** Premium card hover — subtle lift, no bounce */
export const premiumHover = {
  y: -4,
  scale: 1.008,
  transition: { duration: 0.28, ease: easePremium },
};

export const premiumHoverTap = {
  scale: 0.99,
  transition: { duration: 0.12, ease: easeInOut },
};

export const hoverLift = {
  y: -3,
  transition: { duration: 0.25, ease: easePremium },
};

export const hoverScale = {
  scale: 1.005,
  transition: { duration: 0.25, ease: easePremium },
};

/** Gentle vertical float for hero elements */
export const floatSubtle: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: easePremium },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: easeInOut },
  },
};

export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 12 : -12,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: easePremium },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -12 : 12,
    transition: { duration: 0.3, ease: easeInOut },
  }),
};

export const slideUpDrawer: Variants = {
  hidden: { y: "100%", opacity: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: easePremium },
  },
  exit: {
    y: "100%",
    opacity: 0.9,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

export const floatingCtaEnter: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easePremium },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.94,
    transition: { duration: 0.25, ease: easeInOut },
  },
};

export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -60px 0px",
} as const;

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade"
  | "fade-blur"
  | "scale"
  | "slide-left"
  | "slide-right";

export const revealVariants: Record<RevealVariant, Variants> = {
  "fade-up": fadeInUp,
  "fade-down": fadeInDown,
  fade: fadeIn,
  "fade-blur": fadeInBlur,
  scale: scaleIn,
  "slide-left": slideInLeft,
  "slide-right": slideInRight,
};
