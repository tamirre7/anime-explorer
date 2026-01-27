export function formatAiringYears(fromYear, toYear, isOngoing) {
  const from = fromYear ?? null;
  const to = toYear ?? null;

  if (!from) return null;
  if (isOngoing || !to) return `${from}-`;
  if (from === to) return `${from}`;
  return `${from}-${to}`;
}
