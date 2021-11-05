import { Fragment, FunctionalComponent, h } from 'preact';

import PrepTime from '../../components/ModeLinear/PrepTime';
import Speakers from '../../components/ModeLinear/Speakers';
import TimeSlotsCarousel from '../../components/ModeLinear/TimeSlotsCarousel';
import FeatureDiscovery from '../../components/ModeLinear/FeatureDiscovery';

const TimerLinear: FunctionalComponent = () => (
  <Fragment>
    <Speakers />
    <PrepTime />
    <TimeSlotsCarousel />
    <FeatureDiscovery />
  </Fragment>
);

export default TimerLinear;
