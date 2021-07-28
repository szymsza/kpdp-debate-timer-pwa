import { FunctionalComponent, h } from 'preact';

const Radio: FunctionalComponent = () => (
  <section className="radio">
    <p className="radio__label">Title:</p>
    <div className="radio__options">
      <div className="radio__option radio__option--active">
        Option 1
      </div>
      <div className="radio__option">
        Option 2
      </div>
      <div className="radio__option">
        Option 3
      </div>
    </div>
  </section>
);

export default Radio;
