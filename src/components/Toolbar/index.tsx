import { FunctionalComponent, h } from 'preact';
import ToolbarButton from './ToolbarButton';

const Toolbar: FunctionalComponent = () => (
  <nav className="toolbar">
    <ToolbarButton title="Resetovat" icon="O" />
    <ToolbarButton title="Nastavení" icon="I" />
  </nav>
);

export default Toolbar;
