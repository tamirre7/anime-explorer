import { DEFAULT_SORT } from '../../../constants/animeSort';
import { fetchJson } from '../../http/fetchJson';
import { buildSortQuery } from './jikanSort';
import { jikanToAnimeDetails, jikanToAnimeSummary } from './mappers';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4/';

export const jikanProvider = {
  discover,
  getAnimeDetails,
  searchAnimeByName,
  searchAnimeByCharacter,
};

async function discover({ page = 1, sort = DEFAULT_SORT }) {
  const sortQuery = buildSortQuery(sort);
  const res = await fetchJson(
    `${JIKAN_BASE_URL}anime?${sortQuery}&page=${page}`,
  );

  const items = (res.data ?? []).map(jikanToAnimeSummary);
  const hasNext = res.pagination?.has_next_page ?? false;

  return {
    items,
    nextPage: hasNext ? page + 1 : null,
  };
}

async function getAnimeDetails(animeId) {
  const animeDetails = await fetchJson(`${JIKAN_BASE_URL}anime/${animeId}`);
  return jikanToAnimeDetails(animeDetails.data);
}

async function searchAnimeByName({ animeName, page = 1, sort = DEFAULT_SORT }) {
  const normalizedAnimeName = encodeURIComponent(animeName.trim());
  const sortQuery = buildSortQuery(sort);

  const res = await fetchJson(
    `${JIKAN_BASE_URL}anime?q=${normalizedAnimeName}&${sortQuery}&page=${page}`,
  );

  const items = (res.data ?? []).map(jikanToAnimeSummary);
  const hasNext = res.pagination?.has_next_page ?? false;

  return {
    items,
    nextPage: hasNext ? page + 1 : null,
  };
}
async function searchAnimeByCharacter(characterName, limit = 6) {
  const normalizedCharacterName = encodeURIComponent(characterName.trim());

  // Step 1: Find character by name (order by favorites to get most popular first)
  const charactersFound = await fetchJson(
    `${JIKAN_BASE_URL}characters?q=${normalizedCharacterName}&order_by=favorites&sort=desc&page=1`,
  );

  const firstCharacter = charactersFound.data?.[0];
  if (!firstCharacter) return [];

  // Step 2: Get character's anime appearances
  const charAnimeRes = await fetchJson(
    `${JIKAN_BASE_URL}characters/${firstCharacter.mal_id}/anime`,
  );

  // Step 3: Fetch full details for each anime
  const animeIds = (charAnimeRes.data ?? [])
    .map((entry) => entry?.anime?.mal_id)
    .filter(Boolean)
    .slice(0, limit);

  const animePromises = animeIds.map((animeId) =>
    fetchJson(`${JIKAN_BASE_URL}anime/${animeId}`),
  );
  const animeResults = await Promise.allSettled(animePromises);

  return animeResults
    .filter((result) => result.status === 'fulfilled')
    .map((result) => result.value?.data)
    .filter(Boolean)
    .map(jikanToAnimeSummary);
}
