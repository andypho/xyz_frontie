"use client";

import { useEffect } from "react";

type Props = {
  modalId: string;
  title?: string;
  open: boolean;
  onOk?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent> | KeyboardEvent,
  ) => void;
  children: React.ReactNode;
};

const Modal = (props: Props) => {
  const { modalId, title, open, children } = props;
  const { onOk, onCancel } = props;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel?.(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCancel]);

  return open ? (
    <dialog id={modalId} className="modal">
      <div className="modal-box">
        {title ? <h3 className="font-bold text-lg">{title}</h3> : null}

        {children}

        <div className="modal-action">
          <button className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onOk}>
            Submit
          </button>
        </div>
      </div>
    </dialog>
  ) : null;
};

export default Modal;
