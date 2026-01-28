import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const searchBarStyles = StyleSheet.create({
  container: {
    gap: 3,
    margin: 10,
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
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    padding: 7,
  },
  inactiveSearchMethod: {
    fontSize: 12,
    color: colors.text,
  },

  activeSearchMethod: {
    fontSize: 15,
    color: 'lightblue',
    fontWeight: '500',
  },
});
