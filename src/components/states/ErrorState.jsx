import { View, Text } from 'react-native';
import { colors } from '../../theme/colors';

export default function ErrorState({ message = 'Something went wrong.' }) {
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
      <Text style={{ color: colors.text, textAlign: 'center' }}>{message}</Text>
    </View>
  );
}
