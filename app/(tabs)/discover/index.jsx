import { View } from 'react-native';
import { colors } from '../../../src/theme/colors';
import SearchBar from '../../../src/components/SearchBar/SearchBar';
import Filters from '../../../src/components/Filters/Filters';
import AnimeGrid from '../../../src/components/AnimeGrid/AnimeGrid';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DiscoverTab() {
  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={{ flex: 1, backgroundColor: colors.bg, paddingTop: 8 }}
    >
      <SearchBar />
      <Filters />
      <AnimeGrid />
    </SafeAreaView>
  );
}
