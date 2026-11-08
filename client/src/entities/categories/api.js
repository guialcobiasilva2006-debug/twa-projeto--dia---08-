import { getJSON } from '../../api/getJSON.js'

const BASE = 'https://www.themealdb.com/api/json/v1/1'
const localCategories = []

export async function list() {
  const data = await getJSON(`${BASE}/categories.php`)
  return [...localCategories, ...(data.categories || [])]
}

export const get = (category) => getJSON(`${BASE}/filter.php?c=${category}`).then((r) => r.meals)

export function create(item) {
  const newCat = {
    strCategory: item.strCategory,
    strCategoryDescription: item.strCategoryDescription || '',
    strCategoryThumb: item.strCategoryThumb || '',
    local: true,
  }
  localCategories.unshift(newCat)
  return newCat.strCategory
}
