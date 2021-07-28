import { FunctionalComponent, h } from 'preact';

const Navbar: FunctionalComponent = () => (
  <nav className="nav">
    <button type="button" className="nav__back">&lt;</button>
    <h1 className="nav__heading">
      Debatní stopky
    </h1>
  </nav>
);

export default Navbar;
