import { StoreContent } from './types';
import { PrepTimeSlot, SpeakerTimeSlot, TimeSlot } from '../types';
import { Mode } from '../modes';

export const getSelectedSpeaker = (store: StoreContent): SpeakerTimeSlot => (
  store.speakers.flat().find((speaker) => speaker.selected)!
);

// Get active mode from store
export const getActiveStoreMode = (store: StoreContent): Mode => <Mode>(
  store.modes.find((item) => item.active)!.value
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
