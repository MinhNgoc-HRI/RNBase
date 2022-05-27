import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@src/screens/Home';
import Details from '@src/screens/Details';
import { useFlipper } from '@react-navigation/devtools';
export type HomeStackParamlist = {
  Cat: { sort: boolean } | undefined;
};
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamlist>;
  Detail: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function () {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Detail'} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
