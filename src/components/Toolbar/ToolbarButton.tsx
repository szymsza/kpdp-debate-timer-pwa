import { FunctionalComponent, h } from 'preact';

interface ToolbarButtonProps {
  title: string
  icon: string
}

const ToolbarButton: FunctionalComponent<ToolbarButtonProps> = ({ title, icon }) => (
  <button type="button" className="toolbar__button">
    { icon }
    { title }
  </button>
);

export default ToolbarButton;
