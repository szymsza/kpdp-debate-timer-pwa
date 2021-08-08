import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Dispatch } from '../../store/types';
import { Context } from '../../store';
import Button from '../Button';
import Time from '../Time';
import { getSelectedSpeaker } from '../../store/getters';

const togglePausedTimer = (dispatch: Dispatch) => {
  dispatch({
    type: 'TOGGLE_PAUSED_TIMER',
    payload: null,
  });
};

const Header: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const speaker = getSelectedSpeaker(store);

  return (
    <header className="header">
      <Time
        time={speaker}
        display="remaining"
        className="header__time"
      />
      <div className="header__button-wrapper">
        <Button
          title={speaker.paused ? 'Spustit' : 'Pozastavit'}
          className="header__button"
          active={!speaker.paused}
          onClick={() => togglePausedTimer(dispatch)}
        />
      </div>
    </header>
  );
};

export default Header;
