import { useLocalSearchParams } from 'expo-router';

import AnimeDetails from '../../src/components/AnimeDetails/AnimeDetails';
import LoadingState from '../../src/components/states/LoadingState';
import ErrorState from '../../src/components/states/ErrorState';
import useAnimeDetails from '../../src/hooks/useAnimeDetails';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const animeId = Number(id);

  const { data, isLoading, isError, error } = useAnimeDetails(animeId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <ErrorState message={error?.message} />;
  }

  if (!data) {
    return <ErrorState message="Anime not found" />;
  }

  return <AnimeDetails {...data} />;
}
