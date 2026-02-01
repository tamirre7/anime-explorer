import { View, Text } from 'react-native';
import { colors } from '../../theme/colors';

export default function EmptyState() {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ color: colors.text }}>
        No Results. Try Searching for something else
      </Text>
    </View>
  );
}
