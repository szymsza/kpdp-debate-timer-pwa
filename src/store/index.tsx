import React, { h, createContext, FunctionalComponent } from 'preact';
import { useReducer } from 'preact/hooks';
import reducer from './reducer';
import { Dispatch, StoreAction, StoreContent } from './types';
import { prepTimes, speakers, themes } from '../config';

/* TODO create global store
    - screen - connect to URL
    - theme colour - get from local storage/@media if auto
*/

const initialState: StoreContent = {
  screen: 'timer',
  themes,
  speakers: speakers.map(
    (party) => party.map(
      (speaker) => ({
        ...speaker,
        paused: true,
        selected: false,
        total: speaker.time * 60,
        elapsed: 0,
      }),
    ),
  ),
  prepTimes: prepTimes.map((item) => ({
    ...item,
    active: false,
    total: item.time * 60,
    elapsed: 0,
  })),
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
