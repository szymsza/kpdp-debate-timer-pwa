import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import Button from '../Button';
import { Dispatch } from '../../store/types';

const toggleActivePrepTime = (dispatch: Dispatch, label: string) => {
  dispatch({
    type: 'TOGGLE_ACTIVE_PREP_TIME',
    payload: label,
  });
};

const PrepTime: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);

  return (
    <section className="preptime">
      <h2 className="preptime__heading">Přípravný čas</h2>
      {
        store.prepTimes.map((time) => (
          <Button
            title={time.label}
            className="preptime__button"
            active={time.active}
            inverse
            time={time}
            onClick={() => toggleActivePrepTime(dispatch, time.label)}
          />
        ))
      }
    </section>
  );
};

export default PrepTime;
