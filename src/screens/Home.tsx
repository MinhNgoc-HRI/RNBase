import React from 'react';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackParamlist, RootStackParamList } from '../App';
import Cat from '@src/screens/Home/Cat';
import Tabbar from './Home/BottomTab';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeStack = createBottomTabNavigator<HomeStackParamlist>();
const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  return (
    <HomeStack.Navigator tabBar={Tabbar}>
      <HomeStack.Screen name={'Cat'} component={Cat} />
      <HomeStack.Screen name={'Profile'} component={Cat} />
      <HomeStack.Screen name={'Shop'} component={Cat} />
      <HomeStack.Screen name={'Item'} component={Cat} />
      <HomeStack.Screen name={'Card'} component={Cat} />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;
