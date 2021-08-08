import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Dispatch } from '../../store/types';
import { Context } from '../../store';
import Button from '../Button';
import Time from '../Time';

const togglePausedTimer = (dispatch: Dispatch) => {
  dispatch({
    type: 'TOGGLE_PAUSED_TIMER',
    payload: null,
  });
};

const Header: FunctionalComponent = () => {
  const { dispatch } = useContext(Context);

  return (
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
        <Button
          title="Pozastavit"
          className="header__button"
          onClick={() => togglePausedTimer(dispatch)}
        />
      </div>
    </header>
  );
};

export default Header;
