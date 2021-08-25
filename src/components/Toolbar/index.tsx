import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import ToolbarButton from './ToolbarButton';
import { timerOrPrepTimeRunning } from '../../store/getters';
import localisation from '../../localisation';

const Toolbar: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const timeRunning = timerOrPrepTimeRunning(store);

  return (
    <nav className="toolbar">
      <ToolbarButton
        title={localisation.reset}
        icon="reset"
        disabled={timeRunning}
        onClick={() => {
          dispatch({
            type: 'TOGGLE_RESET_DIALOG',
            payload: true,
          });
        }}
      />
      <ToolbarButton
        title={localisation.settings}
        icon="settings"
        disabled={timeRunning}
        onClick={() => {
          dispatch({
            type: 'SET_SCREEN',
            payload: 'settings',
          });
        }}
      />
    </nav>
  );
};

export default Toolbar;
