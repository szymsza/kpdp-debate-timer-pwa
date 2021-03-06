import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import { Dispatch, StoreActionType } from '../../store/types';
import Navbar from '../../components/Navbar';
import Radio from '../../components/Radio';
import About from '../../components/About';
import localisation from '../../localisation';

const setActiveOption = (newValue: string, dispatch: Dispatch, type: StoreActionType): void => {
  dispatch({
    type,
    payload: newValue,
  });
};

const Settings: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);

  return (
    <main className="screen screen--settings">
      <Navbar />
      <Radio
        label={`${localisation.themeColour}:`}
        options={store.themes}
        onChange={(newValue) => setActiveOption(newValue, dispatch, 'SET_THEME')}
      />
      <Radio
        label={`${localisation.mode}:`}
        options={store.modes}
        onChange={(newValue) => setActiveOption(newValue, dispatch, 'SET_MODE')}
      />
      <About />
    </main>
  );
};

export default Settings;
