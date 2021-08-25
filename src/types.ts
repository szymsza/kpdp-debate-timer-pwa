export const screens = ['timer', 'settings'] as const;

export type Screen = typeof screens[number];

export interface TimeSlotConfig {
  label: string
  time: number
}

export interface TimeSlot {
  label: string
  total: number
  elapsed: number
  // set to Date.now() after timer is started to accurately compute elapsed time
  timeStartedDate: number | null
}

export interface SpeakerTimeSlot extends TimeSlot {
  selected: boolean
  paused: boolean
}

export interface PrepTimeSlot extends TimeSlot {
  active: boolean
}
