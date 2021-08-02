import { FunctionalComponent, h } from 'preact';
import Button from '../Button';

const Speakers: FunctionalComponent = () => (
  <section className="speakers">
    {
      Array.from({ length: 2 }).map((_, index2) => (
        <section className="speakers__column">
          {
            Array.from({ length: 5 }).map((_, index) => (
              <Button
                title={index > 2 ? 'N3 ➝ A1' : 'A1'}
                className="speakers__button"
                active={index === 2}
                disabled={index === 3 || (index === 2 && index2 === 1)}
                time={{
                  label: 'Time',
                  total: 360,
                  elapsed: 12,
                }}
              />
            ))
          }
        </section>
      ))
    }
  </section>
);

export default Speakers;
