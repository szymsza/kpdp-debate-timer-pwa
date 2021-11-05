import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../../store';
import Card from './Card';
import { getLinearActiveSlotIndex, getLinearTimeSlots } from '../getters';
import { TimeSlot } from '../../../types';
import { Dispatch } from '../../../store/types';

const handleCardClick = (
  activeSlot: TimeSlot, dispatch: Dispatch,
) => {
  dispatch({
    type: activeSlot.paused ? 'TOGGLE_PAUSED_TIMER' : 'INCREMENT_LINEAR_ACTIVE_SLOT_INDEX',
    payload: null,
  });
};

const TimeSlotsCarousel: FunctionalComponent = () => {
  const { store, dispatch } = useContext(Context);
  const timeSlots: TimeSlot[] = getLinearTimeSlots(store);
  const activeSlotIndex = getLinearActiveSlotIndex(store);

  return (
    <section className={`time-slots-carousel time-slots-carousel--card-${activeSlotIndex}-visible`}>
      {
        timeSlots.map((slot, index) => (
          <Card
            timeSlot={slot}
            active={index === activeSlotIndex}
            onClick={() => {
              if (index !== activeSlotIndex) {
                return;
              }

              handleCardClick(slot, dispatch);
            }}
          />
        ))
      }
    </section>
  );
};

export default TimeSlotsCarousel;
