import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import Button from '../Button';
import { Dispatch } from '../../store/types';

const selectSpeaker = (dispatch: Dispatch, label: string) => {
  dispatch({
    type: 'SELECT_SPEAKER',
    payload: label,
  });
};

const Speakers: FunctionalComponent = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <section className="speakers">
      {
        state.speakers.map((party) => (
          <section className="speakers__column">
            {
              party.map((speaker) => (
                <Button
                  title={speaker.label}
                  className="speakers__button"
                  active={speaker.selected}
                  disabled={false}
                  time={speaker}
                  onClick={() => selectSpeaker(dispatch, speaker.label)}
                />
              ))
            }
          </section>
        ))
      }
    </section>
  );
};

export default Speakers;
