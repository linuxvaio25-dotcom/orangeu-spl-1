
import React, { useState, useEffect, useRef } from "react";

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

  const detailRef = useRef(null);

  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [added]);

  useEffect(() => {
    if (!detailRef.current) return;

    // Original scroll behavior (kept commented out for easy rollback):
    // detailRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });

    detailRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // If you want a fixed offset instead of centering, use the block: "start"
    // version above and then adjust with a negative scrollBy, for example:
    // requestAnimationFrame(() => {
    //   window.scrollBy({ top: -80, behavior: "smooth" });
    // });
  }, []);

  const handleAddToCart = () => {
    // onAddToCart(product);
    onAddToCart(product, quantity);
    setAdded(true);
    setQuantity(1);

  };

  if (!product) return null;

  return (
    // <section className="product-detail">
    <motion.section
      ref={detailRef}
      layoutId={`card-${product.label}`}
      // transition={{
      //   layout: spring.card,
      // }}
      className="product-detail"
    >


      <motion.button
        className="detail-back-btn"
        onClick={onBack}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={spring.button}
      >
        ← Back
      </motion.button>

      <div className="product-detail-hero">


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