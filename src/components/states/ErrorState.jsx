import { View, Text } from 'react-native';
import { colors } from '../../theme/colors';

export default function ErrorState({ message = 'Something went wrong.' }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ color: colors.text }}>{message}</Text>
    </View>
  );
}
