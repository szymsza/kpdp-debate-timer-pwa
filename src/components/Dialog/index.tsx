import { FunctionalComponent, h } from 'preact';
import DialogButton from './DialogButton';

const Dialog: FunctionalComponent = () => (
  <aside>
    <p>
      Dialog text
    </p>
    <DialogButton />
    <DialogButton />
  </aside>
);

export default Dialog;
