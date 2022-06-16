import ButtonCommon from '@src/components/Button/ButtonCommon';
import React from 'react';
import { View } from 'react-native';
import IconArrowRight from '@src/assets/svgs/SigninScreen/ic_arrow_right.svg';
import { useTailwind } from 'tailwind-rn/dist';
import InputCommon from '@src/components/Input/InputCommon';
import IconMail from '@src/assets/svgs/SigninScreen/ic_mail.svg';
const AuthScreen = () => {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <ButtonCommon
        title={'Button'}
        icon={IconArrowRight}
        // style={{ width: '100%' }}
      />
      <InputCommon
        icon={IconMail}
        multiline={true}
        placeholder={'Your password'}
        placeholderTextColor={'#000000'}
      />
    </View>
  );
};

export default React.memo(AuthScreen);
