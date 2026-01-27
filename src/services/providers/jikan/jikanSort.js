import { ANIME_SORT } from '../../../constants/animeSort';

export function sortAnimeLocally(items, sort) {
  const arr = [...items];

  switch (sort) {
    case ANIME_SORT.YEAR_DESC:
      return arr.sort((a, b) => (b.yearStart ?? 0) - (a.yearStart ?? 0));

    case ANIME_SORT.SCORE_DESC:
      return arr.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

    case ANIME_SORT.TITLE_ASC:
      return arr.sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''));

    case ANIME_SORT.TRENDING_DESC:
    case ANIME_SORT.POPULARITY_DESC:
    default:
      return arr;
  }
}
