import { FunctionalComponent, h } from 'preact';
import ResetIcon from '../Icons/Reset';
import SettingsIcon from '../Icons/Settings';

interface ToolbarButtonProps {
  title: string
  icon: 'reset' | 'settings'
  onClick?: () => void
  disabled: boolean
}

const ToolbarButton: FunctionalComponent<ToolbarButtonProps> = ({
  title,
  icon,
  onClick,
  disabled,
}) => (
  <button
    type="button"
    className={`toolbar__button ${disabled ? 'toolbar__button--disabled' : ''}`}
    onClick={() => (onClick ? onClick() : null)}
    disabled={disabled}
  >
    <div className="toolbar__button-icon">
      {icon === 'reset' ? <ResetIcon /> : <SettingsIcon />}
    </div>
    {title}
  </button>
);

export default ToolbarButton;
