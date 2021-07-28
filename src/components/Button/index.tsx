import { FunctionalComponent, h } from 'preact';
import Time from '../Time';

const Button: FunctionalComponent = () => (
  <button type="button">
    <span>Title</span>
    <span>
      <Time />
    </span>
  </button>
);

export default Button;
