import { FunctionalComponent, h } from 'preact';
import Navbar from '../../components/Navbar';
import Radio from '../../components/Radio';
import About from '../../components/About';

const Settings: FunctionalComponent = () => (
  <main>
    <Navbar />
    <Radio />
    <About />
  </main>
);

export default Settings;
