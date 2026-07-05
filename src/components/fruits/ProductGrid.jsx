// const ProductGrid = ({ category, onBack, onSelect }) => {
//   return (
//     <div className="rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-xl backdrop-blur">
//       <button
//         type="button"
//         onClick={onBack}
//         className="mb-6 rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/20"
//       >
//         ← Back
//       </button>
//       <h2 className="text-3xl font-semibold">{category?.title || 'Products'}</h2>
//       <p className="mt-3 text-white/80">Product listings will appear here soon.</p>
//       <button
//         type="button"
//         onClick={() => onSelect?.({ title: 'Sample Product' })}
//         className="mt-6 rounded-full bg-white px-5 py-2 font-semibold text-orange-600"
//       >
//         Preview product
//       </button>
//     </div>
//   );
// };

// export default ProductGrid;

import ProductTile from "./ProductTile";

export default function ProductGrid({
  category,
  onBack,
  onSelectProduct,
}) {
  return (
    <div
      className="
        animate-fadeIn
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-12">

        <button
          onClick={onBack}
          className="
            rounded-full
            bg-white/10
            backdrop-blur-xl
            px-5
            py-3
            text-white
            transition
            hover:bg-white/20
          "
        >
          ← Market
        </button>

        <div className="text-right">

          <div className="text-6xl">

            {category.emoji}

          </div>

          <h1 className="text-5xl font-black text-white">

            {category.title}

          </h1>

        </div>

      </div>

      <p className="mb-12 max-w-3xl text-xl text-white/80">
        {category.description}
      </p>

      <div
        className="
          grid
          gap-7
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {category.items.map((item, index) => (
          <ProductTile
            key={item.label}
            // item={item}
            // index={index}
            // onClick={() => onSelect(item)}
            item={item}
            index={index}
            onClick={() => onSelectProduct(item)}
          />
        ))}
      </div>
    </div>
  );
}