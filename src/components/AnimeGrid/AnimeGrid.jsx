import { FlatList, View } from 'react-native';
import AnimeCard from '../AnimeCard/AnimeCard';

export default function AnimeGrid({ visibleSeries }) {
  const numColumns = 2;

  return (
    <FlatList
      key={`grid-${numColumns}`}
      data={visibleSeries}
      renderItem={({ item }) => (
        <View style={{ flex: 1, marginBottom: 12 }}>
          <AnimeCard anime={item} />
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
    />
  );
}
