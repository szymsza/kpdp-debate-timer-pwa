import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../../store';
import { getLinearTimeSlots } from '../../../store/getters';
import Card from './Card';

const TimeSlotsCarousel: FunctionalComponent = () => {
  const { store } = useContext(Context);
  const timeSlots = getLinearTimeSlots(store);

  return (
    <section className="time-slots-carousel">
      {
        timeSlots.map((slot) => (
          <Card timeSlot={slot} />
        ))
      }
    </section>
  );
};

export default TimeSlotsCarousel;
