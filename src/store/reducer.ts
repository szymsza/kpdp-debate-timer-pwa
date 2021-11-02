import { StoreAction, StoreContent } from './types';
import { Screen, screens, TimeSlot } from '../types';
import initialStore from './initialStore';
import { activateThemeColour } from '../themes';
import { setActiveOption } from '../localStorage';

const setScreen = (
  store: StoreContent,
  { screen, pushHistory = true }: {
    screen: string,
    pushHistory: boolean,
  },
): StoreContent => {
  // screenSafe will include only valid type Screen
  let screenSafe: string = screen;
  if (!screens.includes(<Screen>screenSafe)) {
    [screenSafe] = screens;
  }

  if (pushHistory) {
    window.history.pushState(screenSafe, document.title, `${process.env.SUBFOLDER}/${screenSafe}`);
  }

  return {
    ...store,
    screen: screenSafe as Screen,
  };
};

const setTheme = (store: StoreContent, value: string): StoreContent => {
  setActiveOption('theme', value);
  activateThemeColour();
  return {
    ...store,
    themes: store.themes.map((item) => ({
      ...item,
      active: item.value === value,
    })),
  };
};

const setMode = (store: StoreContent, value: string): StoreContent => {
  setActiveOption('mode', value);
  return {
    ...store,
    modes: store.modes.map((item) => ({
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
  prepTimes: store.prepTimes.map((time) => {
    const shouldBeActive = time.label === label && (!time.selected || time.paused);
    return {
      ...time,
      selected: shouldBeActive,
      paused: !shouldBeActive,
      timeStartedDate: shouldBeActive ? Date.now() : null,
    };
  }),
});

const timeslotTick = (store: StoreContent, slot: TimeSlot): StoreContent => ({
  ...store,
  prepTimes: store.prepTimes.map((time) => {
    const isActive = slot.label === time.label;
    return {
      ...time,
      elapsed: isActive ? time.elapsed + 1 : time.elapsed,
      timeStartedDate: isActive ? time.timeStartedDate! + 1000 : null,
    };
  }),
  speakers: store.speakers.map((party) => party.map(
    (item) => {
      const isActive = slot.label === item.label;
      return {
        ...item,
        elapsed: isActive ? item.elapsed + 1 : item.elapsed,
        timeStartedDate: isActive ? item.timeStartedDate! + 1000 : null,
      };
    },
  )),
});

const reset = (store: StoreContent): StoreContent => ({
  ...store,
  speakers: initialStore.speakers,
  prepTimes: initialStore.prepTimes,
});

const toggleResetDialog = (store: StoreContent, visible: boolean): StoreContent => ({
  ...store,
  resetDialogVisible: visible,
});

const togglePausedTimer = (store: StoreContent): StoreContent => ({
  ...store,
  speakers: store.speakers.map((party) => party.map(
    (speaker) => {
      const shouldBeActive = speaker.selected && speaker.paused;
      return {
        ...speaker,
        paused: !shouldBeActive,
        timeStartedDate: shouldBeActive ? Date.now() : null,
      };
    },
  )),
});

const reducer = (store: StoreContent, action: StoreAction): StoreContent => {
  switch (action.type) {
    case 'SET_SCREEN':
      return setScreen(store, typeof action.payload !== 'string' ? action.payload : {
        screen: action.payload,
        pushHistory: true,
      });
    case 'SET_THEME':
      return setTheme(store, action.payload);
    case 'SET_MODE':
      return setMode(store, action.payload);
    case 'SET_SELECTED_SPEAKER':
      return setSelectedSpeaker(store, action.payload);
    case 'TOGGLE_ACTIVE_PREP_TIME':
      return toggleActivePrepTime(store, action.payload);
    case 'TIMESLOT_TICK':
      return timeslotTick(store, action.payload);
    case 'RESET':
      return reset(store);
    case 'TOGGLE_RESET_DIALOG':
      return toggleResetDialog(store, action.payload);
    case 'TOGGLE_PAUSED_TIMER':
      return togglePausedTimer(store);
    default:
      return store;
  }
};

export default reducer;
