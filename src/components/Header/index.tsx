import { FunctionalComponent, h } from 'preact';
import Button from '../Button';
import Time from '../Time';

const Header: FunctionalComponent = () => (
  <header className="header">
    <Time
      time={{
        label: 'Time',
        total: 360,
        elapsed: 12,
      }}
      display="remaining"
      className="header__time"
    />
    <div className="header__button-wrapper">
      <Button title="Pozastavit" className="header__button" />
    </div>
  </header>
);

export default Header;
