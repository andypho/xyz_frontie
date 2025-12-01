"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { type Thread } from "~/lib/types";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function getThreads() {
  const response = await fetch(`${API_ENDPOINT}/threads`, {
    cache: "no-cache",
  });
  const result = await response.json();
  return result.data as Thread[];
}

export async function getThread(urlSlug: string) {
  const response = await fetch(`${API_ENDPOINT}/threads/${urlSlug}`, {
    cache: "no-cache",
  });
  const result = await response.json();
  return result.data as Thread;
}

export async function createThread(
  initialState: { error: string | null },
  formData: FormData,
) {
  const response = await fetch(`${API_ENDPOINT}/threads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
    }),
    cache: "no-cache",
  });

  const result = await response.json();

  if (response.ok) {
    redirect(`/t/${result.data.url_slug}`);
  } else {
    return {
      error: result.message,
    };
  }
}

export async function updateThread(
  initialState: { thread: Thread },
  formData: FormData,
) {
  const response = await fetch(
    `${API_ENDPOINT}/threads/${initialState.thread.url_slug}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: formData.get("content"),
      }),
      cache: "no-cache",
    },
  );

  const result = await response.json();

  // Revalidate the home pagefor the soft navigation on the client side
  revalidatePath("/");

  if (response.ok) {
    return { thread: result.data as Thread };
  }

  return initialState;
}
