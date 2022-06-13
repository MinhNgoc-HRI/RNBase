import React from 'react';
import type { TooltipContextType } from '@src/components/Tooltip/types';

// @ts-ignore
export const TooltipContext = React.createContext<TooltipContextType>({
  // nodes: [],
  sceneIndex: 0,
  scenes: [],
  setSceneIndex: () => {},
});
