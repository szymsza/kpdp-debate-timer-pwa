import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import Back from '../Icons/Back';
import localisation from '../../localisation';

const Navbar: FunctionalComponent = () => {
  const { dispatch } = useContext(Context);

  return (
    <nav className="nav">
      <button
        type="button"
        className="nav__back"
        onClick={() => {
          dispatch({
            type: 'SET_SCREEN',
            payload: 'timer',
          });
        }}
      >
        <Back />
      </button>
      <h1 className="nav__heading">
        {localisation.title}
      </h1>
      <span className="nav__filler" />
    </nav>
  );
};

export default Navbar;
