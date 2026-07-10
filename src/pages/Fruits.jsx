import { useState, useEffect } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import { fruitsections } from "../index";
import AnimatedBackground from "../components/fruits/AnimatedBackground";
import CategoryGrid from "../components/fruits/CategoryGrid";
import ProductGrid from "../components/fruits/ProductGrid";
import ProductDetail from "../components/fruits/ProductDetail";

export default function Fruits() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    //const addToCart = (product, 4) => {
    setCart((current) => [
      ...current,
      {
        ...product,
        quantity,
      },
    ]);
  };

  const isBrowsingProducts = activeCategory !== null;
  const isViewingProduct = selectedProduct !== null;

  // const goBack = () => {
  //   setSelectedProduct(null);
  //   setActiveCategory(null);
  // };

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
          </LayoutGroup>
        )}
        {cart.length > 0 && (
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
          </motion.div>
        )}
      </div>
    </div>
  );

};