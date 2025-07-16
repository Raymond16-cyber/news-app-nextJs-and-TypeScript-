import { useQuery } from "@tanstack/react-query";

export interface Category {
  category_id: number;
  category_name: string;
  total_stories?: number;
  created_at: string;
  updated_at: string;
}

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      try {
        const res = await fetch("https://api.agcnewsnet.com/api/general/categories");
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
        }
        
        const data = await res.json();
        console.log('Categories API response:', data);
        
        // Handle different possible response structures
        if (data.data && Array.isArray(data.data)) {
          return data.data;
        } else if (Array.isArray(data)) {
          return data;
        } else if (data.categories && Array.isArray(data.categories)) {
          return data.categories;
        } else {
          console.warn('Unexpected API response structure:', data);
          return [];
        }
      } catch (error) {
        console.error('Categories fetch error:', error);
        throw error;
      }
    },
    retry: 3,
    retryDelay: 1000,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
