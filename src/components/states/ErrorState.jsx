import { Text, View } from 'react-native';
import Button from '../Button/Button';
import { stateStyles } from './styles';

export default function ErrorState({
  message = 'Something went wrong.',
  onRetry,
}) {
  return (
    <View style={stateStyles.containerWithGap}>
      <Text style={stateStyles.text}>{message}</Text>
      {onRetry && (
        <Button title="Try Again" onPress={onRetry} variant="secondary" />
      )}
    </View>
  );
}
