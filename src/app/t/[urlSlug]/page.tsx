import { notFound } from "next/navigation";
import { getThread } from "~/app/action";
import { ThreadView } from "~/components/thread";

type PageProps = {
  params: Promise<{ urlSlug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { urlSlug } = await params;
  const thread = await getThread(urlSlug);

  return thread
    ? {
        title: `Xyz Forum - ${thread.title}`,
      }
    : null;
}

export default async function Page({ params }: PageProps) {
  const { urlSlug } = await params;
  const thread = await getThread(urlSlug);

  if (!thread) {
    return notFound();
  }

  return <ThreadView thread={thread} />;
}
