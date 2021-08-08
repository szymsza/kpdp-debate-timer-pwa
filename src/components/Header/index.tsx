import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Dispatch } from '../../store/types';
import { Context } from '../../store';
import Button from '../Button';
import Time from '../Time';
import { getActivePrepTime, getSelectedSpeaker } from '../../store/getters';

const togglePausedTimer = (dispatch: Dispatch) => {
  dispatch({
    type: 'TOGGLE_PAUSED_TIMER',
    payload: null,
  });
};

const Header: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const activeSpeaker = getSelectedSpeaker(store);
  const activePrepTime = getActivePrepTime(store);

  return (
    <header className="header">
      <Time
        time={activeSpeaker}
        display="remaining"
        className={`header__time ${activePrepTime ? 'header__time--disabled' : ''}`}
      />
      <div className="header__button-wrapper">
        <Button
          title={activeSpeaker.paused ? 'Spustit' : 'Pozastavit'}
          className="header__button"
          active={!activeSpeaker.paused}
          disabled={!!activePrepTime}
          onClick={() => togglePausedTimer(dispatch)}
        />
      </div>
    </header>
  );
};

export default Header;
