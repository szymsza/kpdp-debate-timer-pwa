import { FunctionalComponent, h } from 'preact';
import ToolbarButton from './ToolbarButton';

const Toolbar: FunctionalComponent = () => (
  <nav className="toolbar">
    <ToolbarButton title="Resetovat" icon="reset" />
    <ToolbarButton title="Nastavení" icon="settings" />
  </nav>
);

export default Toolbar;
