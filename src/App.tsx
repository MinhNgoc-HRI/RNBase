import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { useFlipper } from '@react-navigation/devtools';
import { TailwindProvider } from 'tailwind-rn';
import utilities from '../tailwind.json';
import Onboarding from '@src/screens/Onboarding/Onboarding';
import AuthScreen from '@src/screens/Authentication/AuthScreen';
import { navigationRef } from '@src/navigation/navigationService';
import DefaultActionBar from '@src/components/StatusBar/DefaultActionBar';
import MainScreen from '@src/screens/Main/MainScreen';
export type HomeStackParamlist = {
  Cat: { sort: [] } | undefined;
  Profile: { name: string } | undefined;
  Shop: { sort: [] } | undefined;
  Item: { name: string } | undefined;
  Card: undefined;
};
export type MainStackParamlist = {
  HomeScreen: undefined;
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
  // HomeScreen: NavigatorScreenParams<HomeStackParamlist>;
  Detail: undefined;
  MainScreen: NavigatorScreenParams<MainStackParamlist>;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const NoHeader: NativeStackNavigationOptions = {
  header: (): React.ReactNode => null,
};
export type ScreenOptions = {
  header?: () => React.ReactNode;
  headerShown?: boolean;
};

export const TitleHeader = (
  title: string,
  {
    rightIcon,
    onPressRight,
    rightText,
    onPressLeft,
  }: {
    rightIcon?: 'search';
    rightText?: string;
    onPressRight?: () => void;
    onPressLeft?: () => void;
  } = {},
): NativeStackNavigationOptions => {
  return {
    header: () => (
      <DefaultActionBar
        title={title}
        rightIconType={rightIcon}
        rightText={rightText}
        onPressRight={onPressRight}
        onPressLeft={onPressLeft}
      />
    ),
  };
};
export default function () {
  // const navigationRef = useNavigationContainerRef<RootStackParamList>();

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
          <Stack.Screen
            name={'MainScreen'}
            component={MainScreen}
            options={NoHeader}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
