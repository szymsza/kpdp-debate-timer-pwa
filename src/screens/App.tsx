import { FunctionalComponent, h } from 'preact';
import Store from '../store';
import Screens from './index';

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <Store>
      <Screens />
    </Store>
  </div>
);

export default App;
