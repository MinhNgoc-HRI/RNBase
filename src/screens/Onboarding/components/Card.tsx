import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { OnboardingType } from '@src/screens/Onboarding/Onboarding';
import { useTailwind } from 'tailwind-rn/dist';
const { width, height } = Dimensions.get('window');
type CardProps = {
  item: OnboardingType;
};
const Card = ({ item }: CardProps) => {
  const tw = useTailwind();
  const { title, description, image: Image } = item;
  return (
    <View style={[styles.root, tw('flex-1 items-center')]}>
      <Image />
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  root: {
    width: width,
    paddingTop: getStatusBarHeight() + 19,
  },
});
