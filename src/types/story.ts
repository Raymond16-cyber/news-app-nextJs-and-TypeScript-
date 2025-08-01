export interface Category {
  category_id: number;
  category_name: string;
  total_stories: number | null;
  created_at: string;
  updated_at: string;
}

export interface Story {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  type: string;
  author: string;
  content: string;
  featured: string;
  views: number;
  editors_pick: string | null;
  top_story: string | null;
  category: Category;
  banner_image: string;
  created_at: string;
  updated_at: string;
}

export interface TopStoryItem {
  id: number;
  story: Story;
  created_at: string;
  updated_at: string;
}

export interface TopStoriesApiResponse {
  message: string;
  data: {
    data: TopStoryItem[];
  };
}
