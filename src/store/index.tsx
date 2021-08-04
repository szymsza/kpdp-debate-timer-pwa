import React, { h, createContext, FunctionalComponent } from 'preact';
import { useReducer } from 'preact/hooks';
import reducer from './reducer';
import { StoreAction, StoreContent } from './types';

/* TODO create global store
    - screen
        - timer/settings
        - later connect to URL
    - theme colour
        - auto/light/dark
        - document.body.setAttribute('data-theme', 'dark')
    - speakers
        - map config:
            - add `selected` property
            - add `paused` property
            - convert total minutes to seconds + add elapsed
    - prep times
        - map config:
            - add `active` property
            - convert total minutes to seconds + add elapsed
*/

const initialState = {
  error: 'Test store',
};

export const Context = createContext({
  state: initialState,
  dispatch: (() => {
  }) as (action: StoreAction) => void,
});

const Store: FunctionalComponent = ({ children }) => {
  const [state, dispatch] = useReducer<StoreContent, StoreAction>(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Store;
