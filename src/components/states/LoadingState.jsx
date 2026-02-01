import { View, ActivityIndicator } from 'react-native';

export default function LoadingState() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}
