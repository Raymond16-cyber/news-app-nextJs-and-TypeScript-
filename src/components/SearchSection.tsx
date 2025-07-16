"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
    // Here you can implement the actual search logic
    // For example, you could dispatch a Redux action or call a search API
  };

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Afri<span className="text-blue-600">Scope</span> News
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Stay informed with the latest news from Africa and beyond
      </p>

      {/* Search Bar */}
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search for stories, topics, or authors..."
      />

      {/* Show search results indicator */}
      {searchQuery && (
        <div className="mt-4 text-sm text-gray-600">
          Searching for:{" "}
          <span className="font-medium">&quot;{searchQuery}&quot;</span>
        </div>
      )}
    </div>
  );
}
