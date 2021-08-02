import { FunctionalComponent, h } from 'preact';

export type ButtonOnClickEvent = h.JSX.TargetedEvent<HTMLElement, MouseEvent>;

interface DialogButtonProps {
  title: string
  onClick?: (e: ButtonOnClickEvent) => void
  type: 'cancel' | 'confirm'
}

const DialogButton: FunctionalComponent<DialogButtonProps> = ({ title, onClick, type }) => (
  <button
    type="button"
    onClick={(e) => (onClick ? onClick(e) : null)}
    className={`dialog__button dialog__button--${type}`}
  >
    {title}
  </button>
);

export default DialogButton;
