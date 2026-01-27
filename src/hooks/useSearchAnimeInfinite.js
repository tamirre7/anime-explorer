import { useInfiniteQuery } from '@tanstack/react-query';
import { DEFAULT_SORT } from '../constants/animeSort';
import { api } from '../services/apiClient';

export default function useSearchAnimeInfinite(
  searchText,
  sort = DEFAULT_SORT,
) {
  const trimmedQuery = searchText?.trim() ?? '';

  return useInfiniteQuery({
    queryKey: ['anime-search', trimmedQuery, sort],
    queryFn: ({ pageParam = 1 }) =>
      api.searchAnimeByName({ animeName: trimmedQuery, page: pageParam, sort }),
    initialPageParam: 1,
    enabled: trimmedQuery.length > 0,
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
  });
}
