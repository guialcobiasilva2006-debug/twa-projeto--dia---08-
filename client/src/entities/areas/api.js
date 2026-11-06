import { getJSON } from '../../api/getJSON.js'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/'
const localAreas = []

export async function list() {
  const data = await getJSON(`${BASE_URL}list.php?a=list`)
  const remote = data.meals || []
  return [...localAreas, ...remote]
}

export async function get(area) {
  const local = localAreas.find(
    (a) => a.strArea.toLowerCase() === String(area).toLowerCase()
  )
  if (local) return local

  const data = await getJSON(`${BASE_URL}filter.php?a=${encodeURIComponent(area)}`)
  return {
    strArea: area,
    local: false,
    meals: data.meals || []
  }
}

export function create(item) {
  const newArea = {
    strArea: item.strArea,
    description: item.description,
    dishSample: item.dishSample,
    local: true,
    meals: item.dishSample
      ? [{ idMeal: Date.now(), strMeal: item.dishSample, strMealThumb: '' }]
      : []
  }
  localAreas.unshift(newArea)
  return newArea.strArea
}