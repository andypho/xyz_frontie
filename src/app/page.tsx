import Link from "next/link";

import CreateTreadBtn from "~/components/CreateTreadBtn";
import Table from "~/components/Table";
import TimeAgo from "~/components/TimeAgo";
import type { Thread } from "~/lib/types";

import { getThreads } from "./action";

export default async function Home() {
  const dataSource = await getThreads();

  return (
    <>
      <CreateTreadBtn />

      <Table<Thread>
        columns={[
          {
            key: "id",
            title: "",
            render: (value, record, index) => {
              return `${index + 1}.`;
            },
          },
          {
            key: "title",
            dataIndex: "title",
            title: "Title",
            render: (value, { url_slug }) => {
              return typeof value === "string" ? (
                <Link className="link link-primary" href={`/t/${url_slug}`}>
                  {value}
                </Link>
              ) : null;
            },
          },
          { key: "count", dataIndex: "count", title: "No. of posts" },
          {
            key: "timestamp",
            dataIndex: "timestamp",
            title: "Last post at",
            render: (value) => {
              return typeof value === "string" ? (
                <TimeAgo date={value} />
              ) : null;
            },
          },
        ]}
        dataSource={dataSource}
      />
    </>
  );
}
