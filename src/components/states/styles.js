import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const stateStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    padding: 16,
  },
  containerWithGap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg,
    padding: 16,
    gap: 16,
  },
  text: {
    color: colors.text,
    textAlign: 'center',
  },
});
