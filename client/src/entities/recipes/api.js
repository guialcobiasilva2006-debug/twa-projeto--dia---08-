import { getJSON } from '../../api/getJSON.js'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'

export async function list(query = '') {
  const data = await getJSON(`${BASE_URL}search.php?s=${query}`)
  return data.meals || []
}

export async function get(id) {
  const data = await getJSON(`${BASE_URL}lookup.php?i=${id}`)
  return data.meals ? data.meals[0] : null
}