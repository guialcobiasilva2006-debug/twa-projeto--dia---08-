import { getJSON } from '../../api/getJSON.js'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'

export async function list() {
  const data = await getJSON(`${BASE_URL}list.php?a=list`)
  return data.meals || []
}

export async function get(area) {
  const data = await getJSON(`${BASE_URL}filter.php?a=${encodeURIComponent(area)}`)
  return data.meals || []
}