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
    default:
      return state;
  }
};

export default reducer;