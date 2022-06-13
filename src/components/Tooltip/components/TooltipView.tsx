import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useContext,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import equals from 'react-fast-compare';
import {
  Keyboard,
  Modal,
  BackHandler,
  NativeEventSubscription,
} from 'react-native';
import { useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';
import { TooltipContext } from '@src/components/Tooltip/components/TooltipContext';
import { useEvent } from '@src/components/Tooltip/hook';
import MashView from '@src/components/Tooltip/components/MaskView';
import { timingConfig } from '@src/components/Tooltip/math';

interface TooltipViewProps {}

function TooltipView(_: TooltipViewProps, ref: React.Ref<any>) {
  const [visible, setVisible] = useState(false);
  const { nodes, scenes, sceneIndex, options } = useContext(TooltipContext);
  const { emitEvent } = useEvent();
  const progress = useSharedValue(0);
  const currentStep = useSharedValue(0);
  const backHandler = useRef<NativeEventSubscription>();

  const handleBackButton = () => {
    if (options?.backAndroidToSkip) {
      onStop();
    }
    return true;
  };

  const open = useCallback(
    step => {
      Keyboard.dismiss();
      backHandler.current = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackButton,
      );

      if (scenes[sceneIndex]?.length > 0) {
        setVisible(true);
        currentStep.value = step ?? 0;
        progress.value = withTiming(1, timingConfig);

        const scene = scenes[sceneIndex][currentStep.value];

        emitEvent('TooltipEvent', {
          name: 'onStart',
          step: currentStep.value,
          node: nodes.value.find(n => n.id === scene.id),
          scene,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sceneIndex, scenes, backHandler],
  );

  const onStop = useCallback(
    (callback?: () => void) => {
      if (backHandler.current) {
        backHandler.current.remove();
      }

      progress.value = withTiming(0, timingConfig, () => {
        runOnJS(setVisible)(false);
        if (callback) {
          runOnJS(callback)();
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [backHandler],
  );

  useEffect(() => {
    return () => {
      if (backHandler.current) {
        backHandler.current.remove();
      }
    };
  }, [backHandler]);

  useImperativeHandle(ref, () => ({
    nextStep: () => {
      const nextValue = currentStep.value + 1;
      const sceneLength = scenes[sceneIndex].length;

      if (nextValue <= sceneLength - 1) {
        currentStep.value = nextValue;
      } else {
        onStop();
      }
    },
    preStep: () => {
      const preValue = currentStep.value - 1;

      if (preValue >= 0) {
        currentStep.value = preValue;
      } else {
        onStop();
      }
    },
    stop: (cb: () => void) => {
      onStop(cb);
    },
    start: (step: number) => {
      open(step);
    },
    currentStep: () => {
      return currentStep.value;
    },
  }));

  if (!visible) return null;

  if (options?.nativeModal) {
    return (
      <Modal visible={visible} transparent animationType="none">
        <MashView
          onStop={onStop}
          open={open}
          progress={progress}
          currentStep={currentStep}
          scene={scenes[sceneIndex]}
        />
      </Modal>
    );
  }

  return (
    <MashView
      onStop={onStop}
      open={open}
      progress={progress}
      currentStep={currentStep}
      scene={scenes[sceneIndex]}
    />
  );
}

export default React.memo(forwardRef(TooltipView), equals);
