import { FunctionalComponent, h } from 'preact';

export interface DialogButtonProps {
  title: string
  onClick: () => void
}

const DialogButton: FunctionalComponent<DialogButtonProps> = ({ title, onClick }) => (
  <button type="button" onClick={() => onClick()}>
    {title}
  </button>
);

export default DialogButton;
