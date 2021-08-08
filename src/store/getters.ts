import { StoreContent } from './types';
import { PrepTimeSlot, SpeakerTimeSlot } from '../types';

export const getSelectedSpeaker = (state: StoreContent): SpeakerTimeSlot => (
  state.speakers.flat().find((speaker) => speaker.selected)!
);

export const getActivePrepTime = (state: StoreContent): PrepTimeSlot | undefined => (
  state.prepTimes.find((time) => time.active)
);
