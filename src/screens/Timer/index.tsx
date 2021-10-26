import { FunctionalComponent, h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';

import TimerClassic from '../TimerClassic';
import Toolbar from '../../components/Toolbar';
import Dialog from '../../components/Dialog';
import { getActiveStoreMode, getActiveTimeSlot } from '../../store/getters';
import { Context } from '../../store';
import { TimeSlot } from '../../types';
import { Dispatch } from '../../store/types';
import localisation from '../../localisation';
import { Mode } from '../../modes';
import TimerLinear from '../TimerLinear';

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
  const activeMode: Mode = getActiveStoreMode(store);

  useEffect(() => tickTimer(activeTimeSlot, dispatch), [activeTimeSlot]);

  return (
    <main className="screen screen--timer">
      {
        activeMode === 'classic'
          ? <TimerClassic />
          : <TimerLinear />
      }
      <Toolbar />
      {store.resetDialogVisible && (
        <Dialog
          cancel={{
            title: localisation.cancel,
          }}
          confirm={{
            title: localisation.ok,
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
            {localisation.resetConfirm}
          </p>
        </Dialog>
      )}
    </main>
  );
};

export default Timer;
