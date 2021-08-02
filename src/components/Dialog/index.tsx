import { FunctionalComponent, h } from 'preact';
import { StateUpdater } from 'preact/hooks';
import DialogButton, { ButtonOnClickEvent } from './DialogButton';

interface DialogButtonOptions {
  title: string
  onClick?: () => void
}

interface DialogProps {
  confirm?: DialogButtonOptions
  cancel?: DialogButtonOptions
  setVisible: StateUpdater<boolean>
}

const dialogActionClicked = (
  e: ButtonOnClickEvent,
  callback: (() => void) | undefined,
  setVisible: StateUpdater<boolean>,
) => {
  // Content clicked, not backdrop
  if (e.target !== e.currentTarget) return;

  if (callback) {
    callback();
  }
  setVisible(false);
};

const Dialog: FunctionalComponent<DialogProps> = ({
  children, confirm, cancel, setVisible,
}) => (
  <aside className="dialog" onClick={(e) => dialogActionClicked(e, confirm?.onClick, setVisible)}>
    <div className="dialog__content">
      {children}
      {confirm && (
        <DialogButton
          title={confirm.title}
          type="confirm"
          onClick={(e) => dialogActionClicked(e, confirm.onClick, setVisible)}
        />
      )}
      {cancel && (
        <DialogButton
          title={cancel.title}
          type="cancel"
          onClick={(e) => dialogActionClicked(e, cancel.onClick, setVisible)}
        />
      )}
    </div>
  </aside>
);

export default Dialog;
