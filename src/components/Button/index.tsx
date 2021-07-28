import { FunctionalComponent, h } from 'preact';
import Time from '../Time';

interface ButtonProps {
  className?: string
}

const Button: FunctionalComponent<ButtonProps> = ({ className }) => (
  <button type="button" className={`button ${className ?? ''}`}>
    <span className="button__title">Title</span>
    <span className="button__subtitle">
      <Time />
    </span>
  </button>
);

export default Button;
