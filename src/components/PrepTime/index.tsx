import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import { Dispatch } from '../../store/types';
import { getActivePrepTime, getSelectedSpeaker } from '../../store/getters';
import Button from '../Button';
import localisation from '../../localisation';

const toggleActivePrepTime = (dispatch: Dispatch, label: string) => {
  dispatch({
    type: 'TOGGLE_ACTIVE_PREP_TIME',
    payload: label,
  });
};

const PrepTime: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const activeSpeaker = getSelectedSpeaker(store);
  const activePrepTime = getActivePrepTime(store);

  return (
    <section className="preptime">
      <h2 className="preptime__heading">{localisation.preptime}</h2>
      {
        store.prepTimes.map((time) => (
          <Button
            title={time.label}
            className="preptime__button"
            time={time}
            active={time.active}
            inverse
            disabled={(activePrepTime && activePrepTime !== time) || !activeSpeaker.paused}
            party={time.party}
            display="remaining"
            onClick={() => toggleActivePrepTime(dispatch, time.label)}
          />
        ))
      }
    </section>
  );
};

export default PrepTime;
