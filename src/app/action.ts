"use server";

import { redirect } from "next/navigation";
import { type Thread } from "~/lib/types";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function getThreads() {
  const response = await fetch(`${API_ENDPOINT}/threads`);
  const result = await response.json();
  return result.data as Thread[];
}

export async function getThread(urlSlug: string) {
  const response = await fetch(`${API_ENDPOINT}/threads/${urlSlug}`);
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
