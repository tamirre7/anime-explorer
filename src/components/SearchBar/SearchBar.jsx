import { Pressable, Text, TextInput, View } from 'react-native';
import { SEARCH_BY } from '../../constants/search';
import { colors } from '../../theme/colors';
import { searchBarStyles } from './styles';

const PLACEHOLDER_BY_MODE = {
  [SEARCH_BY.TITLE]: 'Search by series title...',
  [SEARCH_BY.CHARACTER]: 'Find anime by character (e.g., Eren Jaeger)',
};

export default function SearchBar({
  onQueryChange,
  query,
  searchBy,
  onSearchByChange,
}) {
  const inputPlaceholder = PLACEHOLDER_BY_MODE[searchBy];

  return (
    <View style={searchBarStyles.container}>
      <TextInput
        value={query}
        onChangeText={onQueryChange}
        placeholder={inputPlaceholder}
        placeholderTextColor={colors.text}
        autoCapitalize="none"
        autoCorrect={false}
        style={searchBarStyles.textInput}
      />
      <View style={searchBarStyles.pressableContainer}>
        <Pressable
          onPress={() => {
            onSearchByChange(SEARCH_BY.TITLE);
          }}
        >
          <Text
            style={
              searchBy === SEARCH_BY.TITLE
                ? searchBarStyles.activeSearchMethod
                : searchBarStyles.inactiveSearchMethod
            }
          >
            Title
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            onSearchByChange(SEARCH_BY.CHARACTER);
          }}
        >
          <Text
            style={
              searchBy === SEARCH_BY.CHARACTER
                ? searchBarStyles.activeSearchMethod
                : searchBarStyles.inactiveSearchMethod
            }
          >
            Character
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
