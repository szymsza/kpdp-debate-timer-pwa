import { StoreContent } from './types';
import { PrepTimeSlot, SpeakerTimeSlot } from '../types';

export const getSelectedSpeaker = (store: StoreContent): SpeakerTimeSlot => (
  store.speakers.flat().find((speaker) => speaker.selected)!
);

export const getActivePrepTime = (store: StoreContent): PrepTimeSlot | undefined => (
  store.prepTimes.find((time) => time.active)
);

export const timerOrPrepTimeRunning = (store: StoreContent): boolean => (
  !!getActivePrepTime(store) || !getSelectedSpeaker(store).paused
);
