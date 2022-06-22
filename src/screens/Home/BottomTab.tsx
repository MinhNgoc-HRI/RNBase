import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import { useTailwind } from 'tailwind-rn/dist';
import IconAdd from '@src/assets/svgs/Home/ic_add.svg';
import IconEvent from '@src/assets/svgs/Home/ic_event.svg';
import IconMap from '@src/assets/svgs/Home/ic_map.svg';
import IconExplore from '@src/assets/svgs/Home/ic_explore.svg';
import IconProfile from '@src/assets/svgs/SigninScreen/ic_person.svg';
const TAB_HEIGHT = 80;

const { width } = Dimensions.get('window');

const lineGenerator = shape.line();

const rect = lineGenerator([
  [0, 0],
  [width / 2, 0],
  [width, 0],
  [width, TAB_HEIGHT],
  [0, TAB_HEIGHT],
  [0, 0],
]);

const center = lineGenerator.curve(shape.curveBasis)([
  [(width / 5) * 2, 0],
  [(width / 5) * 2 + 12, TAB_HEIGHT * 0.5],
  [(width / 5) * 3 - 12, TAB_HEIGHT * 0.5],
  [(width / 5) * 3, 0],
]);
const d = `${center} ${rect}`;
function TabShape() {
  return (
    <Svg width={width} height={TAB_HEIGHT}>
      <Path fill={'#FAFAFA'} {...{ d }} />
    </Svg>
  );
}
const BottomTab = ({ state, navigation }: BottomTabBarProps) => {
  const tw = useTailwind();
  return (
    <View style={[styles.container]}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View style={[tw('flex-row flex-1 items-center px-10')]}>
          <View style={tw('flex-1 justify-center items-center')}>
            <Text style={tw('text-12 font-normal text-#9D9898')}>Explore</Text>
            <IconExplore />
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MainScreen', {
                screen: 'HomeDrawerStack',
                params: {
                  screen: 'HomeScreen2',
                },
              })
            }
            style={tw('flex-1 justify-center items-center')}>
            <Text style={tw('text-12 font-normal text-#9D9898')}>Event</Text>
            <IconEvent />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MainScreen', {
                screen: 'HomeDrawerStack',
                params: {
                  screen: 'HomeScreen',
                },
              })
            }
            style={[
              tw(
                'w-55 h-55 justify-center items-center rounded-full bg-#3D56F0',
              ),
              {
                transform: [{ translateY: -40 }],
              },
            ]}>
            <IconAdd />
          </TouchableOpacity>
          <View style={tw('flex-1 justify-center items-center')}>
            <Text style={tw('text-12 font-normal text-#9D9898')}>Map</Text>
            <IconMap />
          </View>
          <View style={tw('flex-1 justify-center items-center')}>
            <Text style={tw('text-12 font-normal text-#9D9898')}>Profile</Text>
            <IconProfile />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: TAB_HEIGHT,
    width: Dimensions.get('window').width,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 5,
    bottom: 0,
  },
  midbutton: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 100,
    transform: [{ translateY: -40 }],
  },
  button: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 100,
  },
});
