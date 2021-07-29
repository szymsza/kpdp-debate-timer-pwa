import { FunctionalComponent, h } from 'preact';
import { StateUpdater } from 'preact/hooks';
import DialogButton, { DialogButtonProps } from './DialogButton';

interface DialogProps {
  confirm?: DialogButtonProps
  cancel?: DialogButtonProps
  setVisible: StateUpdater<boolean>
}

const Dialog: FunctionalComponent<DialogProps> = ({
  children, confirm, cancel, setVisible,
}) => (
  <aside>
    {children}
    {cancel && (
      <DialogButton
        title={cancel.title}
        onClick={() => {
          if (cancel.onClick) {
            cancel.onClick();
          }
          setVisible(false);
        }}
      />
    )}
    {confirm && (
      <DialogButton
        title={confirm.title}
        onClick={() => {
          if (confirm.onClick) {
            confirm.onClick();
          }
          setVisible(false);
        }}
      />
    )}
  </aside>
);

export default Dialog;
