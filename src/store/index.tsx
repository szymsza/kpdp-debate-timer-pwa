import React, { h, createContext, FunctionalComponent } from 'preact';
import { useReducer } from 'preact/hooks';
import reducer from './reducer';
import { Dispatch, StoreAction, StoreContent } from './types';
import initialStore from './initialStore';

/* TODO create global store
    - screen - connect to URL
    - theme colour - get from local storage/@media if auto
*/

export const Context = createContext({
  store: initialStore,
  dispatch: (() => {
  }) as Dispatch,
});

const Store: FunctionalComponent = ({ children }) => {
  const [store, dispatch] = useReducer<StoreContent, StoreAction>(reducer, initialStore);
  return (
    <Context.Provider value={{ store, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Store;
