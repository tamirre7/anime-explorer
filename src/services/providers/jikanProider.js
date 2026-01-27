import { fetchJson } from '../http/fetchJson';
import { createAnimeDetails } from '../../models/animeDetails';
import { createAnimeSummary } from '../../models/animeSummary';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4/';

export const jikanProvider = {
  discover,
  getAnimeDetails,
  searchAnimeByName,
  searchAnimeByCharacter,
};

async function discover(page = 1) {
  const res = await fetchJson(`${JIKAN_BASE_URL}top/anime?page=${page}`);
  return res.data.map(jikanToAnimeSummary);
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
  const normalizedCharacterName = encodeURIComponent(characterName.trim());
  const charactersFounded = await fetchJson(
    `${JIKAN_BASE_URL}characters?q=${normalizedCharacterName}&page=1`,
  );

  const first = charactersFounded.data?.[0];
  if (!first) return [];

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

function jikanToAnimeSummary(anime) {
  return createAnimeSummary({
    id: String(anime.mal_id),
    title: anime.title_english ?? anime.title ?? anime.title_japanese ?? '',
    score: anime.score ?? null,
    genres: (anime.genres ?? []).map((g) => g.name),
    imageUrl: pickJikanImage(anime),
    airingYears: getAiringYears(anime) ?? '',
  });
}

function jikanToAnimeDetails(anime) {
  return createAnimeDetails({
    id: String(anime.mal_id),
    title: anime.title_english ?? anime.title ?? anime.title_japanese ?? '',
    score: anime.score ?? null,
    genres: (anime.genres ?? []).map((g) => g.name),
    imageUrl: pickJikanImage(anime),
    airingYears: getAiringYears(anime) ?? '',
    episodes: anime.episodes ?? null,
    synopsis: anime.synopsis ?? '',
    rating: anime.rating ?? null,
  });
}

function getAiringYears(anime) {
  const from = anime?.aired?.prop?.from?.year ?? null;
  const to = anime?.aired?.prop?.to?.year ?? null;

  if (!from) return null;
  if (anime?.airing || !to) return `${from}-`;
  if (from === to) return `${from}`;

  return `${from}-${to}`;
}

function pickJikanImage(anime) {
  return (
    anime?.images?.webp?.image_url ?? anime?.images?.jpg?.image_url ?? null
  );
}
