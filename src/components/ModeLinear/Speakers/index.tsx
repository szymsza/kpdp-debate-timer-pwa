import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { Context } from '../../../store';
import { getLinearSpeakersData } from '../../../store/getters';
import { TimeSlot } from '../../../types';
import SpeakersBoxSlot from '../SpeakersBoxSlot';

const Speakers: FunctionalComponent = () => {
  const { store } = useContext(Context);
  const speakersData: TimeSlot[][][] = getLinearSpeakersData(store);

  return (
    <section className="speakers speakers--linear">
      {
        speakersData.map((party) => (
          <section className={`speakers__column speakers__column--linear speakers__column--${party[0][0].party}`}>
            {
              party.map((timeSlots) => (
                <SpeakersBoxSlot timeSlots={timeSlots} />
              ))
            }
          </section>
        ))
      }
    </section>
  );
};

export default Speakers;
