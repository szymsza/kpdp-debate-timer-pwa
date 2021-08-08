import { StoreAction, StoreContent } from './types';

const reducer = (state: StoreContent, action: StoreAction) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return {
        ...state,
        screen: action.payload,
      };
    case 'SET_THEME':
      // TODO - save to local storage
      document.body.setAttribute('data-theme', action.payload);
      return {
        ...state,
        themes: state.themes.map((item) => ({
          ...item,
          active: item.value === action.payload,
        })),
      };
    case 'SELECT_SPEAKER':
      return {
        ...state,
        prepTimes: state.prepTimes.map((time) => ({
          ...time,
          active: false,
        })),
        speakers: state.speakers.map((party) => party.map(
          (item) => ({
            ...item,
            selected: item.label === action.payload,
          }),
        )),
      };
    case 'SET_ACTIVE_PREP_TIME':
      return {
        ...state,
        prepTimes: state.prepTimes.map((time) => ({
          ...time,
          active: time.label === action.payload,
        })),
        speakers: state.speakers.map((party) => party.map(
          (item) => ({
            ...item,
            selected: false,
          }),
        )),
      };
    default:
      return state;
  }
};

export default reducer;
