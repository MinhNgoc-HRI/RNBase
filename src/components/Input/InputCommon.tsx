import React, { useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTailwind } from 'tailwind-rn/dist';
import Hidden from '@src/assets/svgs/Components/ic_hidden.svg';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';
export interface InputCommonProps extends Omit<TextInputProps, 'style'> {
  icon: React.FC<SvgProps>;
  title: string;
}
const AnimationConfig: WithTimingConfig = {
  duration: 500,
};
const InputCommon = ({
  icon: Icon,
  title,
  placeholder,
  onFocus,
  onBlur,
  secureTextEntry,
  ...props
}: InputCommonProps) => {
  const tw = useTailwind();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(
    secureTextEntry ? secureTextEntry : false,
  );
  const watchIsFocused = useDerivedValue(() => {
    return isFocused;
  });
  const rtitleStyle = useAnimatedStyle(() => {
    return {
      width: watchIsFocused.value ? 'auto' : 0,
      opacity: watchIsFocused.value
        ? withTiming(1, AnimationConfig)
        : withTiming(0, AnimationConfig),
      top: watchIsFocused.value
        ? withTiming(-10, AnimationConfig)
        : withTiming(24, AnimationConfig),
      left: watchIsFocused.value
        ? withTiming(15, AnimationConfig)
        : withTiming(57, AnimationConfig),
      watchIsFocused: [
        {
          translateY: watchIsFocused.value
            ? withTiming(14, AnimationConfig)
            : withTiming(0, AnimationConfig),
        },
      ],
    };
  }, [watchIsFocused]);
  const showPassword = useCallback(() => {
    setIsShow(state => !state);
  }, []);
  return (
    <View
      style={[
        tw(
          'w-full min-w-280 flex-row justify-between items-center bg-#FFFFFF py-18 px-15 rounded-15 my-8',
        ),
      ]}>
      <View style={tw('w-24 h-24 justify-center items-center')}>
        <Icon />
      </View>
      <View style={tw('flex-1 flex-row px-18 items-center')}>
        <View style={tw('flex-1')}>
          <TextInput
            style={tw('flex-1')}
            {...props}
            placeholder={!isFocused ? placeholder : undefined}
            placeholderTextColor={'#747688'}
            onFocus={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
              onFocus && onFocus(event);
              setIsFocused(true);
            }}
            onBlur={(event: NativeSyntheticEvent<TextInputFocusEventData>) => {
              onBlur && onBlur(event);

              setIsFocused(false);
            }}
            secureTextEntry={isShow}
            multiline={false}
          />
        </View>
      </View>
      <TouchableOpacity onPress={showPassword}>
        {secureTextEntry && <Hidden />}
      </TouchableOpacity>
      {title && (
        <Animated.View
          pointerEvents={'box-only'}
          style={[tw('flex-row items-center absolute text-14'), rtitleStyle]}>
          <Text
            style={tw('flex-1 font-medium text-16 text-#5669FF')}
            numberOfLines={1}>
            {title}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default React.memo(InputCommon);
