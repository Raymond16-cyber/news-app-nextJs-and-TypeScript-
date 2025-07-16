import CategoryNav from "@/components/CategoryNav";
import TopStories from "@/components/TopStories";
import FeaturedStories from "@/components/FeaturedStories";
import EditorsPicks from "@/components/EditorsPicks";
import SearchSection from "@/components/SearchSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <SearchSection />
        </div>
      </header>

      {/* Category Navigation */}
      <CategoryNav />

      {/* Main Content */}
      <div className="bg-white">
        {/* Featured Stories Section */}
        <FeaturedStories />

        {/* Editor's Picks Section */}
        <div className="bg-gray-50">
          <EditorsPicks />
        </div>

        {/* Top Stories Section */}
        <TopStories />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">AfriScope News</h3>
          <p className="text-gray-400 mb-4">
            Your trusted source for African and global news
          </p>
          <p className="text-gray-400 mb-4">Made as an assessment by Raymond</p>
          <p className="text-gray-400 mb-4">AfriScope is owned and managed by FORT</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
