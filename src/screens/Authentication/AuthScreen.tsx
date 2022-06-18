import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AuthStackParamList, NoHeader, RootStackParamList } from '@src/App';
import SigninScreen from '@src/screens/Authentication/SigninScreen/SigninScreen';
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
    </Stack.Navigator>
  );
};

export default React.memo(AuthScreen);
