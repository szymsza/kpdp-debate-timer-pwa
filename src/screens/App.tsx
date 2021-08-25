import { FunctionalComponent, h } from 'preact';
import { useEffect } from 'preact/hooks';
import Store from '../store';
import Screens from './index';
import { activateThemeColour } from '../themes';

const App: FunctionalComponent = () => {
  // Runs only once on page load
  useEffect(() => {
    activateThemeColour();
  }, []);

  return (
    <div id="preact_root">
      <Store>
        <Screens />
      </Store>
    </div>
  );
};

export default App;
