import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const filtersStyles = StyleSheet.create({
  triggerWrap: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
    marginHorizontal: 10,
    marginTop: 20,
  },

  trigger: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  triggerText: {
    color: colors.text,
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.45)',
  },

  sheet: {
    backgroundColor: colors.surface,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  sheetTitle: {
    color: colors.muted,
    marginBottom: 10,
  },

  option: {
    paddingVertical: 12,
  },
  optionText: {
    color: colors.text,
  },
  optionTextActive: {
    color: colors.accent,
    fontWeight: '700',
  },
});
