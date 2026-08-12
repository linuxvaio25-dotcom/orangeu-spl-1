import { motion } from "framer-motion";

export default function ProductTile({
    item,
    onClick,
    index,
}) {
    const large = index % 3 === 1;

    return (
        // <button
        <motion.button
            layoutId={`card-${item.label}`}
            // transition={{
            //     layout: spring.card,
            // }}
            onClick={onClick}
            className={`
        group
        relative
        overflow-hidden

        rounded-[34px]

        border
        border-white/20

        bg-white/10
        backdrop-blur-xl

        text-left

        transition-colors

        hover:-translate-y-2
        hover:scale-[1.02]

        ${large
                    ? "min-h-[340px]"
                    : "min-h-[270px]"
                }
      `}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            <div className="p-8 h-full flex flex-col">

                {/* <motion.div
                    layoutId={`emoji-${item.label}`}
                    className="w-28
        h-28
        flex
        items-center
        justify-center
        text-7xl
        shrink-0"
                > */}
                {/* <motion.div
                    layoutId={`emoji-${item.label}`}
                    className="emoji-wrapper"
                    transition={{
                        layout: {
                            type: "spring",
                            stiffness: 500,
                            damping: 40,
                        },
                    }}
                > */}
                {/* <motion.div className="emoji-wrapper">
                    <div className="group-hover:scale-110 transition-transform">
                    <div className="emoji-glyph">
                        {item.emoji}
                    </div>
                    </div>
                </motion.div> */}
                {/* <motion.div
                    layoutId={`emoji-${item.label}`}
                    className="emoji-wrapper"
                >
                    <div className="emoji-glyph">
                        {item.emoji}
                    </div>
                </motion.div> */}

                {/* // Prevent emoji glyph stretching during shared layout transition.
// Text-based emoji don't interpolate size cleanly, so animate position only. */}
                <div className="emoji-wrapper">
                    <motion.div
                        layoutId={`emoji-${item.label}`}
                        layout="position"
                    >
                        <div className="emoji-glyph">
                            {item.emoji}
                        </div>
                    </motion.div>
                </div>

                <div className="flex-grow" />

                {/* <motion.h2
                    layoutId={`title-${item.label}`}
                    className="text-3xl font-black text-white"
                >
                    {item.label}

                    <span className="inline-block mt-2 rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-100">
                        Fresh Today
                    </span>
                </motion.h2> */}

                <h2 className="text-3xl font-black text-white">
                    <motion.span layoutId={`title-${item.label}`}>
                        {item.label}
                    </motion.span>

                    {/* <span className="inline-block mt-2 rounded-full ...">
                        Fresh Today
                    </span> */}
                    <span className="block mt-2 text-base font-medium text-white/70">
                        Fresh Today
                    </span>
                </h2>

                <p className="mt-3 text-white/70 line-clamp-3">
                    {item.description}
                </p>

                {/* <div className="mt-8 flex items-center justify-between"> */}
                <div className="mt-8 flex items-center justify-between gap-4">

                    {/* <span className="text-3xl font-bold text-white">
                        ${item.price.toFixed(2)}
                    </span> */}

                    {/* <motion.span
                        layoutId={`price-${item.label}`}
                        className="text-3xl font-bold text-white"
                    > */}
                    <motion.span
                        layoutId={`price-${item.label}`}
                        className="text-3xl font-bold text-white shrink-0"
                    >
                        ${item.price.toFixed(2)}
                    </motion.span>

                    {/* <span
                        className="
              rounded-full
              bg-white/15
              px-5
              py-2

              transition

              group-hover:bg-white/30
            "
                    > */}
                    <span
                        className="
                            shrink-0
                            rounded-full
                            bg-white/15
                            px-4
                            py-2
                            text-sm
                            transition
                            group-hover:bg-white/30
                        "
                    >
                        View
                    </span>

                </div>

            </div>

            {/* </button> */}
        </motion.button >
    );
}