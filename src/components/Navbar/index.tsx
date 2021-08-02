import { FunctionalComponent, h } from 'preact';
import Back from '../Icons/Back';

const Navbar: FunctionalComponent = () => (
  <nav className="nav">
    <button type="button" className="nav__back">
      <Back />
    </button>
    <h1 className="nav__heading">
      Debatní stopky
    </h1>
  </nav>
);

export default Navbar;
