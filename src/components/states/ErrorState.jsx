import { Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import Button from '../Button/Button';

export default function ErrorState({
  message = 'Something went wrong.',
  onRetry,
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg,
        padding: 16,
        gap: 16,
      }}
    >
      <Text style={{ color: colors.text, textAlign: 'center' }}>{message}</Text>
      {onRetry && (
        <Button title="Try Again" onPress={onRetry} variant="secondary" />
      )}
    </View>
  );
}
