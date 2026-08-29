import React from "react";
import giftsBackground from "./assets/giftsBG_8_27_26-2.png";

/**
 * components/ui.jsx
 * ---------------------------------------------------------
 * Shared design tokens + small presentational primitives used
 * by both BentoGrid.jsx and FriendsPage.jsx (the fruit picker
 * modal and stamp confirmation live directly in FriendsPage).
 */

export const TOKENS = {
  // bg: "#EDE3CB",
  // bg: "#c7824a",
  bg: "#c7824a",
  ink: "#20301D",
  card: "#FBF7EC",
  cardLine: "#D9CBA8",
  stamp: "#B23A2E",
  leaf: "#3B5B36",
};

export function Avatar({ initials, status, size = 44 }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className="flex h-full w-full items-center justify-center rounded-full font-semibold"
        style={{
          background: TOKENS.leaf,
          color: TOKENS.card,
          // fontFamily: "'Fraunces', serif",
          fontSize: size * 0.36,
          border: `2px solid ${TOKENS.ink}`,
        }}
      >
        {initials}
      </div>
      {status && (
        <span
          className="absolute bottom-0 right-0 h-3 w-3 rounded-full"
          style={{
            background: status === "online" ? "#4C7A3D" : "#A79A7A",
            border: `2px solid ${TOKENS.card}`,
          }}
        />
      )}
    </div>
  );
}

export function Eyebrow({ children }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.18em]"
      // style={{ fontFamily: "'JetBrains Mono', monospace", color: TOKENS.leaf, opacity: 0.8 }}
      style={{
        color: TOKENS.leaf,
        opacity: 0.8
      }}
    >
      {children}
    </p>
  );
}

export function RelationTag({ relation }) {
  return (
    <span
      className="rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide"
      style={{
        background: relation === "family" ? "#3B5B3622" : "#B7901722",
        color: TOKENS.leaf,
      }}
    >
      {relation}
    </span>
  );
}

export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-[22px] p-5 ${className}`}
      style={{
        background: TOKENS.card,
        border: `1px solid ${TOKENS.cardLine}`,
        boxShadow: "0 1px 0 rgba(32,48,29,0.04)",
      }}
    >
      {children}
    </div>
  );
}

export function GiftsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0"
        style={{
          // background: TOKENS.bg,
          backgroundImage: `url(${giftsBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(3px)",
          transform: "scale(1.12)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(251, 247, 236, 0.18)",
        }}
      />
    </div>
  );
}

export function Stamp({ emoji, color, size = 56, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle at 35% 30%, ${color}, ${color}CC)`,
          border: "2px dashed rgba(251,247,236,0.7)",
          outline: `1px solid ${TOKENS.ink}22`,
          boxShadow: "0 3px 6px rgba(32,48,29,0.25)",
          fontSize: size * 0.45,
        }}
      >
        {emoji}
      </div>
      {label && (
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: TOKENS.ink, opacity: 0.7 }}
        >
          {label}
        </span>
      )}
    </div>
  );
}