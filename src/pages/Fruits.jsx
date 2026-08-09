import { useState, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import { spring } from "../utils/motion";

import { fruitsections } from "../index";
import AnimatedBackground from "../components/fruits/AnimatedBackground";
import CategoryGrid from "../components/fruits/CategoryGrid";
import ProductGrid from "../components/fruits/ProductGrid";
import ProductDetail from "../components/fruits/ProductDetail";
import CartDrawer from "../components/fruits/CartDrawer";

export default function Fruits({ isCartOpen, setIsCartOpen, setIsCartMenuHidden }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  // const [isCartOpen, setIsCartOpen] = useState(false);

  // const addToCart = (product, quantity) => {
  //   //const addToCart = (product, 4) => {
  //   setCart((current) => [
  //     ...current,
  //     {
  //       ...product,
  //       quantity,
  //     },
  //   ]);
  // };

  const addToCart = (product, quantity) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.label === product.label
      );

      if (existing) {
        return current.map((item) =>
          item.label === product.label
            ? {
              ...item,
              quantity: item.quantity + quantity,
            }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  const updateQuantity = (label, quantity) => {
    setCart((current) =>
      current.map((item) =>
        item.label === label
          ? {
            ...item,
            quantity,
          }
          : item
      )
    );
  };

  const removeFromCart = (label) => {
    setCart((current) =>
      current.filter((item) => item.label !== label)
    );
  };

  const isBrowsingProducts = activeCategory !== null;
  const isViewingProduct = selectedProduct !== null;

  // const goBack = () => {
  //   setSelectedProduct(null);
  //   setActiveCategory(null);
  // };

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  console.log("isCartOpen:", isCartOpen);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="relative min-h-screen overflow-hidden fruit-bg">

      <AnimatedBackground category={activeCategory} />

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-12">

        {!activeCategory && (
          <>
            <header className="mb-16 text-center">

              <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-lg">
                Fresh Produce
              </h1>

              <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
                Explore our market. Every category opens into a curated
                collection of fresh fruits, juices, smoothies, exotic finds,
                and baked goods.
              </p>

            </header>

            <CategoryGrid
              sections={fruitsections}
              onSelect={setActiveCategory}
            />
          </>
        )}

        {/* {activeCategory && !selectedProduct && ( */}

        {activeCategory && (
          <LayoutGroup>


            {/* <div
              className={`product-grid-wrapper ${selectedProduct ? "product-grid-blurred" : ""
                }`}
            >
              <ProductGrid
                category={activeCategory}
                onBack={() => setActiveCategory(null)}
                onSelectProduct={setSelectedProduct}
              />
            </div>

            <AnimatePresence mode="wait">
              {selectedProduct && (
                <ProductDetail
                  product={selectedProduct}
                  category={activeCategory}
                  onBack={() => setSelectedProduct(null)}
                  onAddToCart={addToCart}
                />
              )}
            </AnimatePresence> */}

            <div className="products-stage">

              <div
                className={`product-grid-wrapper ${selectedProduct ? "product-grid-blurred" : ""
                  }`}
              >
                <ProductGrid
                  category={activeCategory}
                  onBack={() => setActiveCategory(null)}
                  onSelectProduct={setSelectedProduct}
                />
              </div>

              <AnimatePresence mode="wait">
                {selectedProduct && (
                  <ProductDetail
                    product={selectedProduct}
                    category={activeCategory}
                    onBack={() => setSelectedProduct(null)}
                    onAddToCart={addToCart}
                  />
                )}
              </AnimatePresence>

            </div>

          </LayoutGroup>
        )}
        {/* {cart.length > 0 && (
          <motion.div
            key={cart.length}
            initial={{
              scale: 0.9,
              y: -6,
              opacity: 0.6,
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 24,
            }}
            className="fixed right-8 top-24 z-50 rounded-full bg-white/80 backdrop-blur-xl px-5 py-3 shadow-xl"
          >
            🛒 {cart.length}
            🛒 {cartItemCount}
          </motion.div>
        )} */}

        {cartItemCount > 0 && (
          <motion.button
            onClick={() => {
              setIsCartMenuHidden(true);
              setIsCartOpen(true);
            }}
            //         <motion.button
            // onClick={() => {
            //   console.log("Opening cart");
            //   setIsCartOpen(true);
            // }}

            key={cartItemCount}
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={spring.button}
            className="
              fixed
              right-8
              top-24
              z-50
              rounded-full
              bg-white/80
              backdrop-blur-xl
              px-5
              py-3
              shadow-xl
              text-lg
            "
          //     className="
          // fixed
          // top-4
          // left-4
          // z-[9999]
          // bg-red-500
          // text-white
          // p-6
          // "
          >
            🛒 {cartItemCount}
          </motion.button>
        )}

        {/* <AnimatePresence> */}
        <AnimatePresence
          onExitComplete={() => setIsCartMenuHidden(false)}
        >
          {isCartOpen && (
            // <CartDrawer
            //   onClose={() => setIsCartOpen(false)}
            //   cart={cart}
            // />
            <CartDrawer
              cart={cart}
              subtotal={subtotal}
              cartItemCount={cartItemCount}
              onClose={() => setIsCartOpen(false)}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          )}
        </AnimatePresence>

        {/* <pre className="fixed bottom-4 left-4 z-50 rounded-lg bg-black/70 p-4 text-xs text-white">
          {JSON.stringify(cart, null, 2)}
        </pre> */}
      </div>
    </div>
  );

};