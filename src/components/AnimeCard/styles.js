import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const animeCardStyles = StyleSheet.create({
  seriesCard: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  seriesImage: {
    aspectRatio: 2 / 3,
    width: '100%',
    borderRadius: 10,
    marginBottom: 8,
  },
  seriesTitle: {
    color: colors.text,
  },
  seriesMetaData: {
    color: colors.text,
    opacity: 0.85,
  },
  seriesDataContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  star: {
    color: colors.accent,
  },
});
