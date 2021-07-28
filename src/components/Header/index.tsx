import { FunctionalComponent, h } from 'preact';
import Button from '../Button';
import Time from '../Time';

const Header: FunctionalComponent = () => (
  <header>
    <Time />
    <Button />
  </header>
);

export default Header;
