// ```jsx
import React from "react";
import { motion } from "framer-motion";

export default function FruitTransitionOverlay({
  show,
  transitionPhase,
  transitionOrigin,
}) {
  if (!show) return null;

  const isExpanding = transitionPhase === "expand";

  const gradientCenter = `${transitionOrigin.x}px ${transitionOrigin.y}px`;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      style={{
        background: "transparent",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at ${gradientCenter},
              #F7F9D8 0%,
              #EAF4BE 18%,
              #DDEFAE 42%,
              #C8DF91 68%,
              #B6CF7B 100%
            )
          `,
        }}
        initial={{
          clipPath: `circle(0px at ${gradientCenter})`,
        }}
        animate={{
          clipPath: isExpanding
            ? `circle(150vmax at ${gradientCenter})`
            : `circle(0px at ${gradientCenter})`,
        }}
        transition={{
          duration: 0.65,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
    </div>
  );
}
// ```



// commented out on 8-31-26 because came up with a better version of the transition overlay.
// ```jsx
// import React from "react";
// import { motion } from "framer-motion";

// export default function FruitTransitionOverlay({
//   show,
//   transitionPhase,
//   transitionOrigin,
// }) {
//   if (!show) return null;

//   const isExpanding = transitionPhase === "expand";

//   return (
//     <div
//       className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
//       style={{
//         background: "transparent",
//       }}
//     >
//       <motion.div
//         className="absolute inset-0"
//         style={{
//           // background: "#dfeecb",
//           // background: "#DDF2B8",
//           background:
//             "radial-gradient(circle at 50% 50%, #F2F7C7 0%, #DDEFAE 48%, #BFD987 100%)",
//         }}
//         initial={{
//           clipPath: `circle(0px at ${transitionOrigin.x}px ${transitionOrigin.y}px)`,
//         }}
//         animate={{
//           clipPath: isExpanding
//             ? `circle(150vmax at ${transitionOrigin.x}px ${transitionOrigin.y}px)`
//             : `circle(0px at ${transitionOrigin.x}px ${transitionOrigin.y}px)`,
//         }}
//         transition={{
//           duration: 0.65,
//           ease: [0.76, 0, 0.24, 1],
//         }}
//       />
//     </div>
//   );
// }
// ```



// This compoent was originally supposed to handle the transition overlay for the Fruit component, but did not work the way I wanted it to. 8-31-26
// ```jsx
// import React from "react";
// import { motion } from "framer-motion";

// export default function FruitTransitionOverlay({
//   show,
//   transitionPhase,
//   transitionOrigin,
// }) {
//   if (!show) return null;

//   const isExpanding = transitionPhase === "expand";
//   const isContracting = transitionPhase === "contract";

//   return (
//     <div
//       className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
//       style={{
//         background: "transparent",
//       }}
//     >
//       <motion.div
//         className="absolute rounded-full"
//         style={{
//           left: transitionOrigin.x,
//           top: transitionOrigin.y,
//           transform: "translate(-50%, -50%)",
//           background: "#dfeecb",
//           boxShadow: "0 0 0 9999px #dfeecb",
//         }}
//         initial={{
//           width: 72,
//           height: 72,
//           opacity: 1,
//         }}
//         animate={
//           isExpanding
//             ? {
//                 width: "260vmax",
//                 height: "260vmax",
//                 opacity: 1,
//               }
//             : isContracting
//               ? {
//                   width: 72,
//                   height: 72,
//                   opacity: 1,
//                 }
//               : {
//                   width: "260vmax",
//                   height: "260vmax",
//                   opacity: 1,
//                 }
//         }
//         transition={{
//           duration: isExpanding ? 0.65 : 0.65,
//           ease: [0.76, 0, 0.24, 1],
//         }}
//       />
//     </div>
//   );
// }
// ```



// import React from 'react';
// import { AnimatePresence, motion } from 'framer-motion';

// export default function FruitTransitionOverlay({
//   show,
//   transitionPhase,
//   transitionOrigin,
// }) {
//the above was commented out on 8-31-26 because it was causing a bug where the overlay would not disappear after the transition. The code was moved to App.jsx and the overlay is now rendered there instead of in this component.


// Original center-screen transition (kept for reference):
// <AnimatePresence>
//   {show && (
//     <motion.div
//       className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.35 } }}
//     >
//       <motion.div
//         className="absolute rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//         initial={{ width: 110, height: 110, opacity: 0, scale: 0.2 }}
//         animate={{ width: '200vmax', height: '200vmax', opacity: 1, scale: 1 }}
//         exit={{ width: 110, height: 110, opacity: 0, scale: 1.5 }}
//         transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//       />
//
//       <motion.h2
//         initial={{ scale: 0.4, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 1.8, opacity: 0 }}
//         transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//         className="relative z-10 text-5xl font-semibold tracking-tight text-[#1f1c1a]"
//       >
//         Fruits
//       </motion.h2>
//     </motion.div>
//   )}
// </AnimatePresence>

// More dramatic alternative (kept for comparison):
// <AnimatePresence>
//   {show && (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//         style={{ left: transitionOrigin.x, top: transitionOrigin.y }}
//         initial={{ width: 60, height: 60, opacity: 0, scale: 0.05 }}
//         animate={{ width: '320vmax', height: '320vmax', opacity: 1, scale: 1 }}
//         exit={{ width: 60, height: 60, opacity: 0, scale: 2.2 }}
//         transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
//       />
//
//       <motion.h2
//         className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold tracking-tight text-[#1f1c1a]"
//         initial={{ scale: 0.2, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 2.4, opacity: 0 }}
//         transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
//       >
//         Fruits
//       </motion.h2>
//     </motion.div>
//   )}
// </AnimatePresence>

// Variation: Higher burst intensity (300vmax, faster zoom-out):
// <AnimatePresence>
//   {show && (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//     >
//       <motion.div
//         className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//         style={{ left: transitionOrigin.x, top: transitionOrigin.y }}
//         initial={{ width: 72, height: 72, opacity: 0, scale: 0.1 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { width: '300vmax', height: '300vmax', opacity: 1, scale: 1 }
//             : { width: 72, height: 72, opacity: 0, scale: 2.2 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.48 : 0.28,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       />
//       <motion.h2
//         className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold tracking-tight text-[#1f1c1a]"
//         initial={{ scale: 0.3, opacity: 0 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { scale: 1, opacity: 1 }
//             : { scale: 2.1, opacity: 0 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.42 : 0.22,
//           ease: [0.22, 1, 0.36, 1],
//           delay: transitionPhase === 'expand' ? 0.05 : 0,
//         }}
//       >
//         Fruits
//       </motion.h2>
//     </motion.div>
//   )}
// </AnimatePresence>

// Variation: Subtle burst intensity (220vmax, gentler zoom-out):
// <AnimatePresence>
//   {show && (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//     >
//       <motion.div
//         className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//         style={{ left: transitionOrigin.x, top: transitionOrigin.y }}
//         initial={{ width: 72, height: 72, opacity: 0, scale: 0.1 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { width: '220vmax', height: '220vmax', opacity: 1, scale: 1 }
//             : { width: 72, height: 72, opacity: 0, scale: 1.5 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.62 : 0.42,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       />
//       <motion.h2
//         className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold tracking-tight text-[#1f1c1a]"
//         initial={{ scale: 0.3, opacity: 0 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { scale: 1, opacity: 1 }
//             : { scale: 1.4, opacity: 0 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.52 : 0.32,
//           ease: [0.22, 1, 0.36, 1],
//           delay: transitionPhase === 'expand' ? 0.05 : 0,
//         }}
//       >
//         Fruits
//       </motion.h2>
//     </motion.div>
//   )}
// </AnimatePresence>

// Variation: Rapid burst with high zoom-out force (280vmax, scale 2.5):
// <AnimatePresence>
//   {show && (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//     >
//       <motion.div
//         className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//         style={{ left: transitionOrigin.x, top: transitionOrigin.y }}
//         initial={{ width: 72, height: 72, opacity: 0, scale: 0.1 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { width: '280vmax', height: '280vmax', opacity: 1, scale: 1 }
//             : { width: 72, height: 72, opacity: 0, scale: 2.5 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.42 : 0.3,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       />
//       <motion.h2
//         className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold tracking-tight text-[#1f1c1a]"
//         initial={{ scale: 0.3, opacity: 0 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { scale: 1, opacity: 1 }
//             : { scale: 2.4, opacity: 0 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.38 : 0.24,
//           ease: [0.22, 1, 0.36, 1],
//           delay: transitionPhase === 'expand' ? 0.05 : 0,
//         }}
//       >
//         Fruits
//       </motion.h2>
//     </motion.div>
//   )}
// </AnimatePresence>

// Previous version with "Fruits" title (kept for reference):
// <AnimatePresence>
//   {show && (
//     <motion.div
//       className="fixed inset-0 z-50 overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//     >
//       <motion.div
//         className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//         style={{ left: transitionOrigin.x, top: transitionOrigin.y }}
//         initial={{ width: 72, height: 72, opacity: 0, scale: 0.1 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { width: '260vmax', height: '260vmax', opacity: 1, scale: 1 }
//             : { width: 72, height: 72, opacity: 0, scale: 1.8 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.55 : 0.35,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       />
//
//       <motion.h2
//         className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-semibold tracking-tight text-[#1f1c1a]"
//         initial={{ scale: 0.3, opacity: 0 }}
//         animate={
//           transitionPhase === 'expand'
//             ? { scale: 1, opacity: 1 }
//             : { scale: 1.8, opacity: 0 }
//         }
//         transition={{
//           duration: transitionPhase === 'expand' ? 0.45 : 0.25,
//           ease: [0.22, 1, 0.36, 1],
//           delay: transitionPhase === 'expand' ? 0.05 : 0,
//         }}
//       >
//         Fruits
//       </motion.h2>
//     </motion.div>
//   )}
// </AnimatePresence>

// Current active version (circular expand/contract with origin from click, no title):
// Burst: 260vmax | Zoom-out: scale 1.8, 0.35s

// the below was commented on 8-31-26
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 z-50 overflow-hidden bg-[#f5efe8]/80 backdrop-blur-[2px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfeecb] shadow-[0_0_0_9999px_rgba(245,239,232,0.7)]"
//             style={{ left: transitionOrigin.x, top: transitionOrigin.y }}
//             initial={{ width: 72, height: 72, opacity: 0, scale: 0.1 }}
//             animate={
//               transitionPhase === 'expand'
//                 ? { width: '260vmax', height: '260vmax', opacity: 1, scale: 1 }
//                 : { width: 72, height: 72, opacity: 0, scale: 1.8 }
//             }
//             transition={{
//               duration: transitionPhase === 'expand' ? 0.55 : 0.35,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
