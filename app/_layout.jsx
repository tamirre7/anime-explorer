import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../src/theme/colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="anime-details/[id]"
          options={{
            headerTitle: 'Anime Details',
            headerStyle: { backgroundColor: colors.surface },
            headerTitleStyle: { color: colors.text },
          }}
        />
      </Stack>
    </>
  );
}
