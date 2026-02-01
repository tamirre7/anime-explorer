import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import AnimeDetails from '../../src/components/AnimeDetails/AnimeDetails';
import useAnimeDetails from '../../src/hooks/useAnimeDetails';
import { colors } from '../../src/theme/colors';

export default function DetailsTab() {
  const { id } = useLocalSearchParams();
  const animeId = Number(id);

  const { data, isLoading, isError, error } = useAnimeDetails(animeId);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AnimeDetails {...data} />
    </View>
  );
}
