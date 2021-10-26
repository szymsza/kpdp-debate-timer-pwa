import { Fragment, FunctionalComponent, h } from 'preact';

import Header from '../../components/Header';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';

const TimerLinear: FunctionalComponent = () => (
  <Fragment>
    <Header />
    <Speakers />
    <PrepTime />
  </Fragment>
);

export default TimerLinear;
