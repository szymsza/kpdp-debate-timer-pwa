import { FunctionalComponent, h } from 'preact';

import Timer from './Timer';
import Settings from './Settings';

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <Timer />
    <Settings />
  </div>
);

export default App;
