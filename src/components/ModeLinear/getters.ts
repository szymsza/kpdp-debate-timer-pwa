// Convert classic speakers data to order for linear mode overview
import { StoreContent } from '../../store/types';
import { TimeSlot } from '../../types';

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

export const getLinearActiveSlotIndex = (
  store: StoreContent,
): number => store.linearActiveSlotIndex;
