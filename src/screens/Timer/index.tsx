import { FunctionalComponent, h } from 'preact';

import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';
import Dialog from '../../components/Dialog';

const Timer: FunctionalComponent = () => (
  <main>
    <Header />
    <Speakers />
    <PrepTime />
    <Toolbar />
    <Dialog />
  </main>
);

export default Timer;
