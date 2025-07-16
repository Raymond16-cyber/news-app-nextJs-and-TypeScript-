"use client";

import { useCategories, Category } from "@/hooks/useCategories";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setSelectedCategory } from "@/features/category/categorySlice";

export default function CategoryNav() {
  const { data, isLoading, isError, error } = useCategories();
  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.category.selected);

  // Debug logging
  console.log("Categories - isLoading:", isLoading);
  console.log("Categories - isError:", isError);
  console.log("Categories - error:", error);
  console.log("Categories - data:", data);

  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <div className="flex space-x-3 overflow-x-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-10 w-24 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-4 py-6">
        <div className="text-center text-red-500">
          <p>Failed to load categories</p>
          <p className="text-sm mt-2">
            {error?.message || "Unknown error occurred"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // If no categories are available, show only the "All Stories" button
  if (!data || data.length === 0) {
    return (
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Browse Stories
          </h3>
          <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
            <button
              onClick={() => dispatch(setSelectedCategory(null))}
              className="flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium bg-blue-600 text-white shadow-lg shadow-blue-600/25"
            >
              All Stories
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCategoryClick = (categoryName: string) => {
    // Toggle category selection
    if (selected === categoryName) {
      dispatch(setSelectedCategory(null));
    } else {
      dispatch(setSelectedCategory(categoryName));
    }
  };

  return (
    <div className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Browse by Category
        </h3>

        <div className="flex overflow-x-auto space-x-3 scrollbar-hide">
          {/* All Categories Button */}
          <button
            onClick={() => dispatch(setSelectedCategory(null))}
            className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              !selected
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Stories
          </button>

          {/* Category Buttons */}
          {data?.map((category: Category) => (
            <button
              key={category.category_id}
              onClick={() => handleCategoryClick(category.category_name)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selected === category.category_name
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
              }`}
            >
              {category.category_name}
              {category.total_stories && (
                <span className="ml-2 text-xs opacity-75">
                  ({category.total_stories})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
