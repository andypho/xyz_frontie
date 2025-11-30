"use client";

import ReactTimeAgo from "react-timeago";

const TimeAgo = ({ date }: { date: string }) => {
  return <ReactTimeAgo date={date} live={false} />;
};

export default TimeAgo;
