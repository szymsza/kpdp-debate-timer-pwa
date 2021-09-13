import { FunctionalComponent, h, Fragment } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { Context } from '../store';
import Settings from './Settings';
import Timer from './Timer';

const Screens: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);

  // Runs only once on page load
  useEffect(() => {
    // Listen to browser back arrow
    window.onpopstate = (event: PopStateEvent) => {
      const screen = event.state ?? 'timer';
      dispatch({
        type: 'SET_SCREEN',
        payload: {
          screen,
          pushHistory: false,
        },
      });
    };

    // Initial page load
    dispatch({
      type: 'SET_SCREEN',
      payload: {
        screen: document.location.pathname.substr(1 + String(process.env.SUBFOLDER).length),
        pushHistory: false,
      },
    });

    // Hide page preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.remove();
    }
  }, []);

  return (
    <Fragment>
      {store.screen === 'timer' && <Timer />}
      {store.screen === 'settings' && <Settings />}
    </Fragment>
  );
};

export default Screens;
