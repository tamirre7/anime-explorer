import { useLocalSearchParams } from 'expo-router';

import AnimeDetails from '../../src/components/AnimeDetails/AnimeDetails';
import ErrorState from '../../src/components/states/ErrorState';
import LoadingState from '../../src/components/states/LoadingState';
import useAnimeDetails from '../../src/hooks/useAnimeDetails';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const animeId = Number(id);

  const { data, isLoading, isError, error, refetch } = useAnimeDetails(animeId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState message={error?.message} onRetry={refetch} />;
  }

  if (!data) {
    return <ErrorState message="Anime not found" onRetry={refetch} />;
  }

  return <AnimeDetails {...data} />;
}
