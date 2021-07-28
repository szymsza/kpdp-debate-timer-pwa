import { FunctionalComponent, h } from 'preact';
import Navbar from '../../components/Navbar';
import Switch from '../../components/Switch';
import About from '../../components/About';

const Settings: FunctionalComponent = () => (
  <main>
    <Navbar />
    <Switch />
    <About />
  </main>
);

export default Settings;
