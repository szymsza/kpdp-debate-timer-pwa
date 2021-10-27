import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../../store';
import { Dispatch } from '../../../store/types';
import { getActivePrepTime, getSelectedSpeaker } from '../../../store/getters';
import Button from '../../Button';
import Time from '../../Time';

const togglePausedTimer = (dispatch: Dispatch) => {
  dispatch({
    type: 'TOGGLE_PAUSED_TIMER',
    payload: null,
  });
};

const PrepTime: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const activeSpeaker = getSelectedSpeaker(store);
  const activePrepTime = getActivePrepTime(store);

  return (
    <section className="preptime preptime--linear">
      {
        store.prepTimes.map((time) => (
          <span className={`preptime__button preptime__button--linear preptime__button--${time.party}`}>
            <Time time={time} display="remaining" />
          </span>
        ))
      }
      <Button
        className={`preptime__toggle-paused-button preptime__toggle-paused-button--${activeSpeaker.party}`}
        title={activeSpeaker.paused ? '>' : '||'}
        active
        disabled={!!activePrepTime}
        onClick={() => togglePausedTimer(dispatch)}
      />
    </section>
  );
};

export default PrepTime;
