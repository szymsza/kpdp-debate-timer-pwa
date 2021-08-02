import { FunctionalComponent, h } from 'preact';
import ResetIcon from '../Icons/Reset';
import SettingsIcon from '../Icons/Settings';

interface ToolbarButtonProps {
  title: string
  icon: 'reset' | 'settings'
}

const ToolbarButton: FunctionalComponent<ToolbarButtonProps> = ({ title, icon }) => (
  <button type="button" className="toolbar__button">
    <div className="toolbar__button-icon">
      { icon === 'reset' ? <ResetIcon /> : <SettingsIcon /> }
    </div>
    { title }
  </button>
);

export default ToolbarButton;
