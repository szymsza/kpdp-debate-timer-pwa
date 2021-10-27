import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../../store';
import { getSelectedSpeaker } from '../../../store/getters';
import Card from './Card';

const TimeSlotsCarousel: FunctionalComponent = () => {
  const { store } = useContext(Context);
  const activeSpeaker = getSelectedSpeaker(store);

  return (
    <section className="time-slots-carousel">
      <Card timeSlot={activeSpeaker} />
    </section>
  );
};

export default TimeSlotsCarousel;
