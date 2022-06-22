import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import dimens from '@src/constants/dimens';
import IconMenu from '@src/assets/svgs/Home/ic_menu.svg';
import IconNoti from '@src/assets/svgs/Home/ic_noti.svg';
import IconDropdown from '@src/assets/svgs/Home/ic_dropdown.svg';
import navigationService from '@src/navigation/navigationService';
const HomeScreen = ({}) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1')}>
      <ImageBackground
        style={tw('flex-1 flex')}
        source={require('@src/assets/images/Background/Home.png')}
        resizeMode={'cover'}>
        <SafeAreaView
          style={[
            tw('flex-row items-center bg-transparent justify-between h-100'),
            { paddingTop: dimens.avoidStatusBarDistance },
          ]}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <View
            style={tw(
              'absolute left-0 bottom-0 right-0 flex-row items-center justify-between p-10',
            )}>
            <TouchableOpacity onPress={() => navigationService.toggleDrawer()}>
              <IconMenu width={24} height={24} />
            </TouchableOpacity>
            <View style={tw('justify-self-center')}>
              <View style={tw('flex-row items-center')}>
                <Text style={tw('text-12 font-normal text-#FAFAFA mr-5')}>
                  Current Location
                </Text>
                <IconDropdown />
              </View>
              <Text style={tw('text-14 font-medium text-#FAFAFA')}>
                New Yourk, USA
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigationService.toggleDrawer()}>
              <IconNoti width={34} height={34} />
            </TouchableOpacity>
          </View>
          <View style={tw('absolute top-179 w-20 h-20 bg-#000000')} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default React.memo(HomeScreen);
