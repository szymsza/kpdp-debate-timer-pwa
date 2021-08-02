import { FunctionalComponent, h } from 'preact';
import ResetIcon from '../Icons/Reset';
import SettingsIcon from '../Icons/Settings';

interface ToolbarButtonProps {
  title: string
  icon: 'reset' | 'settings'
}

const ToolbarButton: FunctionalComponent<ToolbarButtonProps> = ({ title, icon }) => (
  <button type="button" className="toolbar__button">
    { icon === 'reset' ? <ResetIcon /> : <SettingsIcon /> }
    { title }
  </button>
);

export default ToolbarButton;
