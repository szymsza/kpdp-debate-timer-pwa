import {
  ColourTheme, PrepTimeSlot, Screen, SpeakerTimeSlot,
} from '../types';

export interface StoreContent {
  screen: Screen
  theme: ColourTheme
  speakers: SpeakerTimeSlot[]
  prepTimes: PrepTimeSlot[]
}

export type StoreActionType = 'SET_SCREEN' | 'SET_THEME';

export interface StoreAction {
  type: StoreActionType
  payload: any
}
