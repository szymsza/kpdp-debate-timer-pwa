export type Screen = 'timer' | 'settings';

export interface TimeSlotConfig {
  label: string,
  time: number,
}

export interface TimeSlot {
  label: string,
  total: number,
  elapsed: number,
}

export interface SpeakerTimeSlot extends TimeSlot {
  selected: boolean,
  paused: boolean,
}

export interface PrepTimeSlot extends TimeSlot {
  active: boolean,
}
