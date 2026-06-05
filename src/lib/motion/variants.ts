import type { Variants, Transition } from "framer-motion";
import { ANIMATION } from "@/constants/app";

/** Linear / Stripe-style easing */
export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;

export const defaultTransition: Transition = {
  duration: ANIMATION.duration.normal,
  ease: easeOut,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION.duration.normal, ease: easeOut },
  },
};

export const fadeInBlur: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: ANIMATION.duration.slower, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.stagger,
      delayChildren: 0.08,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
};

/** Subtle card hover — used with whileHover */
export const hoverLift = {
  y: -3,
  transition: { duration: ANIMATION.duration.fast, ease: easeOut },
};

export const hoverScale = {
  scale: 1.01,
  transition: { duration: ANIMATION.duration.fast, ease: easeOut },
};

/** Page enter — Vercel-style subtle fade + slide */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: ANIMATION.duration.fast, ease: easeInOut },
  },
};

/** Testimonial crossfade */
export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 20 : -20,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -20 : 20,
    transition: { duration: ANIMATION.duration.normal, ease: easeInOut },
  }),
};

export const slideUpDrawer: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
  exit: {
    y: "100%",
    transition: { duration: ANIMATION.duration.normal, ease: easeInOut },
  },
};

export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -64px 0px",
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
