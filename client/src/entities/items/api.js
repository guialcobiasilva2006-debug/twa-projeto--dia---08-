// entities/items/api.js — como a entidade fala com a sua fonte de dados. Só aqui há URLs.
// How this entity talks to its data source. URLs live only here.
//
// Exemplo: um ficheiro JSON local (funciona sem rede). · Example: a local JSON file (works offline).
// No M1 a vossa entidade usa a API pública do tema — só muda o URL e, se preciso, o formato da resposta, ex.:
// In M1 your entity uses the theme's public API — only the URL (and maybe the response shape) changes, e.g.:
//   const BASE = 'https://pokeapi.co/api/v2'
//   export const list = () => getJSON(`${BASE}/pokemon?limit=50`).then((r) => r.results)
//   export const get = (name) => getJSON(`${BASE}/pokemon/${name}`)
// No M2 passa a ser a vossa API Express: BASE = '/api'. · In M2 it becomes your Express API.
import { getJSON } from '../../api/getJSON.js'

const URL = '/data/items.json'

export const list = () => getJSON(URL)
export const get = (id) => getJSON(URL).then((items) => items.find((i) => i.id === Number(id)))
