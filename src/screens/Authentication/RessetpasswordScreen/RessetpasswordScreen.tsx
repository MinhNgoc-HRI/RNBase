import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '@src/App';
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Text, View, TouchableOpacity } from 'react-native';
import IconArrow from '@src/assets/svgs/SigninScreen/ic_arrow_right.svg';
import IconMail from '@src/assets/svgs/SigninScreen/ic_mail.svg';
import ButtonCommon from '@src/components/Button/ButtonCommon';
import InputCommon from '@src/components/Input/InputCommon';
import { CompositeScreenProps } from '@react-navigation/native';

type Props = CompositeScreenProps<
  NativeStackScreenProps<AuthStackParamList, 'RessetpasswordScreen'>,
  NativeStackScreenProps<RootStackParamList>
>;
const RessetpasswordScreen = ({}: Props) => {
  const tw = useTailwind();

  return (
    <View style={tw('flex-1 bg-#FFFFFF')}>
      <View style={tw('mx-30 mb-30')}>
        <Text style={tw('text-24 font-medium')}>Resset Password</Text>
        <View style={tw('mt-15')}>
          <Text style={tw('text-15 text-#120D26 font-normal')}>
            Please enter your email address to
          </Text>
          <Text style={tw('text-15 text-#120D26 font-normal')}>
            request a password reset
          </Text>
          <View style={tw('my-20')}>
            <InputCommon
              icon={IconMail}
              title={'Email'}
              placeholder={'abc@email.com'}
            />
          </View>
          <View style={tw('mx-20')}>
            <ButtonCommon title={'SEND'} icon={IconArrow} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default React.memo(RessetpasswordScreen);
