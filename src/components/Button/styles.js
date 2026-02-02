import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const buttonStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  iconOnly: {
    paddingHorizontal: 10,
  },
  primary: {
    backgroundColor: colors.accent,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
  textPrimary: {
    color: colors.bg,
  },
  textSecondary: {
    color: colors.text,
  },
});
