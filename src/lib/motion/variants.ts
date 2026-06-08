import type { Variants, Transition } from "framer-motion";
import { ANIMATION } from "@/constants/app";

/** Calm, premium easing — Apple / Stripe inspired */
export const easeOut = [0.25, 0.1, 0.25, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;

export const defaultTransition: Transition = {
  duration: ANIMATION.duration.normal,
  ease: easeOut,
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -6 },
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
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.99 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 10 },
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
      delayChildren: 0.06,
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

/** Subtle card hover */
export const hoverLift = {
  y: -2,
  transition: { duration: ANIMATION.duration.normal, ease: easeOut },
};

export const hoverScale = {
  scale: 1.005,
  transition: { duration: ANIMATION.duration.normal, ease: easeOut },
};

/** Page enter — subtle fade */
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: ANIMATION.duration.fast, ease: easeInOut },
  },
};

/** Testimonial crossfade */
export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 12 : -12,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: ANIMATION.duration.slow, ease: easeOut },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -12 : 12,
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
  amount: 0.12,
  margin: "0px 0px -48px 0px",
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
