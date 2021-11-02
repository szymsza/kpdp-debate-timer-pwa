import { StoreContent } from './types';
import { TimeSlot } from '../types';
import { Mode } from '../modes';

export const getSelectedSpeaker = (store: StoreContent): TimeSlot => (
  store.speakers.flat().find((speaker) => speaker.selected)!
);

// Get active mode from store
export const getActiveStoreMode = (store: StoreContent): Mode => <Mode>(
  store.modes.find((item) => item.active)!.value
);

export const getActivePrepTime = (store: StoreContent): TimeSlot | undefined => (
  store.prepTimes.find((time) => time.selected && !time.paused)
);

export const getActiveTimeSlot = (store: StoreContent): TimeSlot | undefined => {
  const prepTime: TimeSlot | undefined = getActivePrepTime(store);

  if (prepTime) {
    return prepTime;
  }

  const speaker: TimeSlot = getSelectedSpeaker(store);

  if (!speaker.paused) {
    return speaker;
  }
  return undefined;
};

// Convert classic speakers data to order for linear mode overview
export const getLinearSpeakersData = (store: StoreContent): TimeSlot[][][] => {
  const affirmative: TimeSlot[] = store.speakers[0];
  const negative: TimeSlot[] = store.speakers[1];

  const generateTimeSlots = (
    speakersPartySlots: TimeSlot[], questionerPartySlots: TimeSlot[],
  ): TimeSlot[][] => [
    // X1, Y3 -> X1
    [
      speakersPartySlots[0],
      questionerPartySlots[3],
    ],
    // X2, Y1 -> X2
    [
      speakersPartySlots[1],
      questionerPartySlots[4],
    ],
    // X3
    [
      speakersPartySlots[2],
    ],
  ];

  return [
    generateTimeSlots(affirmative, negative),
    generateTimeSlots(negative, affirmative),
  ];
};

export const timerOrPrepTimeRunning = (store: StoreContent): boolean => (
  !!getActivePrepTime(store) || !getSelectedSpeaker(store).paused
);
