import { FunctionalComponent, h } from 'preact';

import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';
import Dialog from '../../components/Dialog';

const Timer: FunctionalComponent = () => (
  <main className="screen screen--timer">
    <Header />
    <Speakers />
    <PrepTime />
    <Toolbar />
    <Dialog
      cancel={{
        title: 'Zrušit',
        onClick: () => {},
      }}
      confirm={{
        title: 'Ano',
        onClick: () => {},
      }}
    >
      <p>
        Opravdu si přejete stopky resetovat?
      </p>
    </Dialog>
  </main>
);

export default Timer;
