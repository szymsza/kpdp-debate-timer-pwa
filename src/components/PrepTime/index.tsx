import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import Button from '../Button';
import { Dispatch } from '../../store/types';

const setActivePrepTime = (dispatch: Dispatch, label: string) => {
  dispatch({
    type: 'SET_ACTIVE_PREP_TIME',
    payload: label,
  });
};

const PrepTime: FunctionalComponent = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <section className="preptime">
      <h2 className="preptime__heading">Přípravný čas</h2>
      {
        state.prepTimes.map((time) => (
          <Button
            title={time.label}
            className="preptime__button"
            active={time.active}
            inverse
            time={time}
            onClick={() => setActivePrepTime(dispatch, time.label)}
          />
        ))
      }
    </section>
  );
};

export default PrepTime;
