import { Dimensions, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default {
  // screen
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  statusBarHeight: Platform.select({
    ios: DeviceInfo.hasNotch() ? 44 : 20,
    default: StatusBar.currentHeight || 24,
  }),
  avoidStatusBarDistance: Platform.select({
    ios: DeviceInfo.hasNotch() ? 44 : 20,
    default: (StatusBar.currentHeight || 24) + 8,
  }),
};
