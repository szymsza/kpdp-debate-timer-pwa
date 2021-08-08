import { FunctionalComponent, h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../store';
import Settings from './Settings';
import Timer from './Timer';

const Screens: FunctionalComponent = () => {
  const { store } = useContext(Context);
  return (
    <Fragment>
      {store.screen === 'timer' && <Timer />}
      {store.screen === 'settings' && <Settings />}
    </Fragment>
  );
};

export default Screens;
