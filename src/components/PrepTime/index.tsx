import { FunctionalComponent, h } from 'preact';
import Button from '../Button';

const PrepTime: FunctionalComponent = () => (
  <section className="preptime">
    <h2 className="preptime__heading">Přípravný čas</h2>
    <Button className="preptime__button" />
    <Button className="preptime__button" />
  </section>
);

export default PrepTime;
