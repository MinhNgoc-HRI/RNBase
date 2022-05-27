import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export default function (props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
}
