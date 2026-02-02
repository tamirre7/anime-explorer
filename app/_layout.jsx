import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FavoritesProvider } from '../src/context/FavoritesContext';
import { colors } from '../src/theme/colors';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <StatusBar style="light" />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="anime-details/[id]"
              options={{
                headerTitle: 'Anime Details',
                headerBackTitle: 'Back',
                headerTintColor: colors.text,
                headerStyle: { backgroundColor: colors.surface },
                headerTitleStyle: { color: colors.text },
              }}
            />
          </Stack>
        </FavoritesProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
