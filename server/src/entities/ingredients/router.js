import express from 'express'
import Ingredient from './model.js'
import mongoose from 'mongoose'

const router = express.Router()

// GET / - Listar todos
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.find({})
    res.json(ingredients) // <- Corrigido para enviar o array diretamente
  } catch (err) {
    console.error('Erro ao listar ingredientes:', err)
    res.status(500).json({ error: 'Erro interno ao listar ingredientes.' })
  }
})

// GET /:id - Obter um específico
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: 'ID mal formado.' })
    }
    const ingredient = await Ingredient.findById(req.params.id)
    if (!ingredient) return res.status(404).json({ error: 'Ingrediente não encontrado.' })
    res.json(ingredient)
  } catch (err) {
    res.status(500).json({ error: 'Erro interno ao procurar o ingrediente.' })
  }
})

// POST / - Criar novo
router.post('/', async (req, res) => {
  try {
    const newIngredient = new Ingredient(req.body)
    const saved = await newIngredient.save()
    res.status(201).json(saved)
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = {}
      for (let field in err.errors) errors[field] = err.errors[field].message
      return res.status(400).json({ errors })
    }
    res.status(500).json({ error: 'Erro ao criar ingrediente.' })
  }
})

// PUT /:id - Atualizar
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: 'ID mal formado.' })
    }
    const updated = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!updated) return res.status(404).json({ error: 'Ingrediente não encontrado.' })
    res.json(updated)
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = {}
      for (let field in err.errors) errors[field] = err.errors[field].message
      return res.status(400).json({ errors })
    }
    res.status(500).json({ error: 'Erro ao atualizar ingrediente.' })
  }
})

// DELETE /:id - Apagar
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ error: 'ID mal formado.' })
    }
    const deleted = await Ingredient.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Ingrediente não encontrado.' })
    res.status(204).send()
  } catch (err) {
    res.status(500).json({ error: 'Erro ao apagar ingrediente.' })
  }
})

export default router