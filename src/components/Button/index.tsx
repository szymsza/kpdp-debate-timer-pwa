import { FunctionalComponent, h } from 'preact';
import Time from '../Time';
import { TimeSlot } from '../../types';

interface ButtonProps {
  title: string
  className?: string
  time?: TimeSlot
  active?: boolean
  inverse?: boolean
  disabled?: boolean
}

const Button: FunctionalComponent<ButtonProps> = ({
  title,
  className,
  time,
  active,
  inverse,
  disabled,
}) => (
  <button
    type="button"
    className={`button ${className ?? ''} ${active ? 'button--active' : ''} ${inverse ? 'button--inverse' : ''} ${disabled ? 'button--disabled' : ''}`}
    disabled={disabled}
  >
    <span className="button__title">{title}</span>
    {time && (
      <span className="button__subtitle">
        <Time time={time} display="elapsed" />
      </span>
    )}
  </button>
);

export default Button;
