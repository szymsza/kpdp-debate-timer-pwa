import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../store';
import Button from '../Button';

const PrepTime: FunctionalComponent = () => {
  const { state } = useContext(Context);

  return (
    <section className="preptime">
      <h2 className="preptime__heading">Přípravný čas</h2>
      {
        state.prepTimes.map((time) => (
          <Button
            title={time.label}
            className="preptime__button"
            inverse
            time={time}
          />
        ))
      }
    </section>
  );
};

export default PrepTime;
