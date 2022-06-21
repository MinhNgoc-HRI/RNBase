import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@src/App';
import React from 'react';
import { View } from 'react-native';

// type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
const HomeScreen = ({}) => {
  return <View />;
};

export default React.memo(HomeScreen);
