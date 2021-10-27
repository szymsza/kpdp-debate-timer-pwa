import { FunctionalComponent, h } from 'preact';
import Time from '../../Time';
import { TimeSlot } from '../../../types';

interface CardProps {
  timeSlot: TimeSlot
}

const Card: FunctionalComponent<CardProps> = ({
  timeSlot,
}) => (
  <div className={`time-slots-carousel__card time-slots-carousel__card--${timeSlot.party}`}>
    <span className="time-slots-carousel__card-label">
      {timeSlot.label}
    </span>
    <Time
      className="main-time time-slots-carousel__card-time"
      time={timeSlot}
      display="remaining"
    />
  </div>
);

export default Card;
