import { FunctionalComponent, h } from 'preact';
import Button from '../Button';

const PrepTime: FunctionalComponent = () => (
  <section className="preptime">
    <h2 className="preptime__heading">Přípravný čas</h2>
    <Button
      title="Afirmace"
      className="preptime__button"
      inverse
      time={{
        label: 'Time',
        total: 360,
        elapsed: 12,
      }}
    />
    <Button
      title="Negace"
      className="preptime__button"
      inverse
      time={{
        label: 'Time',
        total: 360,
        elapsed: 12,
      }}
    />
  </section>
);

export default PrepTime;
