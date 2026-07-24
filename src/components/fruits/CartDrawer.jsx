import { motion } from "framer-motion";

export default function CartDrawer({
    cart,
    onClose,
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
                className="
          fixed
          right-0
          top-0
          z-50
          h-screen
          w-[420px]
          bg-white/20
          backdrop-blur-2xl
          border-l
          border-white/20
          shadow-2xl
          p-8
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

                {/* <p className="mt-4 text-white/80">
          {cart.length} products
        </p> */}

                <div className="mt-8 space-y-4">
                {/* <div className="mt-8 space-y-4 text-white">
    {JSON.stringify(cart)} */}
                    {cart.map((item) => (
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
        p-4
      "
                        >
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="text-4xl">
                                        {item.emoji}
                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-white">
                                            {item.label}
                                        </h3>

                                        <p className="text-sm text-white/70">
                                            ${item.price}
                                        </p>

                                    </div>

                                </div>

                                <div className="text-white font-semibold">
                                    × {item.quantity}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.aside>
        </>
    );
}