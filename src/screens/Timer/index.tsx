import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';

import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import PrepTime from '../../components/PrepTime';
import Speakers from '../../components/Speakers';
import Dialog from '../../components/Dialog';

const Timer: FunctionalComponent = () => {
  const [resetDialogVisible, setResetDialogVisible] = useState<boolean>(false);

  return (
    <main className="screen screen--timer">
      <Header />
      <Speakers />
      <PrepTime />
      <Toolbar />
      {resetDialogVisible && (
        <Dialog
          cancel={{
            title: 'Zrušit',
            onClick: () => {},
          }}
          confirm={{
            title: 'Ano',
            onClick: () => {},
          }}
          setVisible={setResetDialogVisible}
        >
          <p>
            Opravdu si přejete stopky resetovat?
          </p>
        </Dialog>
      )}
    </main>
  );
};

export default Timer;
