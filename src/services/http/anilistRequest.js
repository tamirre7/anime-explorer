const ANILIST_URL = 'https://graphql.anilist.co';

export async function fetchAniList(query, variables = {}) {
  const res = await fetch(ANILIST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (!res.ok || json.errors) {
    const messages = json.errors?.map((e) => e.message).join(' | ');
    throw new Error(messages ?? `HTTP ${res.status} ${res.statusText}`);
  }

  return json.data;
}
