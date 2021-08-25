import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import ToolbarButton from './ToolbarButton';
import { timerOrPrepTimeRunning } from '../../store/getters';

const Toolbar: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const timeRunning = timerOrPrepTimeRunning(store);

  return (
    <nav className="toolbar">
      <ToolbarButton
        title="Resetovat"
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
        title="Nastavení"
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
