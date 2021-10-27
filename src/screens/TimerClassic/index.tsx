import { Fragment, FunctionalComponent, h } from 'preact';

import Header from '../../components/ModeClassic/Header';
import PrepTime from '../../components/ModeClassic/PrepTime';
import Speakers from '../../components/ModeClassic/Speakers';

const TimerClassic: FunctionalComponent = () => (
  <Fragment>
    <Header />
    <Speakers />
    <PrepTime />
  </Fragment>
);

export default TimerClassic;
