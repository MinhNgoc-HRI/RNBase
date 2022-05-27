import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '@src/components/Button';
import { type CompositeScreenProps } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamlist, RootStackParamList } from '../../../App';
type CatScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, 'Home'>,
  NativeStackScreenProps<HomeStackParamlist>
>;
const CatScreen = ({ navigation, route }: CatScreenProps) => {
  console.log(route.params);
  return (
    <View style={styles.root}>
      <Text>AAAAA</Text>
      <Button
        onPress={() => {
          navigation.navigate('Detail');
        }}
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
  },
});
