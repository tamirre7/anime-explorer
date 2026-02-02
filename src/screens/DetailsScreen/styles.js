import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const detailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
    resizeMode: 'cover',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  genres: {
    fontSize: 14,
    color: colors.accent,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  metaItem: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  synopsis: {
    fontSize: 15,
    color: colors.text,
    opacity: 0.85,
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  rating: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.7,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});
