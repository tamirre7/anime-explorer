import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const searchBarStyles = StyleSheet.create({
  container: {
    gap: 3,
    marginLeft: 10,
    marginRight: 10,
  },
  pressableContainer: {
    flexDirection: 'row',
    gap: 20,
    marginLeft: 25,
  },
  textInput: {
    backgroundColor: colors.surface,
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.bg,
    borderRadius: 10,
    padding: 7,
  },
  inactiveSearchMethod: {
    fontSize: 12,
    color: colors.muted,
  },

  activeSearchMethod: {
    fontSize: 15,
    color: 'lightblue',
    fontWeight: '500',
  },
});
