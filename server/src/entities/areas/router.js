import { Router } from 'express'
import { areas } from './data.js'

const router = Router()

router.get('/', (req, res) => {
  res.json(areas)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const item = areas.find((i) => i.id === id)
  if (!item) return res.status(404).json({ error: 'not found' })
  res.json(item)
})

router.post('/', (req, res) => {
  const { strArea = '' } = req.body ?? {}
  const errors = {}

  if (strArea.trim().length < 3) {
    errors.strArea = 'at least 3 characters'
  }

  if (Object.keys(errors).length) {
    return res.status(400).json({ errors })
  }

  const id = Math.max(0, ...areas.map((i) => i.id)) + 1
  const item = {
    meals: [],
    ...req.body,
    id,
    strArea: strArea.trim()
  }

  areas.push(item)
  res.status(201).json(item)
})

export default router