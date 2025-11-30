import { getThread } from "~/app/action";
import { ThreadView } from "~/components/thread";

type PageProps = {
  params: Promise<{ urlSlug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { urlSlug } = await params;
  const thread = await getThread(urlSlug);

  return {
    title: `Xyz Forum - ${thread.title}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { urlSlug } = await params;
  const thread = await getThread(urlSlug);

  return <ThreadView thread={thread} />;
}
