// @ts-check

/**
 * @typedef {object} AnimeDetails
 * @property {number} id
 * @property {string} title
 * @property {number|null} episodes
 * @property {number|null} score
 * @property {string[]} genres
 * @property {string} synopsis
 * @property {string} imageUrl
 * @property {string} rating
 * @property {string} airingYears
 */

/**
 * @typedef {object} AnimeDetailsInput
 * @property {number} id
 * @property {string} title
 * @property {number|null} [episodes]
 * @property {number|null} [score]
 * @property {string[]} [genres]
 * @property {string} [synopsis]
 * @property {string} [imageUrl]
 * @property {string} [rating]
 * @property {string} [airingYears]
 */

/**
 * @param {AnimeDetailsInput} input
 * @returns {AnimeDetails}
 */
export function createAnimeDetails(input) {
  const {
    id,
    title,
    episodes = null,
    score = null,
    genres = [],
    synopsis = '',
    imageUrl = '',
    rating = '',
    airingYears = '',
  } = input;

  if (typeof id !== 'number') throw new TypeError('id must be a number');
  if (typeof title !== 'string' || !title)
    throw new TypeError('title is required');

  return {
    id,
    title,
    episodes,
    score,
    genres,
    synopsis,
    imageUrl,
    rating,
    airingYears,
  };
}
