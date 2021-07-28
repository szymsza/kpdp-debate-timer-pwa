import { FunctionalComponent, h } from 'preact';
import Button from '../Button';

const Speakers: FunctionalComponent = () => (
  <section>
    {
      Array.from({ length: 2 }).map(() => (
        <section>
          {
            Array.from({ length: 5 }).map(() => <Button />)
          }
        </section>
      ))
    }
  </section>
);

export default Speakers;
