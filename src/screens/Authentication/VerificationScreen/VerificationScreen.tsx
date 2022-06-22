import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '@src/App';
import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import CodeInputAnimated from '@src/screens/Authentication/VerificationScreen/components/CodeInputAnimated';
import IconArrow from '@src/assets/svgs/SigninScreen/ic_arrow_right.svg';
import ButtonCommon from '@src/components/Button/ButtonCommon';
import { CompositeScreenProps } from '@react-navigation/native';
type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'VerificationScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
const VerificationScreen = ({ navigation }: Props) => {
  const tw = useTailwind();
  return (
    <KeyboardAvoidingView
      style={tw('flex-1 bg-#FFFFFF')}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw('flex-1')}>
          <View style={tw('mx-30 mb-30')}>
            <Text style={tw('text-24 font-medium')}>Verification</Text>
            <View style={tw('mt-15')}>
              <Text style={tw('text-15 text-#120D26 font-normal')}>
                We’ve send you the verification{' '}
              </Text>
              <Text style={tw('text-15 text-#120D26 font-normal')}>
                code on +1 2620 0323 7631
              </Text>
              <CodeInputAnimated />
              <View style={tw('mx-20')}>
                <ButtonCommon title={'CONTINUE'} icon={IconArrow} />
              </View>
              <View style={tw('flex-row mt-25 justify-center')}>
                <Text style={tw('text-15 text-#120D26')}>Re-send code in </Text>
                <TouchableOpacity
                  onPress={() => {
                    // do somethings;
                    navigation.navigate('MainScreen', {
                      screen: 'HomeDrawerStack',
                      params: {
                        screen: 'HomeScreen',
                      },
                    });
                  }}>
                  <Text style={tw('text-15 text-#3D56F0')}>0:20</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default React.memo(VerificationScreen);
