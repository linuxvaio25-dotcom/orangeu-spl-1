import { useState } from "react";
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
    setCart((current) => [
      ...current,
      {
        ...product,
        quantity,
      },
    ]);
  };

  const goBack = () => {
    setSelectedProduct(null);
    setActiveCategory(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden fruit-bg">

      <AnimatedBackground category={activeCategory?.title} />

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
//           <div
//   className={`product-grid-wrapper ${
//     selectedProduct ? "product-grid-blurred" : ""
//   }`}
// >
<>
            <ProductGrid
              category={activeCategory}
              onBack={() => setActiveCategory(null)}
              onSelectProduct={setSelectedProduct}
            // category={activeCategory}
            // onSelectProduct={setSelectedProduct}
            // selectedProduct={selectedProduct}
            // onBack={goBack}
            />

            {/* )} */}
            

            {selectedProduct && (

              <ProductDetail
                product={selectedProduct}
                category={activeCategory}
                onBack={() => setSelectedProduct(null)}
                //addToCart={addToCart}
                // onAddToCart={(item) => {
                //   setCart([...cart, item]);
                // }}
                onAddToCart={(item) => setCart([...cart, item])}
              />

            )}
          {/* </div> */}
          </>
        )}

        {cart.length > 0 && (

          <div className="fixed right-8 top-8 z-50 rounded-full bg-white/80 backdrop-blur-xl px-5 py-3 shadow-xl">

            🛒 {cart.length}

          </div>

        )}

      </div>
      );
    </div>
  )
};