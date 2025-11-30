"use client";

import { useActionState } from "react";
import AddPostForm from "./AddPostForm";
import { updateThread } from "~/app/action";
import type { Thread } from ".";

type Props = {
  thread: Thread;
};

const ThreadView = (props: Props) => {
  const [{ thread: state }, formAction] = useActionState(updateThread, {
    thread: props.thread,
  });

  return (
    <div>
      <h1 className="text-lg font-semibold leading-8">{state.title}</h1>
      <span>{state.count} posts</span>

      <AddPostForm action={formAction} />

      <div>
        {state.posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreadView;
