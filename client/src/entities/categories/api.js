import { getJSON } from '../../api/getJSON.js'

const BASE = 'https://www.themealdb.com/api/json/v1/1'

export const list = () => getJSON(`${BASE}/categories.php`).then((r) => r.categories)
export const get = (category) => getJSON(`${BASE}/filter.php?c=${category}`).then((r) => r.meals)
