import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../services/apiClient';
import { DEFAULT_SORT } from '../constants/animeSort';

export default function useDiscoverInfinite(searchText, sort = DEFAULT_SORT) {
  const trimmedQuery = searchText?.trim() ?? '';

  return useInfiniteQuery({
    queryKey: ['discover', trimmedQuery, sort],
    queryFn: ({ pageParam = 1 }) =>
      api.discover({ trimmedQuery, sort, pageParam }),
    initialPageParam: 1,
    enabled: trimmedQuery.length > 0,
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
  });
}
