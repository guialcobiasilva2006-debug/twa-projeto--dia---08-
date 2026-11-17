const URL = '/api/ingredients'

export async function list() {
  const res = await fetch(URL)
  if (!res.ok) throw new Error('Erro ao listar ingredientes.')
  return res.json()
}

export async function get(id) {
  const res = await fetch(`${URL}/${id}`)
  if (!res.ok) throw new Error('Erro ao obter ingrediente.')
  return res.json()
}

export async function create(ingredient) {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ingredient)
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export async function update(id, ingredient) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ingredient)
  })
  if (!res.ok) throw await res.json()
  return res.json()
}

export async function remove(id) {
  const res = await fetch(`${URL}/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Erro ao eliminar ingrediente.')
}