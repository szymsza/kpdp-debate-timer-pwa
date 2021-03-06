import { FunctionalComponent, h } from 'preact';
import { TimeSlot } from '../../types';

export type TimeDisplayOptions = 'elapsed' | 'remaining';

interface TimeProps {
  className?: string
  time: TimeSlot
  display: TimeDisplayOptions
}

const getTimeString = (seconds: number): string => {
  const secondsAbs = Math.abs(seconds);
  const minutesPart = Math.floor(secondsAbs / 60);
  const secondsPart = secondsAbs % 60;

  return `${seconds < 0 ? '-' : ''}${minutesPart}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
};

export const formatTime = (time: TimeSlot, display: TimeDisplayOptions = 'remaining') => {
  const seconds = display === 'elapsed' ? time.elapsed : time.total - time.elapsed;
  return getTimeString(seconds);
};

const Time: FunctionalComponent<TimeProps> = ({
  className, display, time,
}) => (
  <span className={className ?? ''}>
    {formatTime(time, display)}
  </span>
);

export default Time;
