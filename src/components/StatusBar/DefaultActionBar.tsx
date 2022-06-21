import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  TextStyle,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dimens from '@src/constants/dimens';
import navigationService from '@src/navigation/navigationService';
import { useTailwind } from 'tailwind-rn/dist';
import IconBackHeader from '@src/assets/svgs/Components/ic_back.svg';
import IconSearch from '@src/assets/svgs/Components/ic_search.svg';
const DefaultActionBar = ({
  title,
  iconType = 'back',
  rightIconType,
  rightText = '',
  rightTextStyle,
  onPressLeft,
  onPressRight,
  disabled,
}: {
  title?: string;
  iconType?: 'close' | 'back' | 'none';
  rightIconType?: 'search';
  rightText?: string;
  rightTextStyle?: TextStyle;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  disabled?: boolean;
}): React.ReactElement => {
  const tw = useTailwind();
  return (
    <SafeAreaView
      style={[
        tw('flex-row items-center bg-#FFFFFF justify-between h-100'),
        { paddingTop: dimens.avoidStatusBarDistance },
      ]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={tw('absolute left-0 right-0 bottom-0 p-16')}>
        <Text
          style={tw(
            'text-18 font-bold text-#120D26 text-center items-stretch flex-1',
          )}>
          {title || ''}
        </Text>
      </View>
      <View style={tw('absolute left-0 bottom-0')}>
        <TouchableOpacity
          onPressIn={() =>
            onPressLeft ? onPressLeft() : navigationService.goBack()
          }
          style={tw('p-16 justify-center items-center')}
          disabled={iconType === 'none'}>
          {iconType === 'back' && <IconBackHeader width={20} height={20} />}
        </TouchableOpacity>
      </View>
      <View style={tw('absolute right-0 bottom-0')}>
        {rightIconType === undefined ? (
          <TouchableOpacity
            disabled={disabled}
            onPressIn={() => onPressRight && onPressRight()}
            style={tw('py-16')}>
            <Text
              style={[
                tw('mr-20 text-16 font-bold text-#120D26 text-center self-end'),
                rightTextStyle,
                disabled && tw('opacity-50'),
              ]}>
              {rightText}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => onPressRight && onPressRight()}
            style={tw('pr-16 pt-2')}>
            {rightIconType === 'search' && (
              <IconSearch width={20} height={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DefaultActionBar);
