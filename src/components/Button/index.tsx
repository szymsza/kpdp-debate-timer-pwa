import { FunctionalComponent, h } from 'preact';
import Time, { TimeDisplayOptions } from '../Time';
import { Party, TimeSlot } from '../../types';

export type ButtonOnClickEvent = h.JSX.TargetedEvent<HTMLElement, MouseEvent>;

interface ButtonProps {
  title?: string
  icon?: FunctionalComponent
  className?: string
  time?: TimeSlot
  active?: boolean
  inverse?: boolean
  disabled?: boolean
  party?: Party
  display?: TimeDisplayOptions
  onClick?: (e: ButtonOnClickEvent) => void
}

const Button: FunctionalComponent<ButtonProps> = ({
  title,
  icon: Icon,
  className,
  time,
  active,
  inverse,
  disabled,
  party,
  display = 'elapsed',
  onClick,
}) => (
  <button
    type="button"
    onClick={(e) => (onClick ? onClick(e) : null)}
    className={`button ${className ?? ''} ${active ? 'button--active' : ''} ${inverse ? 'button--inverse' : ''} ${disabled ? 'button--disabled' : ''} ${party ? `button--${party}` : ''}`}
    disabled={disabled}
  >
    {Icon && <Icon />}
    {title && <span className="button__title">{title}</span>}
    {time && (
      <span className="button__subtitle">
        <Time time={time} display={display} />
      </span>
    )}
  </button>
);

export default Button;
