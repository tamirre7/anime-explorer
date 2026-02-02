import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../theme/colors';
import { stateStyles } from './styles';

export default function LoadingState() {
  return (
    <View style={stateStyles.container}>
      <ActivityIndicator color={colors.text} />
    </View>
  );
}
