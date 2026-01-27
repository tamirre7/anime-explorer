import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="discover" />
      <Tabs.Screen name="favorites" />
    </Tabs>
  );
}
