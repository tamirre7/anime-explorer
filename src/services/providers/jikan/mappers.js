import { createAnimeDetails } from '../../../models/animeDetails';
import { createAnimeSummary } from '../../../models/animeSummary';
import { formatAiringYears } from '../../../utils/airingYears';

export function jikanToAnimeSummary(anime) {
  return createAnimeSummary({
    id: String(anime.mal_id),
    title: anime.title_english ?? anime.title ?? anime.title_japanese ?? '',
    score: anime.score ?? null,
    genres: (anime.genres ?? []).map((g) => g.name),
    imageUrl: pickJikanImage(anime),
    airingYears: getAiringYears(anime) ?? '',
  });
}

export function jikanToAnimeDetails(anime) {
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
  const isOngoing = anime?.airing;

  formatAiringYears(from, to, isOngoing);
}

function pickJikanImage(anime) {
  return (
    anime?.images?.webp?.image_url ?? anime?.images?.jpg?.image_url ?? null
  );
}
