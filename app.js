const express = require('express')

const app = express()
const cors = require('cors')

// Usar a porta do ambiente ou 3000 como fallback
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: ['*']
  })
)

//adiciona pois o frontend estava com erro no cors ao consumir a API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    message: 'Hello World!',
    status: 'Server is running successfully',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
