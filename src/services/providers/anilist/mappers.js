// providers/anilist/mappers.js
import { createAnimeDetails } from '../../../models/animeDetails';
import { createAnimeSummary } from '../../../models/animeSummary';
import { formatAiringYears } from '../../../utils/airingYears';

export function anilistToAnimeSummary(anime) {
  return createAnimeSummary({
    id: String(anime.id),
    title: anime?.title?.english,
    score: anime.averageScore ?? null,
    genres: anime.genres ?? [],
    imageUrl: anime?.coverImage?.large ?? null,
    airingYears: getAiringYears(anime) ?? '',
  });
}

export function anilistToAnimeDetails(anime) {
  return createAnimeDetails({
    id: String(anime.id),
    title: anime?.title?.english,
    score: anime.averageScore ?? null,
    genres: anime.genres ?? [],
    imageUrl: anime?.coverImage?.large ?? null,
    airingYears: getAiringYears(anime) ?? '',
    episodes: anime.episodes ?? null,
    synopsis: anime.description ?? '',
    rating: anime.isAdult ? 'Adult' : null,
  });
}

function getAiringYears(anime) {
  const fromYear = anime?.startDate?.year ?? null;
  const toYear = anime?.endDate?.year ?? null;
  const isOngoing = anime?.status === 'RELEASING';
  return formatAiringYears(fromYear, toYear, isOngoing);
}
