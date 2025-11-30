"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Modal from "./Modal";

import { createThread } from "~/app/action";

type Props = {
  modalId?: string;
};

const CreateTreadBtn = (props: Props) => {
  const { modalId = "create-thread-modal" } = props;

  const formRef = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(createThread, {
    error: null,
  });

  useEffect(() => {
    if (open) {
      const dialog = document.getElementById(
        modalId,
      ) as HTMLDialogElement | null;
      dialog?.showModal();
    }
  }, [modalId, open]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Create Thread
      </button>

      <Modal
        modalId={modalId}
        title="Create Thread"
        open={open}
        onOk={() => {
          if (formRef.current) {
            formRef.current.requestSubmit();
          }
        }}
        onCancel={() => {
          const dialog = document.getElementById(
            modalId,
          ) as HTMLDialogElement | null;
          dialog?.close();

          setOpen(false);
          setTitle("");
        }}
      >
        <form ref={formRef} action={formAction}>
          <fieldset className="fieldset">
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              className="input validator w-full"
              name="title"
              placeholder="Title"
              maxLength={140}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            {state.error && <p className="text-error">{state.error}</p>}
            <p className="validator-hint">
              Must not be empty and maximum 140 characters
            </p>
          </fieldset>
        </form>
      </Modal>
    </>
  );
};

export default CreateTreadBtn;
