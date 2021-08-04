import React, { h, createContext, FunctionalComponent } from 'preact';
import { useReducer } from 'preact/hooks';
import reducer from './reducer';
import { StoreAction, StoreContent } from './types';

/* TODO create global store
    - screen
        - connect to URL
    - theme colour
        - get from local storage/@media if auto
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
  theme: 'auto',
  speakers: [],
  prepTimes: [],
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
