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
  prepTimes: state.prepTimes.map((time) => ({
    ...time,
    active: false,
  })),
  speakers: state.speakers.map((party) => party.map(
    (item) => ({
      ...item,
      selected: item.label === label,
    }),
  )),
});

const setActivePrepTime = (state: StoreContent, label: string): StoreContent => ({
  ...state,
  prepTimes: state.prepTimes.map((time) => ({
    ...time,
    active: time.label === label,
  })),
  speakers: state.speakers.map((party) => party.map(
    (item) => ({
      ...item,
      selected: false,
    }),
  )),
});

const reset = (state: StoreContent): StoreContent => ({
  ...state,
  speakers: initialState.speakers,
  prepTimes: initialState.prepTimes,
});

const reducer = (state: StoreContent, action: StoreAction): StoreContent => {
  switch (action.type) {
    case 'SET_SCREEN':
      return setScreen(state, action.payload);
    case 'SET_THEME':
      return setTheme(state, action.payload);
    case 'SET_SELECTED_SPEAKER':
      return setSelectedSpeaker(state, action.payload);
    case 'SET_ACTIVE_PREP_TIME':
      return setActivePrepTime(state, action.payload);
    case 'RESET':
      return reset(state);
    default:
      return state;
  }
};

export default reducer;
