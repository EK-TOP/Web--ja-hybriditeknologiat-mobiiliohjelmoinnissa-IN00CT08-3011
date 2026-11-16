import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import NavigationBar from '../../components/NavigationBar';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          header: (props) => <NavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Etusivu' }} />
        <Stack.Screen name="second" options={{ title: 'Toinen näkymä' }} />
      </Stack>
    </PaperProvider>
  );
}
