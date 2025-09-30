import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()
app.use(cors())

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*' // libera acesso do React
  }
})

let fila = []

// Adiciona alguém na fila
app.get('/add/:nome', (req, res) => {
  const nome = req.params.nome
  fila.push({ nome })
  io.emit('filaAtualizada', fila) // envia para todos conectados
  res.json({ msg: `Adicionado ${nome}`, fila })
})

// Retorna a fila atual
app.get('/fila', (req, res) => {
  res.json(fila)
})

// Evento de conexão WebSocket
io.on('connection', socket => {
  console.log('Cliente conectado!')
  socket.emit('filaAtualizada', fila)
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
