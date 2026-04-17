export const motionTokens = {
  easing: [0.22, 1, 0.36, 1] as const,
  fast: 0.35,
  medium: 0.55,
  slow: 0.8,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20, scale: 0.995 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -12, scale: 0.995 },
};
