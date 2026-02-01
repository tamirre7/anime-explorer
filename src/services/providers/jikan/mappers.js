import { createAnimeDetails } from '../../../models/animeDetails';
import { createAnimeSummary } from '../../../models/animeSummary';
import { formatAiringYears } from '../../../utils/airingYears';

export function jikanToAnimeSummary(anime) {
  const yearStart = anime?.aired?.prop?.from?.year ?? anime?.year ?? null;
  return createAnimeSummary({
    id: anime.mal_id,
    title: anime.title_english || anime.title || '',
    score: anime.score ?? null,
    genres: (anime.genres ?? []).map((g) => g.name),
    imageUrl: pickJikanImage(anime),
    airingYears: getAiringYears(anime) ?? '',
    yearStart,
  });
}

export function jikanToAnimeDetails(anime) {
  return createAnimeDetails({
    id: anime.mal_id,
    title: anime.title_english || anime.title || '',
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
  const from = anime?.aired?.prop?.from?.year ?? anime?.year ?? null;
  const to = anime?.aired?.prop?.to?.year ?? null;
  const isOngoing = anime?.airing;

  return formatAiringYears(from, to, isOngoing);
}

function pickJikanImage(anime) {
  return (
    anime?.images?.webp?.image_url ?? anime?.images?.jpg?.image_url ?? null
  );
}
