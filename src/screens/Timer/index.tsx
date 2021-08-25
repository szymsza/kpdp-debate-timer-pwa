import { FunctionalComponent, h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';

import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';
import Dialog from '../../components/Dialog';
import { getActiveTimeSlot } from '../../store/getters';
import { Context } from '../../store';
import { TimeSlot } from '../../types';

const Timer: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const activeTimeSlot: TimeSlot | undefined = getActiveTimeSlot(store);

  // Effect is called each time active time slot changes/time ticks
  useEffect(() => {
    if (!activeTimeSlot) {
      return undefined;
    }

    const interval: ReturnType<typeof setTimeout> = setTimeout(() => {
      dispatch({
        type: 'TIMESLOT_TICK',
        payload: activeTimeSlot,
      });
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [activeTimeSlot]);

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
