import { FunctionalComponent, h } from 'preact';

interface TimeProps {
  className?: string
}

const Time: FunctionalComponent<TimeProps> = ({ className }) => (
  <span className={className ?? ''}>5:30</span>
);

export default Time;
