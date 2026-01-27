import { anilistProvider } from './providers/anilistProvider';
import { jikanProvider } from './providers/jikanPorvider';

const PROVIDER = 'JIKAN';

export const api = PROVIDER === 'JIKAN' ? jikanProvider : anilistProvider;
