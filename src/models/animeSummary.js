// @ts-check

/**
 * @typedef {object} AnimeSummary
 * @property {number} id
 * @property {string} title
 * @property {number|null} score
 * @property {string} imageUrl
 * @property {string} airingYears
 */

/**
 * @typedef {object} AnimeSummaryInput
 * @property {number} id
 * @property {string} title
 * @property {number|null} [score]
 * @property {string} [imageUrl]
 * @property {string} [airingYears]
 */

/**
 * @param {AnimeSummaryInput} input
 * @returns {AnimeSummary}
 */
export function createAnimeSummary(input) {
  const { id, title, score = null, imageUrl = '', airingYears = '' } = input;

  if (typeof id !== 'number') throw new TypeError('id must be a number');
  if (typeof title !== 'string' || !title)
    throw new TypeError('title is required');

  return {
    id,
    title,
    score,
    imageUrl,
    airingYears,
  };
}
