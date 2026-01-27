import { useQuery } from '@tanstack/react-query';
import { api } from '../services/apiClient';

export default function useAnimeDetails(animeId) {
  return useQuery({
    queryKey: ['anime-details', animeId],
    queryFn: () => api.getAnimeDetails(animeId),
    enabled: !!animeId,
  });
}
