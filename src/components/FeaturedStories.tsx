"use client";

import { useFeaturedStories } from "@/hooks/useStories";
import { TopStoryItem } from "@/types/story";

export default function FeaturedStories() {
  const { data, isLoading, isError } = useFeaturedStories();

  if (isLoading) {
    return (
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-xl aspect-[16/9] animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  if (isError || !data?.data?.data?.length) {
    return null;
  }

  const stories = data.data.data.slice(0, 4); // Take first 4 for featured display

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Featured Stories
        </h2>
        <p className="text-gray-600">
          Hand-picked stories you shouldn&apos;t miss
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {stories.map((item: TopStoryItem, index: number) => (
          <article
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
              index === 0 ? "lg:row-span-2" : ""
            }`}
            style={{ minHeight: index === 0 ? "500px" : "240px" }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={item.story.banner_image}
                alt={item.story.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
                  {item.story.category.category_name}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-bold mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors ${
                  index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                }`}
              >
                {item.story.title}
              </h3>

              {/* Description - only show for main featured */}
              {index === 0 && (
                <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                  {item.story.description}
                </p>
              )}

              {/* Author and Date */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {item.story.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-200">{item.story.author}</span>
                </div>
                <span className="text-gray-300 text-xs">
                  {new Date(item.story.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
