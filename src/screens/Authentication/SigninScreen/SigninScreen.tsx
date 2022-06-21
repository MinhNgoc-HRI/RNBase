import React, { useCallback, useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Switch,
  SwitchChangeEvent,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '@src/App';
import IconApp from '@src/assets/svgs/SigninScreen/ic_appicon.svg';
import IconMail from '@src/assets/svgs/SigninScreen/ic_mail.svg';
import IconPass from '@src/assets/svgs/SigninScreen/ic_pass.svg';
import IconArrow from '@src/assets/svgs/SigninScreen/ic_arrow_right.svg';
import IconGmail from '@src/assets/svgs/SigninScreen/ic_gmail.svg';
import IconFb from '@src/assets/svgs/SigninScreen/ic_fb.svg';
import { useTailwind } from 'tailwind-rn/dist';
import InputCommon from '@src/components/Input/InputCommon';
import ButtonCommon from '@src/components/Button/ButtonCommon';
import { SvgProps } from 'react-native-svg';
import { CompositeScreenProps } from '@react-navigation/native';
type ButtonSocialProps = {
  icon: React.FC<SvgProps>;
  title: string;
};
export const ButtonSocial = ({ icon: Icon, title }: ButtonSocialProps) => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-row justify-between items-center')}>
      <Icon />
      <Text style={tw('text-16 text-#120D26 ml-20')}>{title}</Text>
    </View>
  );
};
type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'SigninScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
const SigninScreen = ({ navigation, route }: Props) => {
  const tw = useTailwind();
  const [s, setS] = useState<boolean>(false);
  const switchHandle = useCallback((event: SwitchChangeEvent) => {
    setS(state => !state);
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw('flex-1 flex-col bg-#FFFFFF')}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={tw('flex-1')}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={tw('items-center mt-70')}>
            <IconApp />
            <Text style={tw('leading-48 text-##37364A text-35 font-medium')}>
              EventHub
            </Text>
          </View>
          <View style={tw('m-30')}>
            <Text style={tw('text-24 font-medium')}>Sign in</Text>
            <View style={tw('my-10')}>
              <InputCommon
                icon={IconMail}
                title={'Email'}
                placeholder={'abc@email.com'}
              />
            </View>
            <View style={tw('mt-10')}>
              <InputCommon
                icon={IconPass}
                title={'Password'}
                placeholder={'Your password'}
                secureTextEntry={true}
              />
            </View>
            <View
              style={tw('mt-15 mb-30 flex-row justify-between items-center')}>
              <View style={tw('flex-row justify-between items-center')}>
                <Switch
                  value={s}
                  trackColor={{
                    false: '#FFFFFF',
                    true: '#3D56F0',
                  }}
                  ios_backgroundColor={s ? '#3D56F0' : '#FFFFFF'}
                  onChange={switchHandle}
                />
                <Text style={tw('ml-10 text-#120D26 text-14')}>
                  Remember Me
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RessetpasswordScreen');
                }}>
                <Text style={tw('text-#120D26 text-14')}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={tw('mx-20')}>
              <ButtonCommon
                title={'SIGN IN'}
                icon={IconArrow}
                onPress={() =>
                  navigation.navigate('MainScreen', {
                    screen: 'HomeScreen',
                  })
                }
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
                  Don’t have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignupScreen');
                  }}>
                  <Text style={tw('text-15 text-#3D56F0')}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SigninScreen);
