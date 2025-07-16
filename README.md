# AfriScope News - News Application

A modern, responsive news application built with Next.js, React Query, Redux Toolkit, and Tailwind CSS. This application fetches and displays news stories from the AGC NewsNet API with features like category filtering, bookmarking, and search functionality.

## 🚀 Features

- **Top Stories**: Display latest top stories with modern card design
- **Featured Stories**: Showcase featured articles in an attractive layout
- **Editor's Picks**: Curated stories chosen by the editorial team
- **Category Navigation**: Horizontal scrollable category navigation
- **Search Functionality**: Search stories by title, topic, or author
- **Bookmark System**: Save stories with Redux state management and localStorage persistence
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Beautiful skeleton loaders and error handling
- **Modern UI**: Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15.3.5 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Data Fetching**: TanStack React Query
- **Language**: TypeScript
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher)

You can check your versions by running:

```bash
node --version
npm --version
```

## 🔧 Installation

1. **Clone the repository** (if not already done):

   ```bash
   git clone <repository-url>
   cd afriscope-news
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Verify installation**:
   Check that all packages are installed correctly:
   ```bash
   npm list --depth=0
   ```

## 🚀 Running the Project

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Linting

To run ESLint and check for code issues:

```bash
npm run lint
```

## 📱 Usage

### Navigation

- **Home Page**: View top stories, featured articles, and editor's picks
- **Category Filter**: Click on category buttons to filter stories
- **Search**: Use the search bar to find specific stories
- **Bookmarks**: Click the bookmark icon on stories to save them

### Features

- **Responsive Design**: The app works seamlessly on all device sizes
- **Category Filtering**: Stories can be filtered by selecting categories
- **Bookmarking**: Bookmarked stories persist across browser sessions
- **Search**: Real-time search functionality (client-side filtering)

## 🌐 API Endpoints

The application uses the following AGC NewsNet API endpoints:

- **Categories**: `https://api.agcnewsnet.com/api/general/categories`
- **Top Stories**: `https://api.agcnewsnet.com/api/general/top-stories`
- **Editor's Picks**: `https://api.agcnewsnet.com/api/general/editorpicks?page=1&per_page=15`
- **Featured Stories**: `https://api.agcnewsnet.com/api/general/stories/featuredstories?page=1&per_page=15`
- **Latest Stories**: `https://api.agcnewsnet.com/api/general/stories/lateststories?page=1&per_page=7`
- **Single Story**: `https://api.agcnewsnet.com/api/general/stories/{storyId}`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   └── store.ts          # Redux store configuration
├── components/            # React components
│   ├── CategoryNav.tsx   # Category navigation component
│   ├── TopStories.tsx    # Top stories display component
│   ├── FeaturedStories.tsx # Featured stories component
│   ├── EditorsPicks.tsx  # Editor's picks component
│   ├── SearchBar.tsx     # Search input component
│   ├── SearchSection.tsx # Search section wrapper
│   └── Providers.tsx     # React Query and Redux providers
├── features/              # Redux slices
│   ├── bookmark/         # Bookmark functionality
│   └── category/         # Category state management
├── hooks/                # Custom React hooks
│   ├── useCategories.ts  # Categories data fetching
│   ├── useTopStories.tsx # Top stories data fetching
│   ├── useStories.ts     # Various story endpoints
│   └── reduxHooks.ts     # Typed Redux hooks
└── types/                # TypeScript type definitions
    └── story.ts          # Story and API response types
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling with custom utilities:

- **Line Clamping**: `.line-clamp-2`, `.line-clamp-3` for text truncation
- **Scrollbar Hide**: `.scrollbar-hide` for hiding scrollbars
- **Animations**: Custom fade-in animations for smooth UX
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## 🔧 Configuration Files

- **`next.config.ts`**: Next.js configuration
- **`tailwind.config.ts`**: Tailwind CSS configuration
- **`postcss.config.mjs`**: PostCSS configuration for Tailwind
- **`tsconfig.json`**: TypeScript configuration
- **`eslint.config.mjs`**: ESLint configuration

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:

   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **Module not found errors**:

   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**:

   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

4. **API connection issues**:
   - Check your internet connection
   - Verify API endpoints are accessible
   - Check browser console for CORS or network errors

### Environment Issues

If you encounter any environment-related issues:

1. **Clear caches**:

   ```bash
   npm run build -- --clean
   ```

2. **Restart development server**:
   ```bash
   # Stop the server (Ctrl+C) and restart
   npm run dev
   ```

## 📄 License

This project is created as an assessment by Raymond.

## 🤝 Contributing

This is an assessment project. For any issues or suggestions, please contact the developer.

---

**Happy coding!** 🎉
