import { Fragment, FunctionalComponent, h } from 'preact';

import Header from '../../components/ModeClassic/Header';
import PrepTime from '../../components/ModeClassic/PrepTime';
import Speakers from '../../components/ModeLinear/Speakers';

const TimerLinear: FunctionalComponent = () => (
  <Fragment>
    <Speakers />
    <Header />
    <PrepTime />
  </Fragment>
);

export default TimerLinear;
