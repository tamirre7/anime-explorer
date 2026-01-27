import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../src/theme/colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
