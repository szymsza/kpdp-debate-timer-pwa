import { FunctionalComponent, h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../store';
import Settings from './Settings';
import Timer from './Timer';

const Screens: FunctionalComponent = () => {
  const { state } = useContext(Context);
  return (
    <Fragment>
      {state.screen === 'timer' && <Timer />}
      {state.screen === 'settings' && <Settings />}
    </Fragment>
  );
};

export default Screens;
