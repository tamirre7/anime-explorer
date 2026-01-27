import { anilistProvider } from './providers/anilistProvider';
import { jikanProvider } from './providers/jikanProvider';

const PROVIDER = 'JIKAN'; // 'JIKAN' | 'ANILIST'

const PROVIDERS = {
  JIKAN: jikanProvider,
  ANILIST: anilistProvider,
};

export const api = PROVIDERS[PROVIDER];

if (!api) {
  throw new Error(`Unknown API provider: ${PROVIDER}`);
}
