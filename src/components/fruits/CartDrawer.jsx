import { motion } from "framer-motion";
import { spring } from "../../utils/motion";

// export default function CartDrawer({
//     cart,
//     onClose,
// }) {
export default function CartDrawer({
    cart,
    subtotal,
    cartItemCount,
    onClose,
    onUpdateQuantity,
    onRemove,
}) {
    console.log(cart);
    return (
        <>
            <motion.div
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            <motion.aside
                // className="
                //     fixed
                //     right-0
                //     top-0
                //     z-50
                //     h-screen
                //     w-[420px]
                //     bg-white/20
                //     backdrop-blur-2xl
                //     border-l
                //     border-white/20
                //     shadow-2xl
                //     p-8
                // "
                className="
                    fixed
                    right-0
                    top-0
                    z-50
                    h-screen
                    w-[460px]
                    bg-white/15
                    backdrop-blur-xl
                    border-l
                    border-white/20
                    shadow-2xl
                    p-8

                    flex
                    flex-col
                "
                initial={{
                    x: "100%",
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: "100%",
                }}
                transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 32,
                }}
            >
                <h2 className="text-3xl font-bold text-white">
                    Your Basket
                </h2>

                <p className="mt-2 text-sm text-white/70">
                    {cartItemCount} {cartItemCount === 1 ? "item" : "items"}
                </p>

                {/* <p className="mt-4 text-white/80">
          {cart.length} products
        </p> */}

                {/* <div className="mt-32 space-y-4"> */}
                <div
                    style={{ marginTop: "100px" }}
                    className="flex-1 space-y-6 overflow-y-auto"
                >
                    {/* <div className="mt-8 space-y-4 text-white">
    {JSON.stringify(cart)} */}
                    {cart.map((item) => (
                        //                     <motion.div
                        //                         key={item.label}
                        //                         initial={{
                        //                             opacity: 0,
                        //                             y: 16,
                        //                         }}
                        //                         animate={{
                        //                             opacity: 1,
                        //                             y: 0,
                        //                         }}
                        //                         exit={{
                        //                             opacity: 0,
                        //                             y: -16,
                        //                         }}
                        //                         className="
                        //                             rounded-2xl
                        //                             bg-white/10
                        //                             border
                        //                             border-white/15
                        //                             p-4
                        //                         "
                        //                     >
                        //                         <div className="flex items-center justify-between">

                        //                             <div className="flex items-center gap-4">

                        //                                 <div className="text-4xl">
                        //                                     {item.emoji}
                        //                                 </div>

                        //                                 <div>

                        //                                     <h3 className="font-semibold text-white">
                        //                                         {item.label}
                        //                                     </h3>

                        //                                     <p className="text-sm text-white/70">
                        //                                         ${item.price}
                        //                                     </p>

                        //                                 </div>

                        //                             </div>
                        //                             <div className="flex items-center gap-3">

                        //                                 <button
                        //                                     className="rounded-full bg-white/10 px-3 py-1 text-white"
                        //                                     onClick={() =>
                        //                                         onUpdateQuantity(
                        //                                             item.label,
                        //                                             Math.max(1, item.quantity - 1)
                        //                                         )
                        //                                     }
                        //                                 >
                        //                                     −
                        //                                 </button>

                        //                                 <span className="text-white font-semibold w-6 text-center">
                        //                                     {item.quantity}
                        //                                 </span>

                        //                                 <button
                        //                                     className="rounded-full bg-white/10 px-3 py-1 text-white"
                        //                                     onClick={() =>
                        //                                         onUpdateQuantity(
                        //                                             item.label,
                        //                                             item.quantity + 1
                        //                                         )
                        //                                     }
                        //                                 >
                        //                                     +
                        //                                 </button>



                        //                             </div>
                        //                             <motion.button
                        //                                 whileHover={{
                        //                                     scale: 1.03,
                        //                                 }}
                        //                                 whileTap={{
                        //                                     scale: 0.97,
                        //                                 }}
                        //                                 transition={spring.button}
                        //                                 onClick={() => onRemove(item.label)}
                        //                                 className="
                        //     mt-4
                        //     text-sm
                        //     text-red-300
                        //     hover:text-red-200
                        // "
                        //                             >
                        //                                 Remove
                        //                             </motion.button>
                        //                             {/* <div className="text-white font-semibold">
                        //                                 × {item.quantity}
                        //                             </div> */}

                        //                         </div>
                        //                     </motion.div>

                        <motion.div
                            key={item.label}
                            initial={{
                                opacity: 0,
                                y: 16,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -16,
                            }}
                            className="
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/15
                                p-5
                            "
                        >
                            {/* Top Row */}

                            <div className="flex items-center justify-between gap-8" style={{ paddingBottom: "1rem", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>

                                <div className="flex items-center gap-6">

                                    <div className="text-4xl leading-none">
                                        {item.emoji}
                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-white">
                                            {item.label}
                                        </h3>

                                    </div>

                                </div>

                                <p className="font-semibold text-white">
                                    ${item.price}
                                </p>

                            </div>

                            {/* Bottom Row */}

                            {/* <div className="flex flex-col items-start gap-4" style={{ marginTop: "1rem", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}> */}
                            <div
                                className="flex items-center justify-between"
                                style={{
                                    marginTop: "16px",
                                    paddingLeft: "0.5rem",
                                    paddingRight: "0.5rem",
                                }}
                            >

                                <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2">

                                    <motion.button whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={spring.button}
                                        className="px-1 text-white/80"
                                        onClick={() =>
                                            onUpdateQuantity(
                                                item.label,
                                                Math.max(1, item.quantity - 1)
                                            )
                                        }>-</motion.button>

                                    <span className="min-w-6 text-center text-white">
                                        {item.quantity}
                                    </span>

                                    <motion.button whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={spring.button}
                                        className="px-1 text-white/80"
                                        onClick={() =>
                                            onUpdateQuantity(
                                                item.label,
                                                item.quantity + 1
                                            )
                                        }>+</motion.button>

                                </div>

                                {/* <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    transition={spring.button}
                                    onClick={() => onRemove(item.label)}
                                    className="text-sm text-red-300 hover:text-red-200"
                                >
                                    Remove
                                </motion.button> */}

                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    transition={spring.button}
                                    onClick={() => onRemove(item.label)}
                                    className="
                                    text-sm
                                    font-medium
                                    text-white/60
                                    hover:text-red-300
                                    transition-colors
"
                                >
                                    Remove
                                </motion.button>

                            </div>

                        </motion.div>


                    ))}
                </div>

                <div
                    className="mt-8 border-t border-white/15 pt-6"
                >
                    <div className="flex items-center justify-between">

                        <span className="text-lg text-white/70">
                            Subtotal
                        </span>

                        <span className="text-2xl font-bold text-white">
                            ${subtotal.toFixed(2)}
                        </span>

                    </div>
                </div>

                <motion.button
                    whileHover={{
                        scale: 1.02,
                        y: -2,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    transition={spring.button}
                    className="
                        mt-6
                        w-full
                        rounded-2xl
                        bg-white
                        py-4
                        text-lg
                        font-semibold
                        text-gray-900
                        shadow-lg
                    "
                >
                    Checkout
                </motion.button>

            </motion.aside>
        </>
    );
}