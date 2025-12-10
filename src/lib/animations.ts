export const fadeInUp = {
  opacity: 0,
  y: 50,
};

export const fadeInDown = {
  opacity: 0,
  y: -50,
};

export const fadeInLeft = {
  opacity: 0,
  x: -50,
};

export const fadeInRight = {
  opacity: 0,
  x: 50,
};

export const scaleIn = {
  opacity: 0,
  scale: 0.8,
};

export const scaleInUp = {
  opacity: 0,
  scale: 0.8,
  y: 50,
};

export const visible = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
};

export const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fastTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const hoverLift = {
  y: -12,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const viewportOptions = {
  once: false,
  amount: 0.3,
  margin: "0px 0px -50px 0px",
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
