import { FlatList, RefreshControl, View } from 'react-native';
import AnimeCard from '../AnimeCard/AnimeCard';
import { colors } from '../../theme/colors';

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
        <View style={{ flex: 1, maxWidth: '48%', marginBottom: 12 }}>
          <AnimeCard {...item} />
        </View>
      )}
      keyExtractor={(item) => String(item.id)}
      numColumns={numColumns}
      contentContainerStyle={{ padding: 12 }}
      columnWrapperStyle={
        numColumns > 1
          ? { justifyContent: 'space-between', gap: 12 }
          : undefined
      }
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
