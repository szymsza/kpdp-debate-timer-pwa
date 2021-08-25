import { FunctionalComponent, h } from 'preact';
import Time, { TimeDisplayOptions } from '../Time';
import { TimeSlot } from '../../types';

export type ButtonOnClickEvent = h.JSX.TargetedEvent<HTMLElement, MouseEvent>;

interface ButtonProps {
  title: string
  className?: string
  time?: TimeSlot
  active?: boolean
  inverse?: boolean
  disabled?: boolean
  display?: TimeDisplayOptions
  onClick?: (e: ButtonOnClickEvent) => void
}

const Button: FunctionalComponent<ButtonProps> = ({
  title,
  className,
  time,
  active,
  inverse,
  disabled,
  display = 'elapsed',
  onClick,
}) => (
  <button
    type="button"
    onClick={(e) => (onClick ? onClick(e) : null)}
    className={`button ${className ?? ''} ${active ? 'button--active' : ''} ${inverse ? 'button--inverse' : ''} ${disabled ? 'button--disabled' : ''}`}
    disabled={disabled}
  >
    <span className="button__title">{title}</span>
    {time && (
      <span className="button__subtitle">
        <Time time={time} display={display} />
      </span>
    )}
  </button>
);

export default Button;
