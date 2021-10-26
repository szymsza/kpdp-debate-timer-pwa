import { StoreContent } from './types';
import {
  modes, prepTimes, speakers, themes,
} from '../config';
import { Screen } from '../types';

export default {
  screen: 'timer' as Screen,
  themes,
  modes,
  speakers: speakers.map(
    (party, partyIndex) => party.map(
      (speaker, speakerIndex) => ({
        ...speaker,
        party: partyIndex === 0 ? 'affirmative' : 'negative',
        paused: true,
        selected: speakerIndex === 0 && partyIndex === speakerIndex,
        total: speaker.time * 60,
        elapsed: 0,
        timeStartedDate: null,
      }),
    ),
  ),
  prepTimes: prepTimes.map((item, itemIndex) => ({
    ...item,
    party: itemIndex === 0 ? 'affirmative' : 'negative',
    active: false,
    total: item.time * 60,
    elapsed: 0,
    timeStartedDate: null,
  })),
  resetDialogVisible: false,
} as StoreContent;
