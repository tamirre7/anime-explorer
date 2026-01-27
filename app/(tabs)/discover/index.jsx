import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function DiscoverTab() {
  return (
    <View>
      <Text>hello animes</Text>
      <Link href={'/anime-details/1'}>
        <Text>Go To Details</Text>
      </Link>
    </View>
  );
}
