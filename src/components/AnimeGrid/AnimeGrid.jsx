import { FlatList } from 'react-native';
import AnimeCard from '../AnimeCard/AnimeCard';

export default function AnimeGrid({ visibleSeries }) {
  return (
    <>
      <FlatList
        data={visibleSeries}
        renderItem={({ series }) => <AnimeCard anime={series} />}
        keyExtractor={(series) => series.id}
      />
    </>
  );
}
