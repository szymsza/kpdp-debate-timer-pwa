import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import Button from '../Button';

const Speakers: FunctionalComponent = () => {
  const { state } = useContext(Context);
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
