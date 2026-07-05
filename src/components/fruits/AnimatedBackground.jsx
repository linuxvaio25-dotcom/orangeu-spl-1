const AnimatedBackground = ({ category }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-200/40 via-white/10 to-orange-400/30"
    >
      {category ? <div className="absolute inset-0 bg-black/10" /> : null}
    </div>
  );
};

export default AnimatedBackground;
