import { FunctionalComponent, h } from 'preact';
import DialogButton, { DialogButtonProps } from './DialogButton';

interface DialogProps {
  confirm?: DialogButtonProps
  cancel?: DialogButtonProps
}

const Dialog: FunctionalComponent<DialogProps> = ({ children, confirm, cancel }) => (
  <aside>
    {children}
    {cancel && (
      <DialogButton
        title={cancel.title}
        onClick={() => {
          cancel.onClick();
          // TODO - close dialog
        }}
      />
    )}
    {confirm && (
      <DialogButton
        title={confirm.title}
        onClick={() => {
          confirm.onClick();
          // TODO - close dialog
        }}
      />
    )}
  </aside>
);

export default Dialog;
