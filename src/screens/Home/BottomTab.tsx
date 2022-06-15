import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, { Circle, Path, Defs, Rect, Mask } from 'react-native-svg';
import * as shape from 'd3-shape';
import Animated,{ } from 'react-native-reanimated';
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
  [(width / 5) * 2 + 20, TAB_HEIGHT * 0.5],
  [(width / 5) * 3 - 20, TAB_HEIGHT * 0.5],
  [(width / 5) * 3, 0],
]);
const d = `${center} ${rect}`;
function TabShape() {
  return (
    <Svg width={width} height={TAB_HEIGHT}>
      <Path fill={'white'} {...{ d }} />
    </Svg>
  );
}
const BottomTab = ({ state }: BottomTabBarProps) => {
  return (
    <View
      style={{
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
      }}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {state.routes.map((route, index) => {
            if (index == 2) {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    padding: 20,
                    backgroundColor: 'red',
                    borderRadius: 100,
                    // position: 'absolute',
                    transform: [{ translateY: -40 }],
                  }}>
                  <Text>A</Text>
                </TouchableOpacity>
              );
            }
            return (
              <TouchableOpacity
                key={index}
                style={{
                  padding: 20,
                  backgroundColor: 'red',
                  borderRadius: 100,
                }}>
                <Text>A</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default BottomTab;
