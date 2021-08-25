import { StoreAction, StoreContent } from './types';
import { Screen, TimeSlot } from '../types';
import initialStore from './initialStore';

const setScreen = (store: StoreContent, screen: Screen): StoreContent => ({
  ...store,
  screen,
});

const setTheme = (store: StoreContent, value: string): StoreContent => {
  // TODO - save to local storage
  document.body.setAttribute('data-theme', value);
  return {
    ...store,
    themes: store.themes.map((item) => ({
      ...item,
      active: item.value === value,
    })),
  };
};

const setSelectedSpeaker = (store: StoreContent, label: string): StoreContent => ({
  ...store,
  speakers: store.speakers.map((party) => party.map(
    (item) => ({
      ...item,
      selected: item.label === label,
    }),
  )),
});

const toggleActivePrepTime = (store: StoreContent, label: string): StoreContent => ({
  ...store,
  prepTimes: store.prepTimes.map((time) => ({
    ...time,
    active: time.label === label && !time.active,
  })),
});

const timeslotTick = (store: StoreContent, slot: TimeSlot): StoreContent => ({
  ...store,
  prepTimes: store.prepTimes.map((time) => ({
    ...time,
    elapsed: slot === time ? time.elapsed + 1 : time.elapsed,
  })),
  speakers: store.speakers.map((party) => party.map(
    (item) => ({
      ...item,
      elapsed: slot === item ? item.elapsed + 1 : item.elapsed,
    }),
  )),
});

const reset = (store: StoreContent): StoreContent => ({
  ...store,
  speakers: initialStore.speakers,
  prepTimes: initialStore.prepTimes,
});

const togglePausedTimer = (store: StoreContent): StoreContent => ({
  ...store,
  speakers: store.speakers.map((party) => party.map(
    (speaker) => ({
      ...speaker,
      paused: !speaker.selected || !speaker.paused,
    }),
  )),
});

const reducer = (store: StoreContent, action: StoreAction): StoreContent => {
  switch (action.type) {
    case 'SET_SCREEN':
      return setScreen(store, action.payload);
    case 'SET_THEME':
      return setTheme(store, action.payload);
    case 'SET_SELECTED_SPEAKER':
      return setSelectedSpeaker(store, action.payload);
    case 'TOGGLE_ACTIVE_PREP_TIME':
      return toggleActivePrepTime(store, action.payload);
    case 'TIMESLOT_TICK':
      return timeslotTick(store, action.payload);
    case 'RESET':
      return reset(store);
    case 'TOGGLE_PAUSED_TIMER':
      return togglePausedTimer(store);
    default:
      return store;
  }
};

export default reducer;
