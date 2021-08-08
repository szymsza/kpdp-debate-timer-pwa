import { StoreContent } from './types';
import { SpeakerTimeSlot } from '../types';

export const getSelectedSpeaker = (state: StoreContent): SpeakerTimeSlot => (
  state.speakers.flat().find((speaker) => speaker.selected)!
);
