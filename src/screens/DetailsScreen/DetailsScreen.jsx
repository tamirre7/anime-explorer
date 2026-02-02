import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';

import AnimeScore from '../../components/AnimeScore/AnimeScore';
import ErrorState from '../../components/states/ErrorState';
import LoadingState from '../../components/states/LoadingState';
import useAnimeDetails from '../../hooks/useAnimeDetails';

import { detailsScreenStyles } from './styles';

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

  const { title, imageUrl, score, episodes, genres, synopsis, rating, airingYears } = data;
  const genresString = (genres ?? []).join(' • ');
  const episodesText = episodes ? `${episodes} episodes` : null;

  return (
    <ScrollView style={detailsScreenStyles.container}>
      <View style={detailsScreenStyles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={detailsScreenStyles.image} />
      </View>

      <Text style={detailsScreenStyles.title}>{title}</Text>
      <Text style={detailsScreenStyles.genres}>{genresString}</Text>

      <View style={detailsScreenStyles.metaRow}>
        <AnimeScore score={score} />
        {airingYears ? (
          <Text style={detailsScreenStyles.metaItem}>{airingYears}</Text>
        ) : null}
        {episodesText ? (
          <Text style={detailsScreenStyles.metaItem}>{episodesText}</Text>
        ) : null}
      </View>

      {rating ? <Text style={detailsScreenStyles.rating}>{rating}</Text> : null}

      <View style={detailsScreenStyles.divider} />

      <Text style={detailsScreenStyles.sectionTitle}>Synopsis</Text>
      <Text style={detailsScreenStyles.synopsis}>{synopsis}</Text>
    </ScrollView>
  );
}
