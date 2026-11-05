const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'

const localRecipes = []

export async function list() {
  try {
    const response = await fetch(`${BASE_URL}search.php?s=a`)
    const data = await response.json()
    const apiRecipes = data.meals || []
    return [...localRecipes, ...apiRecipes]
  } catch (error) {
    console.error('Erro ao carregar receitas:', error)
    return [...localRecipes]
  }
}

export async function get(id) {
  const localItem = localRecipes.find(r => r.idMeal === String(id) || r.id === String(id))
  if (localItem) return localItem

  try {
    const response = await fetch(`${BASE_URL}lookup.php?i=${id}`)
    const data = await response.json()
    return data.meals && data.meals.length > 0 ? data.meals[0] : null
  } catch (error) {
    console.error(`Erro ao carregar a receita ${id}:`, error)
    return null
  }
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