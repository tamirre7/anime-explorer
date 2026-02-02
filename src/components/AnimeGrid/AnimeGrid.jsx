import { FlatList, RefreshControl, View } from 'react-native';
import { colors } from '../../theme/colors';
import AnimeCard from '../AnimeCard/AnimeCard';
import { animeGridStyles } from './styles';

export default function AnimeGrid({
  visibleSeries,
  onEndReached,
  onRefresh,
  refreshing = false,
}) {
  const numColumns = 2;

  return (
    <FlatList
      key={`grid-${numColumns}`}
      data={visibleSeries}
      renderItem={({ item }) => (
        <View style={animeGridStyles.cardWrapper}>
          <AnimeCard {...item} />
        </View>
      )}
      keyExtractor={(item) => String(item.id)}
      numColumns={numColumns}
      contentContainerStyle={animeGridStyles.contentContainer}
      columnWrapperStyle={numColumns > 1 ? animeGridStyles.columnWrapper : undefined}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.6}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.text}
            colors={[colors.accent]}
          />
        ) : undefined
      }
    />
  );
}
