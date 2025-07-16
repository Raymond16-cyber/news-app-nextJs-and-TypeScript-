"use client";

import { useTopStories } from "@/hooks/useTopStories";
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { TopStoryItem } from "@/types/story";
import { toggleBookmark } from "@/features/bookmark/bookmarkSlice";

export default function TopStories() {
  const { data, isLoading, isError } = useTopStories();
  const selectedCategory = useAppSelector((state) => state.category.selected);
  const bookmarkedStories = useAppSelector(
    (state) => state.bookmark.bookmarkedStories
  );
  const dispatch = useAppDispatch();

  if (isLoading)
    return (
      <div className="min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-transparent border-t-blue-400 animate-ping mx-auto"></div>
          </div>
          <p className="mt-4 text-gray-700 font-medium">
            Loading top stories...
          </p>
          <p className="text-sm text-gray-500">
            Getting the latest news for you
          </p>
        </div>
      </div>
    );

  if (isError || !data)
    return (
      <div className="min-h-[500px] flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Unable to load stories
          </h3>
          <p className="text-gray-600 mb-4">
            We&apos;re having trouble fetching the latest news.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );

  // 🔍 Extract stories from nested API response structure
  const stories = data?.data?.data || [];

  // 🔍 Filter stories by selected category
  const filteredStories = selectedCategory
    ? stories.filter(
        (item: TopStoryItem) =>
          item.story.category.category_name === selectedCategory
      )
    : stories;

  if (filteredStories.length === 0) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No stories found
          </h3>
          <p className="text-gray-500">
            No stories available for the selected category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedCategory ? `${selectedCategory} Stories` : "Top Stories"}
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest news and insights
            </p>
          </div>
          <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {filteredStories.length}{" "}
            {filteredStories.length === 1 ? "story" : "stories"}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.map((item: TopStoryItem, index: number) => (
          <article
            key={item.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src={item.story.banner_image}
                alt={item.story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                  {item.story.category.category_name}
                </span>
              </div>

              {/* Bookmark Button */}
              <button
                onClick={() => dispatch(toggleBookmark(item.story.id))}
                className={`absolute top-4 right-4 w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 ${
                  bookmarkedStories.includes(item.story.id)
                    ? "bg-red-500 text-white"
                    : "bg-white/90 text-gray-600 hover:bg-white"
                }`}
              >
                {bookmarkedStories.includes(item.story.id) ? (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {item.story.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.story.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-xs">
                      {item.story.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.story.author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {new Date(item.story.created_at).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>

                {/* Views */}
                <div className="flex items-center space-x-1 text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="text-xs">{item.story.views}</span>
                </div>
              </div>

              {/* Read More Button */}
              <button className="mt-4 w-full py-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors duration-200 font-medium text-sm">
                Read Full Story
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
