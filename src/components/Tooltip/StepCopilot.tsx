import { Modal, View, LayoutChangeEvent } from 'react-native';
import React from 'react';
import { useRef } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import Animated from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Position, WraperComponentProps } from '@src/components/Tooltip/types';
const WraperComponent = ({
  children,
  visible = false,
}: WraperComponentProps) => {
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
          <Animated.View style={[tw('absolute'), { top, left }]}>
            {React.cloneElement(children)}
          </Animated.View>
        </View>
      </Modal>
    </React.Fragment>
  );
};
