import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useEffect } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import {
  useAnimatedStyle,
  Extrapolate,
  interpolate,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import navigationService from '@src/navigation/navigationService';
import { DrawerStackParamlist } from '@src/App';
import BottomTab from '@src/screens/Home/BottomTab';
import HomeScreen from '@src/screens/Home/HomeScreen';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator<DrawerStackParamlist>();
const HomeStack = ({}) => {
  const tw = useTailwind();
  const isDrawerOpen = useDrawerStatus();
  const process = useSharedValue<number>(0);
  useEffect(() => {
    if (isDrawerOpen === 'open') {
      process.value = withTiming(1, {
        duration: 300,
      });
    } else {
      process.value = withTiming(0, {
        duration: 300,
      });
    }
  }, [isDrawerOpen, process]);
  const rStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      process.value,
      [0, 0.5, 1],
      [1, 0.95, 0.8],
      Extrapolate.CLAMP,
    );
    const border = interpolate(
      process.value,
      [0, 0.5, 1],
      [1, 30, 50],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius: border,
      transform: [{ scale: scale }],
    };
  });
  return (
    <Animated.View style={[tw('flex-1 overflow-hidden border-1'), rStyles]}>
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <BottomTab {...props} />}>
        <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
        <Tab.Screen
          name={'HomeScreen2'}
          component={() => <View style={tw('flex-1 bg-#000000')} />}
        />
      </Tab.Navigator>
    </Animated.View>
  );
};

export default HomeStack;
