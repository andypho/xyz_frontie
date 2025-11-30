"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Modal from "./Modal";

import { createThread } from "~/app/action";

const CreateTreadBtn = () => {
  const modalId = "create-thread-modal";

  const formRef = useRef<HTMLFormElement>(null);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(createThread, {
    error: null,
  });

  useEffect(() => {
    if (open) {
      document.getElementById(modalId)?.showModal();
    }
  }, [open]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setOpen(true);
          // document.getElementById(modalId)?.showModal();
        }}
      >
        Create Thread
      </button>

      <Modal
        modalId={modalId}
        title="Create Thread"
        open={open}
        onOk={(e) => {
          // e.preventDefault();

          if (formRef.current) {
            formRef.current.requestSubmit();
          }
          // document.getElementById(modalId)?.close();
          // setOpen(false);
          // setTitle("");
        }}
        onCancel={() => {
          document.getElementById(modalId)?.close();
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
