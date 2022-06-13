import {
  Button,
  Image,
  Modal,
  View,
  LayoutChangeEvent,
  Text,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
// import Animated, { measure, useSharedValue } from 'react-native-reanimated';
import TooltipProvider, {
  Tooltip,
} from '@src/components/Tooltip/components/TooltipProvider';
import TooltipStep from '@src/components/Tooltip/components/TooltipStep';
import { useEvent } from '@src/components/Tooltip/hook';
const Welcome = () => {
  const tw = useTailwind();
  const { addEventListener, removeEventListener } = useEvent();

  useEffect(() => {
    // Listener AppTour Event
    const id = addEventListener('TooltipEvent', event => {
      console.log({ node: event.node });
      console.log('TooltipEvent', event.name, event.node?.id);
    });

    return () => {
      removeEventListener(id);
    };
  }, []);

  const onStartAppTour = () => {
    // Start show AppTour
    // Use AppTour.start(step) to jump to step
    Tooltip.start();
  };

  return (
    <TooltipProvider
      sceneIndex={0}
      scenes={[
        [{ id: '1' }, { id: '2' }],
        [{ id: '2' }, { id: '1' }],
      ]}>
      <View style={tw('flex-1')}>
        <View style={tw('w-200 h-200 bg-red')} />
        <View style={tw('w-200 h-200 bg-blue')}>
          <TooltipStep
            id="1"
            title="Text welcome"
            describe="This is welcome title app">
            {/* <React.Fragment> */}
            <View
              style={[
                tw('w-40 h-40 bg-white'),
                { position: 'absolute', top: 50, left: 50 },
              ]}
            />

            {/* </React.Fragment> */}
          </TooltipStep>
          <Button
            title="Button"
            onPress={() => {
              onStartAppTour();
            }}
          />
          <TooltipStep
            id="2"
            title="Text welcome 2"
            describe="This is welcome title app">
            <View style={[tw('w-40 h-40 bg-red')]} />
          </TooltipStep>
          <Button title="Button" onPress={() => {}} />
        </View>
      </View>
    </TooltipProvider>
  );
};

export default Welcome;
