import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTailwind } from 'tailwind-rn/dist';
export interface ButtonCommonProps
  extends Omit<TouchableOpacityProps, 'style'> {
  title: string;
  icon: React.FC<SvgProps>;
  backgroundColor?: string;
  style?: ViewStyle;
}
const ButtonCommon = ({
  title = '',
  icon: Icon,
  backgroundColor = '#5669FF',
  style,
  ...props
}: ButtonCommonProps) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity
      {...props}
      style={[
        tw(
          `min-w-200 justify-center items-center bg-${backgroundColor} py-18 rounded-15`,
        ),
        style,
      ]}>
      <Text style={tw('text-16 font-normal text-#FFFFFF')}>{title}</Text>
      <View style={tw('absolute top-14 bottom-14 right-14')}>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonCommon);
