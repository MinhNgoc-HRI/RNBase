import React, { useRef } from 'react';
import type { View } from 'react-native';
import equals from 'react-fast-compare';
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';
import {
  setVector,
  setVectorLayout,
  useTooltip,
  useVector,
  useVectorLayout,
} from '@src/components/Tooltip/hook';
import type { TooltipStepType } from '@src/components/Tooltip/types';

function TooltipStep(props: TooltipStepType) {
  const { children, id, describe, title, maskType = 'rect', scrollTo } = props;
  const target = useVectorLayout();
  const targetPosition = useVector();
  const { addNode, debug } = useTooltip();
  const nodeRef = useRef<View>();

  useAnimatedReaction(
    () => {
      return scrollTo?.value;
    },
    scroll => {
      if (scroll) {
        target.x.value = targetPosition.x.value + scroll.x;
        target.y.value = targetPosition.y.value - scroll.y;
        runOnJS(addNode)({
          id,
          title,
          describe,
          onPress: children.props.onPress,
          maskType,
          target,
        });
      }
    },
  );

  const onLayout = () => {
    // global method react-native
    requestAnimationFrame(() => {
      nodeRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
        const layout = {
          x: pageX,
          y: pageY,
          width,
          height,
        };
        setVectorLayout(target, layout);
        setVector(targetPosition, {
          x: layout.x,
          y: layout.y,
        });

        debug && console.log('ADD_NODE::', id, target, layout);
        addNode({
          id,
          title,
          describe,
          onPress: children.props.onPress,
          maskType,
          target,
        });
      });
    });
  };

  return React.cloneElement(children, {
    ref: nodeRef,
    onLayout,
  });
}

export default React.memo(TooltipStep, equals);
