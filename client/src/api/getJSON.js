// getJSON — o fetch das Fichas 01–04: res.ok + JSON, lança em caso de erro. · The fetch from Fichas 01–04.
// Todas as entidades usam esta função. · Every entity uses this function.
export async function getJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${url}`)
  return res.json()
}
