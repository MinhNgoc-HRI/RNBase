import React, { useRef, useState } from 'react';
import equals from 'react-fast-compare';
import { useSharedValue } from 'react-native-reanimated';
import TooltipView from '@src/components/Tooltip/components/TooltipView';
import { TooltipContext } from './TooltipContext';
import type {
  TooltipType,
  OptionType,
  ScenesType,
} from '@src/components/Tooltip/types';

interface TooltipProviderProps {
  children: React.ReactNode;
  options?: OptionType;
  scenes: ScenesType;
  sceneIndex?: number;
}

TooltipProvider.defaultProps = {};

let Tooltip: TooltipType;

function TooltipProvider(props: TooltipProviderProps) {
  const { children, options } = props;
  const [sceneIndex, setSceneIndex] = useState<number>(props.sceneIndex ?? 0);
  const nodes = useSharedValue([]);
  const scenes = useRef(props.scenes ?? []).current;

  return (
    <TooltipContext.Provider
      value={{ nodes, options, scenes, sceneIndex, setSceneIndex }}>
      {children}
      <TooltipView
        ref={ref => {
          Tooltip = ref;
        }}
      />
    </TooltipContext.Provider>
  );
}

export default React.memo(TooltipProvider, equals);

export { Tooltip };
