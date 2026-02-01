import { View, Text } from 'react-native';
import { colors } from '../../theme/colors';

export default function EmptyState() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg,
        padding: 16,
      }}
    >
      <Text style={{ color: colors.text, textAlign: 'center' }}>
        No Results. Try Searching for something else
      </Text>
    </View>
  );
}
