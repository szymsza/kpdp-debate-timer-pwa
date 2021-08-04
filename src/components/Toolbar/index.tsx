import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import ToolbarButton from './ToolbarButton';

const Toolbar: FunctionalComponent = () => {
  const { dispatch } = useContext(Context);

  return (
    <nav className="toolbar">
      <ToolbarButton title="Resetovat" icon="reset" />
      <ToolbarButton
        title="Nastavení"
        icon="settings"
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
