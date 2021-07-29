import { FunctionalComponent, h } from 'preact';
import { TimeSlot } from '../../types';

interface TimeProps {
  className?: string
  time: TimeSlot
  display: 'elapsed' | 'remaining'
}

const Time: FunctionalComponent<TimeProps> = ({ className }) => (
  <span className={className ?? ''}>5:30</span>
);

export default Time;
