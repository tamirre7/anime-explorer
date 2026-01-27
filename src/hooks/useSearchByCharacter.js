import { useQuery } from '@tanstack/react-query';
import { api } from '../services/apiClient';

export default function useSearchByCharacter(characterName) {
  const trimmedName = characterName?.trim() ?? '';

  return useQuery({
    queryKey: ['char-anime', trimmedName],
    queryFn: () => api.searchAnimeByCharacter(trimmedName),
    enabled: trimmedName.length > 0,
  });
}
