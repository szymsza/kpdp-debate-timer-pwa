import { FunctionalComponent, h } from 'preact';

import Timer from './Timer';
// import Settings from './Settings';

/* TODO create global store
    - screen
        - timer/settings
        - later connect to URL
    - theme colour
        - auto/light/dark
        - add `data-theme` to #preact_root
    - speakers
        - map config:
            - add `selected` property
            - add `paused` property
            - convert total minutes to seconds + add elapsed
    - prep times
        - map config:
            - add `active` property
            - convert total minutes to seconds + add elapsed
*/

const App: FunctionalComponent = () => (
  <div id="preact_root">
    <Timer />
    {/* <Settings /> */}
  </div>
);

export default App;
