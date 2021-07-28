import { FunctionalComponent, h } from 'preact';
import ToolbarButton from '../ToolbarButton';

const Toolbar: FunctionalComponent = () => (
  <nav>
    <ToolbarButton />
    <ToolbarButton />
  </nav>
);

export default Toolbar;
