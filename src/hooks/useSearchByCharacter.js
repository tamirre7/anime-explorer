import { useQuery } from '@tanstack/react-query';
import { api } from '../services/apiClient';

export default function useSearchByCharacter(name, options = {}) {
  const trimmed = name?.trim() ?? '';
  return useQuery({
    queryKey: ['char-anime', trimmed],
    queryFn: () => api.searchAnimeByCharacter(trimmed),
    enabled: options.enabled ?? trimmed.length > 0,
  });
}
