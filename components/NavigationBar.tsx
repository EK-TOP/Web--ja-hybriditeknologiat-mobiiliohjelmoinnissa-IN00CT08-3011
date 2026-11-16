import type { NativeStackHeaderProps } from 'expo-router';
import { Appbar } from 'react-native-paper';

export default function NavigationBar({
  back,
  navigation,
  options,
  route,
}: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction
          accessibilityLabel="Takaisin"
          onPress={() => navigation.goBack()}
        />
      ) : (
        <Appbar.Action
          accessibilityLabel="Siirry toiseen näkymään"
          icon="arrow-right"
          onPress={() => navigation.navigate('second')}
        />
      )}
      <Appbar.Content title={options.title ?? route.name} />
    </Appbar.Header>
  );
}
