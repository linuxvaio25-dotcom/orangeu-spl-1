import { useState } from "react";

export default function CategoryCard({ section, onClick, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        p-8
        text-left
        transition-all
        duration-500
        group

        backdrop-blur-xl
        bg-white/10

        border
        border-white/20

        shadow-2xl

        hover:scale-[1.03]
        hover:-translate-y-3

        active:scale-95
      `}
      style={{
        animation: `fadeUp .7s ease ${index * 120}ms forwards`,
        opacity: 0,
      }}
    >
      {/* animated gradient */}
      <div
        className={`
          absolute
          inset-0

          bg-gradient-to-br

          ${section.color}

          opacity-20

          transition-opacity

          duration-500

          ${hovered ? "opacity-40" : ""}
        `}
      />

      {/* moving glow */}
      <div
        className="
          absolute
          -left-32
          top-0

          h-full
          w-24

          rotate-12

          bg-white/20

          blur-xl

          transition-all
          duration-1000

          group-hover:left-[120%]
        "
      />

      {/* floating emoji */}
      {/* <div
        className={`
          absolute
          right-8
          top-8

          text-7xl

          transition-transform

          duration-500

          ${
            hovered
              ? "-translate-y-2 rotate-6 scale-110"
              : "translate-y-0"
          }
        `}
      >
        {section.emoji}
      </div> */}
<div
  className={`
    absolute
    right-8
    top-8
    text-7xl
    transition-transform
    duration-500
  `}
  style={{
    animation: "floating 4s ease-in-out infinite",
  }}
>
  {section.emoji}
</div>


      {/* content */}

      <div className="relative z-10 h-full flex flex-col">

        <div>

          <h2 className="text-4xl font-black text-white drop-shadow">

            {section.title}

          </h2>

          <p className="mt-5 text-white/80 leading-relaxed">

            {section.description}

          </p>

        </div>

        <div className="flex-grow" />

        <div className="flex items-center justify-between">

          <span className="text-white/70">

            {section.items.length} selections

          </span>

          <span
            className="
              text-xl
              font-semibold
              text-white

              transition-transform

              group-hover:translate-x-2
            "
          >
            Explore →
          </span>

        </div>

      </div>

      {/* soft glass border */}

      <div
        className="
          pointer-events-none

          absolute

          inset-0

          rounded-[36px]

          ring-1

          ring-white/20
        "
      />

    </button>
  );
}