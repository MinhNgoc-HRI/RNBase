import React from 'react';
import { Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTailwind } from 'tailwind-rn/dist';
import Hidden from '@src/assets/svgs/Components/ic_hidden.svg';
export interface InputCommonProps extends Omit<TextInputProps, 'style'> {
  icon: React.FC<SvgProps>;
  style?: ViewStyle;
}
const InputCommon = ({
  icon: Icon,
  placeholder,
  style,
  ...props
}: InputCommonProps) => {
  const tw = useTailwind();
  return (
    <View
      style={[
        tw(
          'min-w-280 flex-row justify-between items-center bg-#FFFFFF py-18 px-15 rounded-15',
        ),
        style,
      ]}>
      <View>
        <Icon />
      </View>
      <View style={tw('flex-1 flex-row px-18 items-center')}>
        <View style={tw('flex-1')}>
          <TextInput
            style={tw('flex-1')}
            {...{ ...props, placeholder: placeholder }}
          />
        </View>
      </View>
      <View>
        <Hidden />
      </View>
      {placeholder && (
        <View style={[tw('flex-row items-center absolute left-22')]}>
          <Text style={tw('flex-1')} numberOfLines={1}>
            {placeholder}
          </Text>
        </View>
      )}
    </View>
  );
};

export default React.memo(InputCommon);
