import { getActiveOption } from './localStorage';

export type Mode = 'linear' | 'classic';

const defaultMode: Mode = 'classic';

// Get active mode from local storage
export const getActiveMode = (): Mode => <Mode>getActiveOption('mode', defaultMode);
