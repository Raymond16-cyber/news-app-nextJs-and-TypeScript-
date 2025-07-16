import { useQuery } from '@tanstack/react-query'

export const useEditorsPicks = () => {
  return useQuery({
    queryKey: ['editors-picks'],
    queryFn: async () => {
      const res = await fetch('https://api.agcnewsnet.com/api/general/editorpicks?page=1&per_page=15');
      if (!res.ok) throw new Error('Failed to fetch editor\'s picks');
      return res.json();
    }
  });
}

export const useFeaturedStories = () => {
  return useQuery({
    queryKey: ['featured-stories'],
    queryFn: async () => {
      const res = await fetch('https://api.agcnewsnet.com/api/general/stories/featuredstories?page=1&per_page=15');
      if (!res.ok) throw new Error('Failed to fetch featured stories');
      return res.json();
    }
  });
}

export const useLatestStories = () => {
  return useQuery({
    queryKey: ['latest-stories'],
    queryFn: async () => {
      const res = await fetch('https://api.agcnewsnet.com/api/general/stories/lateststories?page=1&per_page=7');
      if (!res.ok) throw new Error('Failed to fetch latest stories');
      return res.json();
    }
  });
}

export const useMissedStories = () => {
  return useQuery({
    queryKey: ['missed-stories'],
    queryFn: async () => {
      const res = await fetch('https://api.agcnewsnet.com/api/general/stories/missedstories?page=1&per_page=5');
      if (!res.ok) throw new Error('Failed to fetch missed stories');
      return res.json();
    }
  });
}

export const useCategoryStories = (categoryId: number) => {
  return useQuery({
    queryKey: ['category-stories', categoryId],
    queryFn: async () => {
      const res = await fetch(`https://api.agcnewsnet.com/api/general/categories/${categoryId}/stories?page=1&per_page=15`);
      if (!res.ok) throw new Error('Failed to fetch category stories');
      return res.json();
    },
    enabled: !!categoryId
  });
}

export const useStory = (storyId: number) => {
  return useQuery({
    queryKey: ['story', storyId],
    queryFn: async () => {
      const res = await fetch(`https://api.agcnewsnet.com/api/general/stories/${storyId}`);
      if (!res.ok) throw new Error('Failed to fetch story');
      return res.json();
    },
    enabled: !!storyId
  });
}
