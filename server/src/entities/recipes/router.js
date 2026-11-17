import { Router } from 'express'
import { recipes } from './data.js'

const router = Router()

router.get('/', (req, res) => {
  res.json(recipes)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const item = recipes.find((r) => r.id === id)
  if (!item) return res.status(404).json({ error: `recipe ${id} not found` })
  res.json(item)
})

router.post('/', (req, res) => {
  const { strMeal = '' } = req.body ?? {}
  if (strMeal.trim().length < 3) {
    return res.status(400).json({ errors: { strMeal: 'at least 3 characters' } })
  }
  const id = Math.max(0, ...recipes.map((r) => r.id)) + 1
  const item = { ...req.body, id, strMeal: strMeal.trim() }
  recipes.push(item)
  res.status(201).json(item)
})

export default router