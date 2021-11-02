import { StoreContent } from './types';
import { TimeSlot } from '../types';
import { Mode } from '../modes';

// Get active mode from store
export const getActiveStoreMode = (store: StoreContent): Mode => <Mode>(
  store.modes.find((item) => item.active)!.value
);

// Filter selected time slots
const filterSelectedTimeSlot = (slots: TimeSlot[]): TimeSlot | undefined => (
  slots.find((slot) => slot.selected)
);

export const getSelectedSpeaker = (
  store: StoreContent,
): TimeSlot | undefined => filterSelectedTimeSlot(store.speakers.flat());

export const getSelectedPrepTime = (
  store: StoreContent,
): TimeSlot | undefined => filterSelectedTimeSlot(store.prepTimes);

export const getSelectedTimeSlot = (
  store: StoreContent,
): TimeSlot | undefined => getSelectedPrepTime(store) ?? getSelectedSpeaker(store);

// Filter running time slots
const filterRunningTimeSlot = (slots: TimeSlot[]): TimeSlot | undefined => [
  filterSelectedTimeSlot(slots),
].find((slot) => slot && !slot.paused);

export const getRunningSpeaker = (
  store: StoreContent,
): TimeSlot | undefined => filterRunningTimeSlot(store.speakers.flat());

export const getRunningPrepTime = (
  store: StoreContent,
): TimeSlot | undefined => filterRunningTimeSlot(store.prepTimes);

export const getRunningTimeSlot = (
  store: StoreContent,
): TimeSlot | undefined => getRunningPrepTime(store) ?? getRunningSpeaker(store);

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

// Insert given prep time after each given speaker
const zipSpeakersWithPrepTime = (speakers: TimeSlot[], prepTime: TimeSlot): TimeSlot[] => speakers
  .map((speaker) => ([
    speaker,
    prepTime,
  ])).flat();

// Get all time slots for linear mode carousel, including prep times
export const getLinearTimeSlots = (store: StoreContent): TimeSlot[] => {
  const speakers: TimeSlot[][][] = getLinearSpeakersData(store);
  const speakersAffirmative: TimeSlot[][] = speakers[0];
  const speakersNegative: TimeSlot[][] = speakers[1];

  const prepTimeAffirmative: TimeSlot = store.prepTimes[0];
  const prepTimeNegative: TimeSlot = store.prepTimes[1];

  const slotGroups: TimeSlot[][] = [];

  // Zip each speaker group with opposite party prep time
  for (let i = 0; i < speakersAffirmative.length; i += 1) {
    slotGroups.push(
      zipSpeakersWithPrepTime(speakersAffirmative[i], prepTimeNegative),
      zipSpeakersWithPrepTime(speakersNegative[i], prepTimeAffirmative),
    );
  }

  const result = slotGroups.flat();

  // Remove last useless affirmative prep time
  result.pop();

  return result;
};

/*
TODO - think about how to solve situation with single prep time on multiple positions
  - probably just global integer store for active linear time slot & increment it
*/
export const getSelectedTimeSlotLinearIndex = (/* store: StoreContent */): number => 0;

export const timerOrPrepTimeRunning = (store: StoreContent): boolean => (
  !!getRunningPrepTime(store) || !!getRunningSpeaker(store)
);
