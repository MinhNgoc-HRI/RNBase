import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import IconAvatar from '@src/assets/svgs/Components/ic_avatar.svg';
import { RootStackParamList } from '@src/App';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import IconUpGrade from '@src/assets/svgs/Components/ic_upgrade.svg';
import data from '@src/screens/Main/MenuData';
import HomeStack from '@src/screens/Home/HomeStack';
import { MainStackParamlist } from '@src/App';
const Drawer = createDrawerNavigator<MainStackParamlist>();
type Props = NativeStackScreenProps<RootStackParamList, 'MainScreen'>;
const DrawerContent = ({
  navigation,
  ...props
}: DrawerContentComponentProps) => {
  const tw = useTailwind();
  return (
    <>
      <DrawerContentScrollView {...props}>
        <View style={tw('h-full bg-#FFFFFF ml-25')}>
          <IconAvatar />
          <Text style={tw('text-19 font-medium text-#000000 mt-15')}>
            Mr Ngnm
          </Text>
          <View>
            {data.map((element, index) => {
              const { title, icon: Icon } = element;
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MainScreen', {
                      screen: 'HomeDrawerStack',
                      params: {
                        screen: 'HomeScreen2',
                      },
                    })
                  }
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
const MainScreen = ({ navigation, route }: Props) => {
  const tw = useTailwind();
  return (
    <Drawer.Navigator
      initialRouteName={'HomeDrawerStack'}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerActiveBackgroundColor: '#FFFFFF',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: [tw('flex-1 w-70/ bg-#FFFFFF')],
        sceneContainerStyle: tw('bg-#FFFFFF'),
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      <Drawer.Screen name={'HomeDrawerStack'} component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default React.memo(MainScreen);
