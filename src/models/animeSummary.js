// @ts-check

/**
 * @typedef {object} AnimeDetails
 * @property {number} id
 * @property {string} title
 * @property {number|null} score
 * @property {string[]} genres
 * @property {string} imageUrl
 * @property {string} airingYears
 */

/**
 * @typedef {object} AnimeSummaryInput
 * @property {number} id
 * @property {string} title
 * @property {number|null} [score]
 * @property {string[]} [genres]
 * @property {string} [imageUrl]
 * @property {string} [airingYears]
 */

/**
 * @param {AnimeSummaryInput} input
 * @returns {AnimeDetails}
 */
export function createAnimeSummary(input) {
  const {
    id,
    title,
    score = null,
    genres = [],
    imageUrl = '',
    airingYears = '',
  } = input;

  if (typeof id !== 'number') throw new TypeError('id must be a number');
  if (typeof title !== 'string' || !title)
    throw new TypeError('title is required');

  return {
    id,
    title,
    score,
    genres,
    imageUrl,
    airingYears,
  };
}
