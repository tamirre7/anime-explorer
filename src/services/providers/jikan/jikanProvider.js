import { DEFAULT_SORT } from '../../../constants/animeSort';
import { fetchJson } from '../../http/fetchJson';
import { sortAnimeLocally } from './jikanSort';
import { jikanToAnimeDetails, jikanToAnimeSummary } from './mappers';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4/';

export const jikanProvider = {
  discover,
  getAnimeDetails,
  searchAnimeByName,
  searchAnimeByCharacter,
};

async function discover({ page = 1, sort = DEFAULT_SORT }) {
  const res = await fetchJson(`${JIKAN_BASE_URL}top/anime?page=${page}`);

  let items = (res.data ?? []).map(jikanToAnimeSummary);

  items = sortAnimeLocally(items, sort);

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

async function searchAnimeByName(animeName, page = 1) {
  const normalizedAnimeName = encodeURIComponent(animeName.trim());
  const foundAnimes = await fetchJson(
    `${JIKAN_BASE_URL}anime?q=${normalizedAnimeName}&page=${page}`,
  );
  return foundAnimes.data.map(jikanToAnimeSummary);
}

async function searchAnimeByCharacter(characterName, limit = 12) {
  //get char id
  const normalizedCharacterName = encodeURIComponent(characterName.trim());
  const charactersFounded = await fetchJson(
    `${JIKAN_BASE_URL}characters?q=${normalizedCharacterName}&page=1`,
  );

  const first = charactersFounded.data?.[0];
  if (!first) return [];

  //get anime of char
  const charAnimeRes = await fetchJson(
    `${JIKAN_BASE_URL}characters/${first.mal_id}/anime`,
  );

  const animeIds = (charAnimeRes.data ?? [])
    .map((animeCharDetails) => animeCharDetails?.anime?.mal_id)
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
