import {
  Button,
  Image,
  Modal,
  View,
  LayoutChangeEvent,
  Text,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import Animated, { measure, useSharedValue } from 'react-native-reanimated';
export type Position = {
  top: number;
  left: number;
};
const WraperComponent = ({
  children,
  visible = false,
}: {
  children: React.ReactElement;
  visible?: boolean;
}) => {
  const tw = useTailwind();
  const refView = useRef<View>(null);
  const position = useSharedValue<Position>({
    top: 0,
    left: 0,
  });
  const { top, left } = position.value;
  return (
    <React.Fragment>
      <View
        ref={refView}
        onLayout={(event: LayoutChangeEvent) => {
          console.log('on layout');
          console.log({ event });
          refView &&
            refView.current &&
            refView.current.measure(
              (x, y, h, w, px, py) => (position.value = { top: py, left: px }),
            );
        }}>
        {children}
      </View>
      <Modal visible={visible} transparent={true} animationType={'fade'}>
        <View style={tw('flex-1 bg-backdrop')}>
          {/* <View style={tw('flex-1 absolute bg-red')} /> */}
          <Animated.View style={[tw('absolute'), { top, left }]}>
            {React.cloneElement(children)}
            {/* {children} */}
          </Animated.View>
          <Text>Skip</Text>
        </View>
      </Modal>
    </React.Fragment>
  );
};

const Welcome = () => {
  const tw = useTailwind();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  return (
    <View style={tw('flex-1')}>
      <View style={tw('w-200 h-200 bg-red')} />
      <View style={tw('w-200 h-200 bg-blue')}>
        <WraperComponent visible={visible}>
          <React.Fragment>
            <View
              style={[
                tw('w-40 h-40 bg-white'),
                { position: 'absolute', top: 50, left: 50 },
              ]}
            />
            <Button
              title="Button"
              onPress={() => {
                setVisible1(true);
                setVisible(false);
              }}
            />
          </React.Fragment>
        </WraperComponent>
        <WraperComponent visible={visible1}>
          <View style={[tw('w-40 h-40 bg-red')]} />
        </WraperComponent>
        <Button
          title="Button"
          onPress={() => {
            setVisible(true);
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
