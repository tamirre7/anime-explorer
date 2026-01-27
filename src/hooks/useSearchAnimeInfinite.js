import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_SORT } from '../constants/animeSort';
import { api } from '../services/apiClient';

export default function useSearchAnimeInfinite(sort = DEFAULT_SORT) {
  return useInfiniteQuery({
    queryKey: ['anime-search', sort],
    queryFn: ({ pageParam = 1 }) => api.searchAnimeByName({ pageParam, sort }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
  });
}
