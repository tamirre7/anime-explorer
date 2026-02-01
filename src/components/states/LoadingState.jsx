import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../theme/colors';

export default function LoadingState() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg,
      }}
    >
      <ActivityIndicator color={colors.text} />
    </View>
  );
}
