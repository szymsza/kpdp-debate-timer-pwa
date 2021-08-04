import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import { Dispatch } from '../../store/types';
import Navbar from '../../components/Navbar';
import Radio from '../../components/Radio';
import About from '../../components/About';

const setActiveTheme = (newValue: string, dispatch: Dispatch): void => {
  dispatch({
    type: 'SET_THEME',
    payload: newValue,
  });
};

const Settings: FunctionalComponent = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <main className="screen screen--settings">
      <Navbar />
      <Radio
        label="Barevný režim:"
        options={state.themes}
        onChange={(newValue) => setActiveTheme(newValue, dispatch)}
      />
      <About />
    </main>
  );
};

export default Settings;
