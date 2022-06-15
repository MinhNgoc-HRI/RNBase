import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { OnboardingTypeWithX } from '@src/screens/Onboarding/Onboarding';
import { useTailwind } from 'tailwind-rn/dist';
const { width, height } = Dimensions.get('window');
type CardProps = {
  item: OnboardingTypeWithX;
};
const Card = ({ item }: CardProps) => {
  const tw = useTailwind();
  const { title, description, image: Image, translateX, index } = item;
  const range = [
    (index - 1) * width,
    (index - 0.5) * width,
    index * width,
    (index + 0.5) * width,
    (index + 1) * width,
  ];
  const rStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      range,
      [0, 0.5, 1, 0.5, 0],
      Extrapolate.CLAMP,
    );
    const translateY = interpolate(
      translateX.value,
      range,
      [0, 20, 40, 20, 0],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{ scale: scale }, { translateY: translateY }],
    };
  });
  return (
    <Animated.View style={[styles.root, tw('flex-1 items-center'), rStyles]}>
      <Image />
    </Animated.View>
  );
};

export default Card;
const styles = StyleSheet.create({
  root: {
    width: width,
    paddingTop: getStatusBarHeight() + 19,
  },
});
