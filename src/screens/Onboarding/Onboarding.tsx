import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Animation, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Card from './components/Card';
import { SvgProps } from 'react-native-svg';
import OnboardingImg from '@src/assets/svgs/Onboarding/img_onboarding.svg';
import OnboardingImgTwo from '@src/assets/svgs/Onboarding/img_onboarding1.svg';
import OnboardingImgThree from '@src/assets/svgs/Onboarding/img_onboarding2.svg';
import { useTailwind } from 'tailwind-rn/dist';
import Animated from 'react-native-reanimated';
export type OnboardingType = {
  title: string;
  description: string;
  image: React.FC<SvgProps>;
};
export type OnboardingTypeWithX = OnboardingType & {
  translateX: Animated.SharedValue<number>;
  index: number;
};
const OnboardingData: OnboardingType[] = [
  {
    title: 'Explore Upcoming and Nearby Events ',
    description:
      ' In publishing and graphic design, Lorem is a placeholder text commonly ',
    image: OnboardingImg,
  },
  {
    title: 'Web Have Modern Events Calendar Feature',
    description:
      ' In publishing and graphic design, Lorem is a placeholder text commonly ',
    image: OnboardingImgTwo,
  },
  {
    title: 'To Look Up More Events or Activities Nearby By Map',
    description:
      ' In publishing and graphic design, Lorem is a placeholder text commonly ',
    image: OnboardingImgThree,
  },
];
const dataSize = OnboardingData.length;
const { width: wD, height: hD } = Dimensions.get('window');
const Onboarding = () => {
  const tw = useTailwind();
  const translateX = useSharedValue<number>(0);
  const scrollHandler = useAnimatedScrollHandler((event, context) => {
    translateX.value = event.contentOffset.x;
  });
  const scrollRef = useRef<Animation.ScrollView>(null);
  const [step, setStep] = useState<number>(0);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const onScrollEndDragHandle = useCallback(() => {
    setDisabledButton(false);
  }, []);
  return (
    <React.Fragment>
      <Animation.ScrollView
        ref={scrollRef}
        scrollEnabled={false}
        onScrollEndDrag={onScrollEndDragHandle}
        scrollEventThrottle={10}
        horizontal
        style={styles.container}
        onScroll={scrollHandler}>
        {OnboardingData.map((item, index) => {
          return (
            <Card
              key={index}
              item={{ ...item, translateX: translateX, index: index }}
            />
          );
        })}
      </Animation.ScrollView>
      <View
        style={tw(
          'flex-1 absolute bottom-0 right-0 left-0 bg-#5669FF  rounded-t-48 min-h-280',
        )}>
        <View style={tw('px-40 pt-40 pb-37')}>
          <View style={tw('')}>
            <Text style={tw('text-#FFFFFF text-22 font-medium text-center')}>
              {OnboardingData[step].title}
            </Text>
            <Text
              style={tw(
                'mt-17 mb-40 text-#FFFFFF text-15 font-normal text-center',
              )}>
              {OnboardingData[step].description}
            </Text>
          </View>
          <View style={tw('flex-row justify-between items-center mb-1')}>
            <TouchableOpacity
              disabled={!disabledButton}
              onPress={() => {
                requestAnimationFrame(() => {
                  if (step > 0) {
                    setStep(state => (state -= 1));
                    setDisabledButton(true);
                    scrollRef.current &&
                      scrollRef.current.scrollTo({
                        x: translateX.value - wD,
                        y: 0,
                      });
                  }
                });
              }}>
              <Text style={tw('text-18 font-medium text-#FFFFFF')}>
                {step > 0 ? 'Prev' : 'Skip'}
              </Text>
            </TouchableOpacity>
            <View style={tw('flex-row')}>
              {OnboardingData.map((_, index) => {
                return (
                  <View
                    key={index}
                    style={tw(
                      `h-[8] w-[8] mx-5 rounded-full ${
                        index === step ? 'bg-#FFFFFF' : 'bg-#FFFFFF80'
                      }`,
                    )}
                  />
                );
              })}
            </View>
            <TouchableOpacity
              disabled={!disabledButton}
              onPress={() => {
                requestAnimationFrame(() => {
                  if (step < dataSize - 1) {
                    setStep(state => (state += 1));
                    setDisabledButton(true);
                    scrollRef.current &&
                      scrollRef.current.scrollTo({
                        x: translateX.value + wD,
                        y: 0,
                      });
                  }
                });
              }}>
              <Text style={tw('text-18 font-medium text-#FFFFFF ')}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
// translateX.value >= 390 &&
//   scrollRef.current &&
//   scrollRef.current.scrollTo({
//     x: translateX.value - 390,
//     y: 0,
//   });
