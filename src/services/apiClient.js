import { anilistProvider } from './providers/anilist/anilistProvider';
import { jikanProvider } from './providers/jikan/jikanProvider';

const PROVIDER = 'JIKAN'; // 'JIKAN' | 'ANILIST'

const PROVIDERS = {
  JIKAN: jikanProvider,
  ANILIST: anilistProvider,
};

export const api = PROVIDERS[PROVIDER];

if (!api) {
  throw new Error(`Unknown API provider: ${PROVIDER}`);
}
