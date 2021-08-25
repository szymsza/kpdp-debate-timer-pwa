import { FunctionalComponent, h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';
import Dialog from '../../components/Dialog';
import { getActiveTimeSlot } from '../../store/getters';
import { Context } from '../../store';
import { TimeSlot } from '../../types';
import { Dispatch } from '../../store/types';

// Called each time active time slot changes/time ticks
const tickTimer = (activeTimeSlot: TimeSlot | undefined, dispatch: Dispatch) => {
  if (!activeTimeSlot) {
    return undefined;
  }

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const sinceLastTick = Date.now() - activeTimeSlot.timeStartedDate!;

    if (sinceLastTick < 975) {
      return;
    }

    dispatch({
      type: 'TIMESLOT_TICK',
      payload: activeTimeSlot,
    });
  }, 75);

  return () => {
    clearInterval(interval);
  };
};

const Timer: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const activeTimeSlot: TimeSlot | undefined = getActiveTimeSlot(store);

  useEffect(() => tickTimer(activeTimeSlot, dispatch), [activeTimeSlot]);

  return (
    <main className="screen screen--timer">
      <Header />
      <Speakers />
      <PrepTime />
      <Toolbar />
      {store.resetDialogVisible && (
        <Dialog
          cancel={{
            title: 'Zrušit',
          }}
          confirm={{
            title: 'Ano',
            onClick: () => dispatch({
              type: 'RESET',
              payload: null,
            }),
          }}
          setVisible={(visible: boolean) => dispatch({
            type: 'TOGGLE_RESET_DIALOG',
            payload: visible,
          })}
        >
          <p>
            Opravdu si přejete stopky resetovat?
          </p>
        </Dialog>
      )}
    </main>
  );
};

export default Timer;
