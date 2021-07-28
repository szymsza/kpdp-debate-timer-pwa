import { FunctionalComponent, h } from 'preact';

const Radio: FunctionalComponent = () => (
  <section>
    <p>Title:</p>
    <div>
      <label>
        <input type="radio" name="custom-radio" />
        Option 1
      </label>
      <label>
        <input type="radio" name="custom-radio" />
        Option 2
      </label>
      <label>
        <input type="radio" name="custom-radio" />
        Option 3
      </label>
    </div>
  </section>
);

export default Radio;
