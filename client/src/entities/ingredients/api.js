import { getJSON } from '../../api/getJSON.js'

let localItems = []

export async function list() {
  const data = await getJSON('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  const apiItems = data.meals || []
  
  const formattedApiItems = apiItems.map(item => ({
    id: item.strIngredient,
    strIngredient: item.strIngredient,
    description: item.strDescription,
    local: false
  }))

  return [...localItems, ...formattedApiItems]
}

export async function get(id) {
  const local = localItems.find(item => item.id === id)
  if (local) return local

  const data = await getJSON(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
  
  return {
    id: id,
    strIngredient: id,
    meals: data.meals || []
  }
}

export async function create(item) {
  const newItem = {
    id: item.name,
    strIngredient: item.name,
    description: item.description || '',
    local: true
  }
  localItems.unshift(newItem)
  return newItem
}