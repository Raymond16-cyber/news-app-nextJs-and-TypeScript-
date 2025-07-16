import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarkState {
  bookmarkedStories: number[];
}

// Load bookmarks from localStorage
const loadBookmarksFromStorage = (): number[] => {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('afriscope-bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }
  return [];
};

// Save bookmarks to localStorage
const saveBookmarksToStorage = (bookmarks: number[]) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('afriscope-bookmarks', JSON.stringify(bookmarks));
    } catch {
      // Handle localStorage errors silently
    }
  }
};

const initialState: BookmarkState = {
  bookmarkedStories: loadBookmarksFromStorage(),
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<number>) => {
      const storyId = action.payload;
      const isBookmarked = state.bookmarkedStories.includes(storyId);
      
      if (isBookmarked) {
        state.bookmarkedStories = state.bookmarkedStories.filter(id => id !== storyId);
      } else {
        state.bookmarkedStories.push(storyId);
      }
      
      // Save to localStorage
      saveBookmarksToStorage(state.bookmarkedStories);
    },
    clearAllBookmarks: (state) => {
      state.bookmarkedStories = [];
      saveBookmarksToStorage([]);
    },
  },
});

export const { toggleBookmark, clearAllBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
