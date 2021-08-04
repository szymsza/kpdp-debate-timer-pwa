import { FunctionalComponent, h } from 'preact';
import ResetIcon from '../Icons/Reset';
import SettingsIcon from '../Icons/Settings';

interface ToolbarButtonProps {
  title: string
  icon: 'reset' | 'settings'
  onClick?: () => void
}

const ToolbarButton: FunctionalComponent<ToolbarButtonProps> = ({ title, icon, onClick }) => (
  <button type="button" className="toolbar__button" onClick={() => (onClick ? onClick() : null)}>
    <div className="toolbar__button-icon">
      {icon === 'reset' ? <ResetIcon /> : <SettingsIcon />}
    </div>
    {title}
  </button>
);

export default ToolbarButton;
