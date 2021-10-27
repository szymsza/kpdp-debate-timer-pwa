import { Fragment, FunctionalComponent, h } from 'preact';

import PrepTime from '../../components/ModeLinear/PrepTime';
import Speakers from '../../components/ModeLinear/Speakers';
import TimeSlotsCarousel from '../../components/ModeLinear/TimeSlotsCarousel';

const TimerLinear: FunctionalComponent = () => (
  <Fragment>
    <Speakers />
    <PrepTime />
    <TimeSlotsCarousel />
  </Fragment>
);

export default TimerLinear;
