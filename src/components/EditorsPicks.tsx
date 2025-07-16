"use client";

import { useEditorsPicks } from "@/hooks/useStories";
import { TopStoryItem } from "@/types/story";

export default function EditorsPicks() {
  const { data, isLoading, isError } = useEditorsPicks();

  if (isLoading) {
    return (
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-96 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-80">
              <div className="bg-gray-200 rounded-xl aspect-[16/10] animate-pulse mb-4"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError || !data?.data?.data?.length) {
    return null;
  }

  const stories = data.data.data;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Editor's Picks</h2>
        </div>
        <p className="text-gray-600">
          Curated stories chosen by our editorial team
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
        {stories.map((item: TopStoryItem, index: number) => (
          <article
            key={item.id}
            className="flex-shrink-0 w-80 group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img
                src={item.story.banner_image}
                alt={item.story.title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Editor's Pick Badge */}
              <div className="absolute top-3 left-3">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>PICK</span>
                </div>
              </div>

              {/* Category */}
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                  {item.story.category.category_name}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.story.title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-2">
                {item.story.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-xs">
                      {item.story.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.story.author}
                  </span>
                </div>

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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
