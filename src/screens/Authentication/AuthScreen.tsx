import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AuthStackParamList, NoHeader, RootStackParamList } from '@src/App';
import SigninScreen from '@src/screens/Authentication/SigninScreen/SigninScreen';
import SignupScreen from '@src/screens/Authentication/SignupScreen/SignupScreen';
import VerificationScreen from '@src/screens/Authentication/VerificationScreen/VerificationScreen';
import RessetpasswordScreen from '@src/screens/Authentication/RessetpasswordScreen/RessetpasswordScreen';
import { TitleHeader } from '@src/App';
type Props = NativeStackScreenProps<RootStackParamList, 'AuthScreen'>;
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthScreen = ({}: Props) => {
  return (
    <Stack.Navigator initialRouteName={'SigninScreen'}>
      <Stack.Screen
        name={'SigninScreen'}
        component={SigninScreen}
        options={NoHeader}
      />
      <Stack.Screen
        name={'SignupScreen'}
        component={SignupScreen}
        options={TitleHeader('')}
      />
      <Stack.Screen
        name={'VerificationScreen'}
        component={VerificationScreen}
        options={TitleHeader('')}
      />
      <Stack.Screen
        name={'RessetpasswordScreen'}
        component={RessetpasswordScreen}
        options={TitleHeader('')}
      />
    </Stack.Navigator>
  );
};

export default React.memo(AuthScreen);
