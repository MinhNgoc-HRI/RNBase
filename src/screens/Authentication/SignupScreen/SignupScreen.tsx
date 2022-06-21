import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '@src/App';
import {
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import IconPass from '@src/assets/svgs/SigninScreen/ic_pass.svg';
import IconMail from '@src/assets/svgs/SigninScreen/ic_mail.svg';
import IconPerson from '@src/assets/svgs/SigninScreen/ic_person.svg';
import InputCommon from '@src/components/Input/InputCommon';
import IconArrow from '@src/assets/svgs/SigninScreen/ic_arrow_right.svg';
import IconGmail from '@src/assets/svgs/SigninScreen/ic_gmail.svg';
import IconFb from '@src/assets/svgs/SigninScreen/ic_fb.svg';
import ButtonCommon from '@src/components/Button/ButtonCommon';
import { ButtonSocial } from '../SigninScreen/SigninScreen';
import { CompositeScreenProps } from '@react-navigation/native';
type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'SignupScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
const SignupScreen = ({ navigation }: Props) => {
  const tw = useTailwind();
  return (
    <KeyboardAvoidingView
      style={tw('flex-1 bg-#FFFFFF')}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={tw('flex-1')}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={tw('mx-30 mb-30')}>
            <Text style={tw('text-24 font-medium')}>Sign up</Text>
            <View style={tw('mt-10')}>
              <InputCommon
                icon={IconPerson}
                title={'Name'}
                placeholder={'Full name'}
                secureTextEntry={false}
              />
            </View>
            <View style={tw('mt-10')}>
              <InputCommon
                icon={IconPass}
                title={'Password'}
                placeholder={'Your password'}
                secureTextEntry={false}
              />
            </View>
            <View style={tw('mt-10')}>
              <InputCommon
                icon={IconMail}
                title={'Email'}
                placeholder={'abcd@email.com'}
                secureTextEntry={true}
              />
            </View>
            <View style={tw('mt-10')}>
              <InputCommon
                icon={IconPass}
                title={'Password'}
                placeholder={'Confirm password'}
                secureTextEntry={true}
              />
            </View>
            <View style={tw('mx-20 mt-20')}>
              <ButtonCommon
                title={'SIGN UP'}
                icon={IconArrow}
                onPress={() => navigation.navigate('VerificationScreen')}
              />
            </View>
            <View
              style={tw('mx-20 mt-24 flex-col items-center justify-center')}>
              <Text style={tw('text-16 text-#9D9898 font-medium')}>OR</Text>
              <View style={tw('w-full mt-17')}>
                <ButtonCommon
                  title={
                    <ButtonSocial icon={IconGmail} title={'Login with Gmail'} />
                  }
                  backgroundColor={'#FFFFFF'}
                />
              </View>
              <View style={tw('w-full mt-17')}>
                <ButtonCommon
                  title={
                    <ButtonSocial icon={IconFb} title={'Login with Facebook'} />
                  }
                  backgroundColor={'#FFFFFF'}
                />
              </View>
              <View style={tw('flex-row mt-15')}>
                <Text style={tw('text-15 text-#120D26')}>
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SigninScreen');
                  }}>
                  <Text style={tw('text-15 text-#3D56F0')}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SignupScreen);
