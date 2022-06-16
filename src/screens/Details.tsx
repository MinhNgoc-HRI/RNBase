import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;
const Details = ({ navigation, route }: Props) => {
  return (
    <View style={styles.root}>
      {/* <Text>Detail</Text>
      <Button
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Cat',
            params: {
              sort: [],
            },
          });
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
                state: {
                  index: 0,

                  routes: [
                    {
                      name: 'Cat',

                      params: {
                        sort: true,
                      },
                    },
                  ],
                },
              },
            ],
          });
        }}
      /> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
