import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { type CompositeScreenProps } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamlist, RootStackParamList } from '../../App';

type CatScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'Home'>,
  NativeStackScreenProps<HomeStackParamlist>
>;
const CatScreen = ({ navigation, route }: CatScreenProps) => {
  return (
    <View style={styles.root}>
      <Text>AAAAA</Text>
      <Button
        onPress={() => {
          // navigation.navigate('Detail');
        }}
        title={'Click me'}
      />
    </View>
  );
};

export default CatScreen;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
