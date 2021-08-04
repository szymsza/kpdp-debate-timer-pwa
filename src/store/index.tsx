import React, { h, createContext, FunctionalComponent } from 'preact';
import { useReducer } from 'preact/hooks';
import reducer from './reducer';
import { Dispatch, StoreAction, StoreContent } from './types';

/* TODO create global store
    - screen
        - connect to URL
    - theme colour
        - get from local storage/@media if auto
        - move options to config
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

const initialState: StoreContent = {
  screen: 'timer',
  themes: [{
    label: 'Auto',
    value: 'auto',
    active: true,
  }, {
    label: 'Tmavý',
    value: 'dark',
    active: false,
  }, {
    label: 'Světlý',
    value: 'light',
    active: false,
  }],
  speakers: [],
  prepTimes: [],
};

export const Context = createContext({
  state: initialState,
  dispatch: (() => {
  }) as Dispatch,
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
