import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const animeCardStyles = StyleSheet.create({
  seriesCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  spacer: {
    flexGrow: 1,
  },
  seriesImage: {
    aspectRatio: 2 / 3,
    width: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 6,
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
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
