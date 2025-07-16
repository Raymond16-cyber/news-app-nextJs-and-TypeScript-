import { useQuery } from "@tanstack/react-query";
import { TopStoriesApiResponse } from "@/types/story";

export const useTopStories = () => {
  return useQuery<TopStoriesApiResponse>({
    queryKey: ["top-stories"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.agcnewsnet.com/api/general/top-stories"
      );
      if (!res.ok) throw new Error("Failed to fetch top stories");
      return res.json();
    },
  });
};
