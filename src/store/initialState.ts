import { StoreContent } from './types';
import { prepTimes, speakers, themes } from '../config';
import { Screen } from '../types';

export default {
  screen: 'timer' as Screen,
  themes,
  speakers: speakers.map(
    (party) => party.map(
      (speaker) => ({
        ...speaker,
        paused: true,
        selected: false,
        total: speaker.time * 60,
        elapsed: 0,
      }),
    ),
  ),
  prepTimes: prepTimes.map((item) => ({
    ...item,
    active: false,
    total: item.time * 60,
    elapsed: 0,
  })),
} as StoreContent;
