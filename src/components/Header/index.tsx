import { FunctionalComponent, h } from 'preact';
import Button from '../Button';
import Time from '../Time';

const Header: FunctionalComponent = () => (
  <header className="header">
    <Time className="header__time" />
    <div className="header__button">
      <Button />
    </div>
  </header>
);

export default Header;
