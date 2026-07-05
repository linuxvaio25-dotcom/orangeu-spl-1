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

import React from "react";

const ProductDetail = ({
  product,
  category,
  onBack,
  onAddToCart,
}) => {
  if (!product) return null;

  return (
    <section className="product-detail">

      <button
        className="detail-back-btn"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="product-detail-hero">

        <div className="product-detail-emoji">
          {product.emoji}
        </div>

        <div className="product-detail-info">

          <h2>{product.label}</h2>

          <p className="detail-price">
            ${product.price}
          </p>

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

        <button
          className="add-basket-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Basket
        </button>

      </div>

    </section>
  );
};

export default ProductDetail;