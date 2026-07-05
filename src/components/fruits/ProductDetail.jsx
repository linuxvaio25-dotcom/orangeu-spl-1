const ProductDetail = ({ product, category, onBack, addToCart }) => {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-xl backdrop-blur">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
      >
        ← Back
      </button>
      <h2 className="text-3xl font-semibold">{product?.title || 'Product details'}</h2>
      <p className="mt-3 text-white/80">Category: {category?.title || 'Unknown'}</p>
      <button
        type="button"
        onClick={() => addToCart?.(product, 1)}
        className="mt-6 rounded-full bg-orange-500 px-5 py-2 font-semibold text-white"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetail;
