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

// Convert classic speakers data to order for linear mode overview
export const getLinearSpeakersData = (store: StoreContent): SpeakerTimeSlot[][][] => {
  const affirmative: SpeakerTimeSlot[] = store.speakers[0];
  const negative: SpeakerTimeSlot[] = store.speakers[1];

  const generateTimeSlots = (
    speakersParty: SpeakerTimeSlot[], questionerParty: SpeakerTimeSlot[],
  ): SpeakerTimeSlot[][] => [
    // X1, Y3 -> X1
    [
      speakersParty[0],
      questionerParty[3],
    ],
    // X2, Y1 -> X2
    [
      speakersParty[1],
      questionerParty[4],
    ],
    // X3
    [
      speakersParty[2],
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
