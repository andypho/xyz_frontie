"use server";

import { type Thread } from "~/lib/types";

const API_ENDPOINT = process.env.API_ENDPOINT;

export async function getThreads() {
  const response = await fetch(`${API_ENDPOINT}/threads`);
  const result = await response.json();
  return result.data as Thread[];
}
