import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { animeCardStyles } from './styles';

export default function AnimeCard({ id, title, score, imageUrl, airingYears }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/anime-details/${id}`)}
      style={animeCardStyles.seriesCard}
    >
      <Image
        source={{ uri: imageUrl }}
        style={animeCardStyles.seriesImage}
        resizeMode="cover"
      />
      <View style={animeCardStyles.contentContainer}>
        <Text style={animeCardStyles.seriesTitle} numberOfLines={2}>
          {title}
        </Text>
        <View style={animeCardStyles.spacer} />
        <View style={animeCardStyles.seriesDataContainer}>
          <Text style={animeCardStyles.seriesMetaData}>
            <Text style={animeCardStyles.star}>★</Text> {score}
          </Text>
          <Text style={animeCardStyles.seriesMetaData}>{airingYears}</Text>
        </View>
      </View>
    </Pressable>
  );
}
