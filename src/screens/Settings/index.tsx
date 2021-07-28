import { FunctionalComponent, h } from 'preact';
import { StateUpdater, useState } from 'preact/hooks';
import Navbar from '../../components/Navbar';
import Radio, { RadioOption } from '../../components/Radio';
import About from '../../components/About';

const setActiveColourMode = (newValue: string, setState: StateUpdater<RadioOption[]>): void => {
  setState((old) => old.map((item) => ({
    ...item,
    active: item.value === newValue,
  })));
};

const initialColourModes: RadioOption[] = [{
  label: 'Auto',
  value: 'auto',
  active: true,
}, {
  label: 'Tmavý',
  value: 'dark',
  active: false,
}, {
  label: 'Světlý',
  value: 'light',
  active: false,
}];

const Settings: FunctionalComponent = () => {
  const [colourModes, setColourModes] = useState<RadioOption[]>(initialColourModes);

  return (
    <main className="screen screen--settings">
      <Navbar />
      <Radio
        label="Barevný režim:"
        options={colourModes}
        onChange={(newValue) => setActiveColourMode(newValue, setColourModes)}
      />
      <About />
    </main>
  );
};

export default Settings;
