// const ProductDetail = ({ product, category, onBack, addToCart }) => {
//   return (
//     <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-xl backdrop-blur">
//       <button
//         type="button"
//         onClick={onBack}
//         className="mb-6 rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
//       >
//         ← Back
//       </button>
//       <h2 className="text-3xl font-semibold">{product?.title || 'Product details'}</h2>
//       <p className="mt-3 text-white/80">Category: {category?.title || 'Unknown'}</p>
//       <button
//         type="button"
//         onClick={() => addToCart?.(product, 1)}
//         className="mt-6 rounded-full bg-orange-500 px-5 py-2 font-semibold text-white"
//       >
//         Add to cart
//       </button>
//     </div>
//   );
// };

// export default ProductDetail;

// import React from "react";
import React, { useState, useEffect } from "react";

// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { spring, duration, ease } from "../../utils/motion";


const ProductDetail = ({
  product,
  category,
  onBack,
  onAddToCart,
}) => {

  const [added, setAdded] = useState(false);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [added]);

  const handleAddToCart = () => {
    // onAddToCart(product);
    onAddToCart(product, quantity);
    setAdded(true);
    setQuantity(1);

    // setTimeout(() => {
    //   setAdded(false);
    // }, 800);
  };

  if (!product) return null;

  return (
    // <section className="product-detail">
    <motion.section
      layoutId={`card-${product.label}`}
      // transition={{
      //   layout: spring.card,
      // }}
      className="product-detail"
    >

      <button
        className="detail-back-btn"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="product-detail-hero">

        {/* <motion.div
          layoutId={`emoji-${product.label}`}
          className="product-detail-emoji"
        > */}
        {/* <motion.div
          layoutId={`emoji-${product.label}`}
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
          <div className="emoji-glyph">
            {product.emoji}
          </div>
        </motion.div> */}
        {/* <motion.div
          layoutId={`emoji-${product.label}`}
          className="emoji-wrapper"
        >
          <div className="emoji-glyph">
            {product.emoji}
          </div>
        </motion.div> */}

        {/* // Prevent emoji glyph stretching during shared layout transition.
// Text-based emoji don't interpolate size cleanly, so animate position only. */}
        <div className="emoji-wrapper">
          <motion.div
            layoutId={`emoji-${product.label}`}
            layout="position"
          >
            <div className="emoji-glyph">
              {product.emoji}
            </div>
          </motion.div>
        </div>

        <div className="product-detail-info">

          {/* <motion.h2
            layoutId={`title-${product.label}`}
          >
            {product.label}
          </motion.h2> */}

          <h2>
            <motion.span layoutId={`title-${product.label}`}>
              {product.label}
            </motion.span>
          </h2>

          {/* <p className="detail-price">
            ${product.price}
          </p> */}
          <motion.p
            layoutId={`price-${product.label}`}
            className="text-3xl font-bold text-white"
          >
            ${product.price}
          </motion.p>

          <p className="detail-description">
            {product.description}
          </p>

        </div>

      </div>

      <div className="detail-info-grid">

        <div className="detail-card">
          <h4>Origin</h4>
          <p>{product.origin || "Local Farm"}</p>
        </div>

        <div className="detail-card">
          <h4>Freshness</h4>
          <p>{product.freshness || "Picked Today"}</p>
        </div>

        <div className="detail-card">
          <h4>Nutrition</h4>
          <p>{product.nutrition || "Rich in Vitamins"}</p>
        </div>

      </div>

      <div className="detail-actions">

        {/* Quantity selector goes here later */}

        {/* <button
          className="add-basket-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Basket
        </button> */}

        <div className="quantity-selector">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={spring.button}
            onClick={() =>
              setQuantity((q) => Math.max(1, q - 1))
            }
          >
            −
          </motion.button>

          <motion.span
            key={quantity}
            initial={{ opacity: 0.6, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={spring.soft}
            className="quantity-value"
          >
            {quantity}
          </motion.span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={spring.button}
            onClick={() =>
              setQuantity((q) => q + 1)
            }
          >
            +
          </motion.button>
        </div>

        <motion.button
          className="add-basket-btn"
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={spring.button}
          // onClick={() => onAddToCart(product)}
          onClick={handleAddToCart}
        >
          <AnimatePresence mode="wait">
            {/* <motion.span
              key={added ? "added" : "default"}
              initial={{
                opacity: 0,
                y: 6,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -6,
              }}
              transition={{
                duration: 0.18,
              }}
            >
              {added ? "✓ Added" : "Add to Basket"}
            </motion.span> */}
            <motion.span
              key={added ? "added" : "default"}
              initial={{
                opacity: 0,
                y: 8,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.97,
              }}
              // transition={{
              //   duration: 0.28,
              //   ease: [0.22, 1, 0.36, 1], // or ease.smooth from motion.js
              // }}
              transition={{
                duration: duration.normal,
                ease: ease.smooth,
              }}
            >
              {added ? "✓ Added" : "Add to Basket"}
            </motion.span>
          </AnimatePresence>
        </motion.button>

      </div>

      {/* // </section> */}
    </motion.section >
  );
};

export default ProductDetail;