import { SafeAreaView } from 'react-native-safe-area-context';
import AnimeGrid from '../../components/AnimeGrid/AnimeGrid';
import EmptyState from '../../components/states/EmptyState';
import LoadingState from '../../components/states/LoadingState';
import { useFavorites } from '../../context/FavoritesContext';
import { favoritesScreenStyles } from './styles';

export default function FavoritesScreen() {
  const { favorites, isLoaded } = useFavorites();

  if (!isLoaded) {
    return <LoadingState />;
  }

  if (favorites.length === 0) {
    return <EmptyState message="No favorites yet. Tap the heart on any anime to add it here!" />;
  }

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={favoritesScreenStyles.container}>
      <AnimeGrid visibleSeries={favorites} />
    </SafeAreaView>
  );
}
