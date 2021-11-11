import { StoreContent } from './types';
import {
  modes, prepTimes, speakers, themes,
} from '../config';
import { Screen } from '../types';
import { getActiveOption } from '../localStorage';

export default {
  screen: 'timer' as Screen,
  themes,
  modes,
  speakers: speakers.map(
    (party, partyIndex) => party.map(
      (speaker, speakerIndex) => ({
        ...speaker,
        party: partyIndex === 0 ? 'affirmative' : 'negative',
        type: 'speaker',
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
    type: 'prepTime',
    selected: false,
    paused: true,
    total: item.time * 60,
    elapsed: 0,
    timeStartedDate: null,
  })),
  resetDialogVisible: false,
  linearActiveSlotIndex: 0,
  featureDiscoveryVisible: getActiveOption('featureDiscoveryHidden', 'false') === 'false',
} as StoreContent;
