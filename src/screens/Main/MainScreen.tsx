import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  useDrawerProgress,
  useDrawerStatus,
} from '@react-navigation/drawer';
import IconAvatar from '@src/assets/svgs/Components/ic_avatar.svg';
import { RootStackParamList } from '@src/App';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import IconUpGrade from '@src/assets/svgs/Components/ic_upgrade.svg';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  Extrapolate,
  interpolate,
  Adaptable,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import navigationService from '@src/navigation/navigationService';
import data from '@src/screens/Main/MenuData';
const Drawer = createDrawerNavigator();
type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;
const DrawerContent = (props: DrawerContentComponentProps) => {
  const tw = useTailwind();
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={tw('h-full bg-#FFFFFF ml-25')}>
          <Button
            title={'Click'}
            onPress={() => navigationService.toggleDrawer()}
          />
          <IconAvatar />
          <Text style={tw('text-19 font-medium text-#000000 mt-15')}>
            Mr Ngnm
          </Text>
          <View>
            {data.map((element, index) => {
              const { title, icon: Icon } = element;
              return (
                <TouchableOpacity
                  key={index}
                  style={tw('flex-row mt-38 items-center')}>
                  <Icon />
                  <View>
                    <Text style={tw('text-16 font-normal text-#000000 ml-5')}>
                      {title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity style={tw('absolute bottom-35 left-28')}>
        <IconUpGrade />
      </TouchableOpacity>
    </>
  );
};
const DrawerWrapper = () => {
  const tw = useTailwind();
  const isDrawerOpen = useDrawerStatus();
  const process = useSharedValue<number>(0);
  useEffect(() => {
    if (isDrawerOpen === 'open') {
      process.value = withTiming(1, {
        duration: 200,
      });
    } else {
      process.value = withTiming(0, {
        duration: 200,
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
    <Animated.View
      style={[tw('flex-1 bg-#3D56F0 justify-center items-center'), rStyles]}>
      <Button
        title={'Open Drawer'}
        onPress={() => navigationService.toggleDrawer()}
      />
    </Animated.View>
  );
};
const MainScreen = ({ navigation, route }: Props) => {
  const tw = useTailwind();

  // const device = useDerivedValue(() => {
  //   return progress;
  // }, [progress]);

  return (
    <Drawer.Navigator
      initialRouteName={'Drawer'}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerActiveBackgroundColor: '#FFFFFF',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: tw('flex-1 w-70/ bg-#FFFFFF'),
        sceneContainerStyle: tw('bg-#FFFFFF'),
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      <Drawer.Screen name={'Drawer'} component={DrawerWrapper} />
    </Drawer.Navigator>
  );
};

export default React.memo(MainScreen);
