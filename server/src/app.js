import express from 'express'
import recipesRouter from './entities/recipes/router.js'

const app = express()

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use(express.json())

// Registo da tua entidade
app.use('/api/recipes', recipesRouter)

app.use((req, res) => {
  res.status(404).json({ error: 'not found' })
})

app.listen(3000, () => console.log('http://localhost:3000'))