import { StoreContent } from './types';
import { prepTimes, speakers, themes } from '../config';
import { Screen } from '../types';

export default {
  screen: 'timer' as Screen,
  themes,
  speakers: speakers.map(
    (party, partyIndex) => party.map(
      (speaker, speakerIndex) => ({
        ...speaker,
        paused: true,
        selected: speakerIndex === 0 && partyIndex === speakerIndex,
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
