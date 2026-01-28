import { View } from 'react-native';
import { colors } from '../../../src/theme/colors';
import SearchBar from '../../../src/components/SearchBar/SearchBar';
import Filters from '../../../src/components/Filters/Filters';
import AnimeGrid from '../../../src/components/AnimeGrid/AnimeGrid';

export default function DiscoverTab() {
  return (
    <View style={{ backgroundColor: colors.bg, flex: 1 }}>
      <SearchBar />
      <Filters />
      <AnimeGrid />
    </View>
  );
}
