import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { useFlipper } from '@react-navigation/devtools';
import Welcome from '@src/screens/Welcome/Welcome';
// setup Tailwind
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
// setup Tailwind
export type HomeStackParamlist = {
  Cat: { sort: [] } | undefined;
  Profile: { name: string } | undefined;
};
export type RootStackParamList = {
  Welcome: undefined;
  Home: NavigatorScreenParams<HomeStackParamlist>;
  Detail: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const NoHeader: NativeStackNavigationOptions = {
  header: (): React.ReactNode => null,
};
export default function () {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name={'Welcome'}
            component={Welcome}
            options={NoHeader}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
