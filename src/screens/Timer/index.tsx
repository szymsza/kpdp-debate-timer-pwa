import { FunctionalComponent, h } from 'preact';

import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';

const Timer: FunctionalComponent = () => (
  <div>
    <Header />
    <Speakers />
    <PrepTime />
    <Toolbar />
  </div>
);

export default Timer;
