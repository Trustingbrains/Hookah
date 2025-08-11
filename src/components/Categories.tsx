import React from "react";

const categories = [
  { id: "all", name: "All", icon: "🏠" },
  { id: "hookah", name: "Hookahs", icon: "🔥" },
  { id: "flavour", name: "Flavors", icon: "🍃" },
  { id: "accessories", name: "Accessories", icon: "⚡" },
  { id: "coal", name: "Charcoal", icon: "🔥" }
];

interface CategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className="bg-white px-4 py-4 shadow-sm">
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex flex-col items-center space-y-2 min-w-0 ${
                isSelected ? "text-purple-600" : "text-gray-600"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${
                  isSelected
                    ? "bg-purple-100 border-2 border-purple-600"
                    : "bg-gray-100"
                }`}
              >
                {category.icon}
              </div>
              <span className="text-xs font-medium whitespace-nowrap">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
