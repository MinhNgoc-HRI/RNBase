import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
    fontSize: 1,
    ...Platform.select({
      web: {
        width: '100%',
        fontSize: 16,
      },
    }),
  },
});
