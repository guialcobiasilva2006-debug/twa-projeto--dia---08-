import { getJSON } from '../../api/getJSON.js'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'

const localRecipes = []

export async function list(query = '') {
  const data = await getJSON(`${BASE_URL}search.php?s=${encodeURIComponent(query)}`)
  const apiRecipes = data.meals || []
  return [...localRecipes, ...apiRecipes]
}

export async function get(id) {
  const localItem = localRecipes.find(r => r.idMeal === String(id))
  if (localItem) return localItem

  const data = await getJSON(`${BASE_URL}lookup.php?i=${id}`)
  return data.meals?.[0] ?? null
}

export function create(item) {
  const newRecipe = {
    idMeal: 'local-' + Date.now(),
    strMeal: item.strMeal || 'Receita Local',
    strInstructions: item.strInstructions || '',
    strMealThumb: item.strMealThumb || '',
    local: true,
  }
  localRecipes.unshift(newRecipe)
  return newRecipe
}