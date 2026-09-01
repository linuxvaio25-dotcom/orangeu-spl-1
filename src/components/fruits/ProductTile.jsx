import { motion } from "framer-motion";

const emojiColors = {
    // "🍎": "rgba(239, 68, 68, 0.25)",
    // "🍌": "rgba(250, 204, 21, 0.25)",
    // "🍊": "rgba(249, 115, 22, 0.25)",
    // "🍇": "rgba(168, 85, 247, 0.25)",
    // "🫐": "rgba(59, 130, 246, 0.25)",
    // "🍉": "rgba(244, 63, 94, 0.25)",
    // "🍍": "rgba(234, 179, 8, 0.25)",
    "🍎": "rgba(239, 68, 68, 0.6)",
    "🍌": "rgba(250, 204, 21, 0.6)",
    "🍊": "rgba(249, 115, 22, 0.6)",
    "🍇": "rgba(168, 85, 247, 0.6)",
    "🫐": "rgba(59, 130, 246, 0.6)",
    "🍉": "rgba(244, 63, 94, 0.6)",
    "🍍": "rgba(234, 179, 8, 0.6)",
    "🍓": "rgba(234, 8, 38, 0.6)",
    "🥬": "rgba(34, 197, 94, 0.6)",
    "🥕": "rgba(249, 115, 22, 0.6)",
    "🥦": "rgba(34, 197, 94, 0.6)",
    "🥭": "rgba(230, 177, 21, 0.6)",
    "🍓🍌": "rgba(223, 58, 28, 0.6)",
    "🥝": "rgba(34, 197, 94, 0.6)",
    "🍋": "rgba(253, 224, 71, 0.6)",
    "🍒": "rgba(220, 38, 38, 0.6)",
    "🍑": "rgba(244, 139, 129, 0.6)",
    // "🥥": "rgba(150, 90, 62, 0.6)" ,
    "🥥": "rgba(87, 48, 30, 0.6)" ,
    "🍈": "rgba(254, 161, 102, 0.6)",
    "⭐": "rgba(255, 223, 0, 0.6)",
};


export default function ProductTile({
    item,
    onClick,
    index,
}) {
    const large = index % 3 === 1;

    const hoverColor = emojiColors[item.emoji] || "rgba(255, 255, 255, 0.12)";

    return (
        // <button
        <motion.button
    layoutId={`card-${item.label}`}
    onClick={onClick}
    whileHover={{
        y: -8,
        scale: 1.02,
    }}
    style={{
        "--hover-color": hoverColor,
    }}
    className={`
        product-tile
        group
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        text-left

        ${large
            ? "min-h-[340px]"
            : "min-h-[270px]"
        }
    `}
>
    {/* <motion.div
        className="absolute inset-0 rounded-[34px] pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
            opacity: 1,
            backgroundColor: hoverColor,
        }}
        transition={{
            duration: 0.25,
            ease: "easeOut",
        }}
    /> */}

    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

     <div className="p-8 h-full flex flex-col">

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

                <h2 className="text-3xl font-black text-white drop-shadow-md">
                    <motion.span layoutId={`title-${item.label}`}>
                        {item.label}
                    </motion.span>

                    <span className="block mt-2 text-base font-medium text-white/70">
                        Fresh Today
                    </span>
                </h2>

               <p className="mt-3 text-white line-clamp-3 drop-shadow-sm">
                    {item.description}
                </p>

                 <div className="mt-8 flex  items-center justify-between gap-4">

                <motion.span
                        layoutId={`price-${item.label}`}
                        // className="text-3xl font-bold text-white shrink-0"
                        className="text-3xl font-bold text-white shrink-0 drop-shadow-md"
                    >
                        ${item.price.toFixed(2)}
                    </motion.span>

                 <span
                        className="
                            shrink-0
                            whitespace-nowrap
                            rounded-full
                            bg-white/15
                            px-5
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