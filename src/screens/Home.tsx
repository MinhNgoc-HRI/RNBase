import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '@src/components/Button';
import {
  type NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackParamlist, RootStackParamList } from '../../App';
import Cat from '@src/screens/Home/Cat';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const HomeStack = createBottomTabNavigator<HomeStackParamlist>();
const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={'Cat'} component={Cat} />
    </HomeStack.Navigator>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
