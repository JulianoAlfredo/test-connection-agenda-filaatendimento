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

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World!',
    status: 'Server is running successfully',
    timestamp: new Date().toISOString()
  })
})

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
