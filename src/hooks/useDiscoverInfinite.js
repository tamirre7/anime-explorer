import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../services/apiClient';
import { DEFAULT_SORT } from '../constants/animeSort';

export default function useDiscoverInfinite(sort = DEFAULT_SORT) {
  return useInfiniteQuery({
    queryKey: ['discover', sort],
    queryFn: ({ pageParam = 1 }) => api.discover({ page: pageParam, sort }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
  });
}
