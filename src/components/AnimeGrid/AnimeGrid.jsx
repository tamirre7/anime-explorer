import { FlatList, View } from 'react-native';
import AnimeCard from '../AnimeCard/AnimeCard';

export default function AnimeGrid({ visibleSeries }) {
  const numColumns = 2;

  return (
    <FlatList
      key={`grid-${numColumns}`}
      data={visibleSeries}
      renderItem={({ item }) => <AnimeCard anime={item} />}
      keyExtractor={(item) => String(item.id)}
      numColumns={numColumns}
      contentContainerStyle={{ padding: 12 }}
      columnWrapperStyle={
        numColumns > 1 ? { justifyContent: 'space-between' } : undefined
      }
      ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
    />
  );
}
