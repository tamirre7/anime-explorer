import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';
import { useFavorites } from '../../context/FavoritesContext';
import { colors } from '../../theme/colors';
import AnimeScore from '../AnimeScore/AnimeScore';
import Button from '../Button/Button';
import { animeCardStyles } from './styles';

export default function AnimeCard({ id, title, score, imageUrl, airingYears }) {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    toggleFavorite({ id, title, score, imageUrl, airingYears });
  };

  const favorited = isFavorite(id);

  return (
    <Pressable
      onPress={() => router.push(`/anime-details/${id}`)}
      style={animeCardStyles.seriesCard}
    >
      <View style={animeCardStyles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={animeCardStyles.seriesImage}
          resizeMode="cover"
        />
        <Button
          icon={
            <Ionicons
              name={favorited ? 'heart' : 'heart-outline'}
              size={22}
              color={favorited ? colors.favorite : 'white'}
            />
          }
          onPress={handleToggleFavorite}
          style={animeCardStyles.favoriteButton}
        />
      </View>
      <View style={animeCardStyles.contentContainer}>
        <Text style={animeCardStyles.seriesTitle} numberOfLines={2}>
          {title}
        </Text>
        <View style={animeCardStyles.spacer} />
        <View style={animeCardStyles.seriesDataContainer}>
          <AnimeScore score={score} />
          <Text style={animeCardStyles.seriesMetaData}>{airingYears}</Text>
        </View>
      </View>
    </Pressable>
  );
}
