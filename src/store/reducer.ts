import { StoreAction, StoreContent } from './types';
import { Screen } from '../types';
import initialState from './initialState';

const setScreen = (state: StoreContent, screen: Screen): StoreContent => ({
  ...state,
  screen,
});

const setTheme = (state: StoreContent, value: string): StoreContent => {
  // TODO - save to local storage
  document.body.setAttribute('data-theme', value);
  return {
    ...state,
    themes: state.themes.map((item) => ({
      ...item,
      active: item.value === value,
    })),
  };
};

const setSelectedSpeaker = (state: StoreContent, label: string): StoreContent => ({
  ...state,
  speakers: state.speakers.map((party) => party.map(
    (item) => ({
      ...item,
      selected: item.label === label,
    }),
  )),
});

const toggleActivePrepTime = (state: StoreContent, label: string): StoreContent => ({
  ...state,
  prepTimes: state.prepTimes.map((time) => ({
    ...time,
    active: time.label === label && !time.active,
  })),
});

const reset = (state: StoreContent): StoreContent => ({
  ...state,
  speakers: initialState.speakers,
  prepTimes: initialState.prepTimes,
});

const togglePausedTimer = (state: StoreContent): StoreContent => ({
  ...state,
  speakers: state.speakers.map((party) => party.map(
    (speaker) => ({
      ...speaker,
      paused: !speaker.selected || !speaker.paused,
    }),
  )),
});

const reducer = (state: StoreContent, action: StoreAction): StoreContent => {
  switch (action.type) {
    case 'SET_SCREEN':
      return setScreen(state, action.payload);
    case 'SET_THEME':
      return setTheme(state, action.payload);
    case 'SET_SELECTED_SPEAKER':
      return setSelectedSpeaker(state, action.payload);
    case 'TOGGLE_ACTIVE_PREP_TIME':
      return toggleActivePrepTime(state, action.payload);
    case 'RESET':
      return reset(state);
    case 'TOGGLE_PAUSED_TIMER':
      return togglePausedTimer(state);
    default:
      return state;
  }
};

export default reducer;
