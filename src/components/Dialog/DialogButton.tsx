import { FunctionalComponent, h } from 'preact';

export interface DialogButtonProps {
  title: string
  onClick?: () => void
}

const DialogButton: FunctionalComponent<DialogButtonProps> = ({ title, onClick }) => (
  <button type="button" onClick={() => (onClick ? onClick() : null)}>
    {title}
  </button>
);

export default DialogButton;
