import CategoryCard from "./CategoryCard";

export default function CategoryGrid({ sections, onSelect }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        auto-rows-[300px]
      "
    >
      {sections.map((section, index) => (
        <CategoryCard
          key={section.title}
          section={section}
          index={index}
          onClick={() => onSelect(section)}
        />
      ))}
    </div>
  );
}