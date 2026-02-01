import { ANIME_SORT } from '../../../constants/animeSort';

export const jikanSortMap = {
  [ANIME_SORT.TRENDING_DESC]: { order_by: 'popularity', sort: 'asc' },
  [ANIME_SORT.POPULARITY_DESC]: { order_by: 'popularity', sort: 'asc' },
  [ANIME_SORT.SCORE_DESC]: { order_by: 'score', sort: 'desc' },
  [ANIME_SORT.YEAR_DESC]: { order_by: 'start_date', sort: 'desc' },
  [ANIME_SORT.TITLE_ASC]: { order_by: 'title', sort: 'asc' },
};


export function buildSortQuery(sort) {
  const mapping = jikanSortMap[sort] ?? jikanSortMap[ANIME_SORT.TRENDING_DESC];
  return `order_by=${mapping.order_by}&sort=${mapping.sort}`;
}
