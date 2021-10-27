import { Fragment, FunctionalComponent, h } from 'preact';

import Header from '../../components/ModeClassic/Header';
import PrepTime from '../../components/ModeLinear/PrepTime';
import Speakers from '../../components/ModeLinear/Speakers';

const TimerLinear: FunctionalComponent = () => (
  <Fragment>
    <Speakers />
    <PrepTime />
    <Header />
  </Fragment>
);

export default TimerLinear;
