import { FunctionalComponent, h } from 'preact';
import Time from '../../Time';
import { TimeSlot } from '../../../types';
import localisation from '../../../localisation';

export type CardOnClickEvent = h.JSX.TargetedEvent<HTMLElement, MouseEvent>;

interface CardProps {
  timeSlot: TimeSlot
  active: boolean,
  onClick?: (e: CardOnClickEvent) => void
}

const Card: FunctionalComponent<CardProps> = ({
  timeSlot,
  active,
  onClick,
}) => (
  <button
    type="button"
    disabled={!active}
    className={`time-slots-carousel__card time-slots-carousel__card--${timeSlot.party} ${!active ? 'time-slots-carousel__card--disabled' : ''}`}
    onClick={(e) => (onClick ? onClick(e) : null)}
  >
    <span className="time-slots-carousel__card-label">
      {timeSlot.label}
      { timeSlot.type === 'prepTime' && localisation.linearPrepTimeSuffix }
    </span>
    <Time
      className="main-time time-slots-carousel__card-time"
      time={timeSlot}
      display="remaining"
    />
  </button>
);

export default Card;
