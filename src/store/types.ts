import {
  PrepTimeSlot, Screen, SpeakerTimeSlot,
} from '../types';
import { RadioOption } from '../components/Radio';

export interface StoreContent {
  screen: Screen
  themes: RadioOption[]
  speakers: SpeakerTimeSlot[][]
  prepTimes: PrepTimeSlot[]
  resetDialogVisible: boolean
}

export type StoreActionType =
  'SET_SCREEN'
  | 'SET_THEME'
  | 'SET_SELECTED_SPEAKER'
  | 'TOGGLE_ACTIVE_PREP_TIME'
  | 'TIMESLOT_TICK'
  | 'RESET'
  | 'TOGGLE_RESET_DIALOG'
  | 'TOGGLE_PAUSED_TIMER';

export interface StoreAction {
  type: StoreActionType
  payload: any
}

export type Dispatch = (action: StoreAction) => void;
