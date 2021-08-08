import React, { h, createContext, FunctionalComponent } from 'preact';
import { useReducer } from 'preact/hooks';
import reducer from './reducer';
import { Dispatch, StoreAction, StoreContent } from './types';
import initialState from './initialState';

/* TODO create global store
    - screen - connect to URL
    - theme colour - get from local storage/@media if auto
*/

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
