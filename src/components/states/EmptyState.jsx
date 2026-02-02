import { Text, View } from 'react-native';
import { stateStyles } from './styles';

export default function EmptyState({
  message = 'No Results. Try Searching for something else',
}) {
  return (
    <View style={stateStyles.container}>
      <Text style={stateStyles.text}>{message}</Text>
    </View>
  );
}
