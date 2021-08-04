import { FunctionalComponent, h } from 'preact';

import Timer from './Timer';
import Store from '../store';
// import Settings from './Settings';

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <Store>
      <Timer />
      {/* <Settings / */}
    </Store>
  </div>
);

export default App;
