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
import Home from '@src/screens/Home';
// setup Tailwind
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../tailwind.json';
import Onboarding from '@src/screens/Onboarding/Onboarding';
import AuthScreen from '@src/screens/Authentication/AuthScreen';
// setup Tailwind
export type HomeStackParamlist = {
  Cat: { sort: [] } | undefined;
  Profile: { name: string } | undefined;
  Shop: { sort: [] } | undefined;
  Item: { name: string } | undefined;
  Card: undefined;
};
export type AuthStackParamList = {
  SigninScreen: undefined;
  SignupScreen: undefined;
  VerificationScreen: undefined;
  RessetpasswordScreen: undefined;
};
export type RootStackParamList = {
  Onboarding: undefined;
  AuthScreen: NavigatorScreenParams<AuthStackParamList>;
  Home: NavigatorScreenParams<HomeStackParamlist>;
  Detail: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const NoHeader: NativeStackNavigationOptions = {
  header: (): React.ReactNode => null,
};
export default function () {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  useFlipper(navigationRef);

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={'AuthScreen'}>
          <Stack.Screen
            name={'Onboarding'}
            component={Onboarding}
            options={NoHeader}
          />
          <Stack.Screen
            name={'AuthScreen'}
            component={AuthScreen}
            options={NoHeader}
          />
          <Stack.Screen name={'Home'} component={Home} options={NoHeader} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
