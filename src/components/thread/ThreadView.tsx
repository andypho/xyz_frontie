"use client";

import TimeAgo from "~/components/TimeAgo";
import type { Thread } from "~/lib/types";

type Props = {
  thread: Thread;
};

const ThreadView = (props: Props) => {
  const { thread } = props;

  return (
    <div>
      <h1 className="text-lg font-semibold leading-8">{thread.title}</h1>
      <span>{thread.count} posts</span>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {(thread.posts ?? []).map((post) => (
          <li key={post.id} className="list-row">
            <div className="flex items-center gap-2">
              <div>Anonymous</div>
              <div className="divider divider-horizontal mx-0 my-0"></div>
              <div className="text-[10px] uppercase font-semibold opacity-60">
                <TimeAgo date={post.timestamp} />
              </div>
            </div>
            <p className="list-col-wrap text-xs">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadView;
