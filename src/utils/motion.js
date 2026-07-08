// src/utils/motion.js

// export const spring = {
//   type: "spring",
//   stiffness: 400,
//   damping: 28,
// };

// export const ease = [0.22, 1, 0.36, 1];

// export const duration = {
//   fast: 0.2,
//   normal: 0.35,
//   slow: 0.6,
// };

// src/utils/motion.js

export const duration = {
  instant: 0.12,
  fast: 0.2,
  normal: 0.35,
  slow: 0.6,
  cinematic: 1.2,
};

export const ease = {
  smooth: [0.22, 1, 0.36, 1],
  standard: [0.4, 0, 0.2, 1],
};

export const spring = {
  soft: {
    type: "spring",
    stiffness: 260,
    damping: 24,
  },

  button: {
    type: "spring",
    stiffness: 420,
    damping: 26,
  },

  snappy: {
    type: "spring",
    stiffness: 520,
    damping: 30,
  },
};