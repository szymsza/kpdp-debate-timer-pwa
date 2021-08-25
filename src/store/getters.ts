import { StoreContent } from './types';
import { PrepTimeSlot, SpeakerTimeSlot, TimeSlot } from '../types';

export const getSelectedSpeaker = (store: StoreContent): SpeakerTimeSlot => (
  store.speakers.flat().find((speaker) => speaker.selected)!
);

export const getActivePrepTime = (store: StoreContent): PrepTimeSlot | undefined => (
  store.prepTimes.find((time) => time.active)
);

export const getActiveTimeSlot = (store: StoreContent): TimeSlot | undefined => {
  const prepTime: PrepTimeSlot | undefined = getActivePrepTime(store);

  if (prepTime) {
    return prepTime;
  }

  const speaker: SpeakerTimeSlot = getSelectedSpeaker(store);

  if (!speaker.paused) {
    return speaker;
  }
  return undefined;
};

export const timerOrPrepTimeRunning = (store: StoreContent): boolean => (
  !!getActivePrepTime(store) || !getSelectedSpeaker(store).paused
);
