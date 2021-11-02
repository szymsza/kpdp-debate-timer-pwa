import { FunctionalComponent, h } from 'preact';

import { TimeSlot } from '../../../types';
import Time from '../../Time';

interface SpeakerBoxSlotProps {
  timeSlots: TimeSlot[]
}

const SpeakersBoxSlot: FunctionalComponent<SpeakerBoxSlotProps> = ({
  timeSlots,
}) => (
  <section className="speakers-box__slot">
    {
      timeSlots.map((slot, index) => (
        <div
          className={`speakers-box__row speakers-box__row--${index === 0 ? 'speaker' : 'questioner'} ${slot.elapsed === 0 && slot.paused ? 'speakers-box__row--timeless' : ''}`}
        >
          <span className="speakers-box__label">{slot.label}</span>
          <Time className="speakers-box__time" time={slot} display="elapsed" />
        </div>
      ))
    }
  </section>
);

export default SpeakersBoxSlot;
