import Link from "next/link";
import CreateTreadBtn from "~/components/CreateTreadBtn";
import Table from "~/components/Table";
import { getThreads } from "./action";

export default async function Home() {
  const dataSource = await getThreads();

  return (
    <div>
      <CreateTreadBtn />

      <Table
        columns={[
          { key: "id", title: "", render: (value, record, index) => index + 1 },
          {
            key: "title",
            dataIndex: "title",
            title: "Title",
            render: (value, { url_slug }) => {
              return (
                <Link className="link link-primary" href={`/t/${url_slug}`}>
                  {value}
                </Link>
              );
            },
          },
          { key: "count", dataIndex: "count", title: "No. of posts" },
        ]}
        dataSource={dataSource}
      />
    </div>
  );
}
