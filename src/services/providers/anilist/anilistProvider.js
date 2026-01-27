import { fetchAniList } from '../../http/anilistRequest';
import { anilistToAnimeDetails, anilistToAnimeSummary } from './mappers';
import {
  DISCOVER,
  ANIME_BY_ID,
  ANIME_BY_NAME,
  CHARACTER_BY_NAME,
  ANIME_BY_CHARACTER,
} from './queries';

export const anilistProvider = {
  discover,
  getAnimeDetails,
  searchAnimeByName,
  searchAnimeByCharacter,
};

async function discover(page = 1) {
  const perPage = 12;

  const data = await fetchAniList(DISCOVER, { page, perPage });

  const list = data?.Page?.media ?? [];
  return list.map(anilistToAnimeSummary);
}

async function getAnimeDetails(animeId) {
  const data = await fetchAniList(ANIME_BY_ID, { id: Number(animeId) });

  if (!data?.Media) return null;
  return anilistToAnimeDetails(data.Media);
}

async function searchAnimeByName(animeName, page = 1) {
  const perPage = 12;

  const data = await fetchAniList(ANIME_BY_NAME, {
    search: animeName.trim(),
    page,
    perPage,
  });

  const list = data?.Page?.media ?? [];
  return list.map(anilistToAnimeSummary);
}

async function searchAnimeByCharacter(characterName, limit = 12) {
  // get char id
  const c = await fetchAniList(CHARACTER_BY_NAME, {
    search: characterName.trim(),
    page: 1,
    perPage: 1,
  });

  const first = c?.Page?.characters?.[0];
  if (!first) return [];

  // get anime of char
  const data = await fetchAniList(ANIME_BY_CHARACTER, {
    id: first.id,
    page: 1,
    perPage: limit,
  });

  const list = data?.Character?.media?.nodes ?? [];
  return list.map(anilistToAnimeSummary);
}
