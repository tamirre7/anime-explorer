import { Image, ScrollView, Text, View } from 'react-native';
import AnimeScore from '../AnimeScore/AnimeScore';
import { animeDetailsStyles } from './styles';

export default function AnimeDetails({
  title,
  imageUrl,
  score,
  episodes,
  genres,
  synopsis,
  rating,
  airingYears,
}) {
  const genresString = (genres ?? []).join(' • ');
  const episodesText = episodes ? `${episodes} episodes` : null;

  return (
    <ScrollView style={animeDetailsStyles.container}>
      <View style={animeDetailsStyles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={animeDetailsStyles.image} /> 
      </View>

      <Text style={animeDetailsStyles.title}>{title}</Text>
      <Text style={animeDetailsStyles.genres}>{genresString}</Text>

      <View style={animeDetailsStyles.metaRow}>
        <AnimeScore score={score} />
        {airingYears ? (
          <Text style={animeDetailsStyles.metaItem}>{airingYears}</Text>
        ) : null}
        {episodesText ? (
          <Text style={animeDetailsStyles.metaItem}>{episodesText}</Text>
        ) : null}
      </View>

      {rating ? <Text style={animeDetailsStyles.rating}>{rating}</Text> : null}

      <View style={animeDetailsStyles.divider} />

      <Text style={animeDetailsStyles.sectionTitle}>Synopsis</Text>
      <Text style={animeDetailsStyles.synopsis}>{synopsis}</Text>
    </ScrollView>
  );
}
