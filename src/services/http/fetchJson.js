export async function fetchJson(path, options = {}) {
  const response = await fetch(path, options);

  if (!response.ok) {
    throw new Error(`Request error ${response.status} ${response.statusText}`);
  }

  return response.json();
}
