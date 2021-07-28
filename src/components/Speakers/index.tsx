import { FunctionalComponent, h } from 'preact';
import Button from '../Button';

const Speakers: FunctionalComponent = () => (
  <section className="speakers">
    {
      Array.from({ length: 2 }).map(() => (
        <section className="speakers__column">
          {
            Array.from({ length: 5 }).map(() => <Button className="speakers__button" />)
          }
        </section>
      ))
    }
  </section>
);

export default Speakers;
