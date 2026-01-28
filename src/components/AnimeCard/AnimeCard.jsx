import { Image, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { animeCardStyles } from './styles';

export default function AnimeCard({
  id,
  title,
  score,
  genres,
  imageUrl,
  airingYears,
}) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/anime-details/${id}`)}
      style={animeCardStyles.seriesCard}
    >
      <Image
        source={imageUrl}
        style={animeCardStyles.seriesImage}
        resizeMode="cover"
      />
      <Text style={animeCardStyles.seriesTitle} numberOfLines={2}>
        {title}
      </Text>
      <Text style={animeCardStyles.seriesMetaData}>{genres.join(' • ')}</Text>
      <View style={animeCardStyles.seriesDataContainer}>
        <Text style={animeCardStyles.seriesMetaData}>{airingYears}</Text>
        <Text style={animeCardStyles.seriesMetaData}>
          <Text style={animeCardStyles.star}>★</Text> {score}
        </Text>
      </View>
    </Pressable>
  );
}
