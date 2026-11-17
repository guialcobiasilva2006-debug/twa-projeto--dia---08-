import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use(express.json())

// As rotas das entidades entram aqui

app.use((req, res) => {
  res.status(404).json({ error: 'not found' })
})

app.listen(3000, () => console.log('http://localhost:3000'))