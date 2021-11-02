export const screens = ['timer', 'settings'] as const;

export type Screen = typeof screens[number];

export type Party = 'affirmative' | 'negative';

export interface TimeSlotConfig {
  label: string
  time: number
}

export interface TimeSlot {
  label: string
  party: Party
  total: number
  elapsed: number
  selected: boolean
  paused: boolean
  // set to Date.now() after timer is started to accurately compute elapsed time
  timeStartedDate: number | null
}
