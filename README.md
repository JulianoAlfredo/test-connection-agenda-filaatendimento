# Test Connection Agenda Fila Atendimento

Backend Node.js para escutar agenda técnica.

## 🚀 Deploy na Render.com

### Configurações necessárias na Render:

- **Name**: `test-connection-agenda-filaatendimento`
- **Language**: `Node`
- **Branch**: `master`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free` (ou conforme necessidade)

### Variáveis de Ambiente (opcional):

Se necessário, adicione as seguintes variáveis:
- `NODE_ENV=production`
- `PORT` (será automaticamente definido pela Render)

## 📦 Instalação Local

```bash
npm install
```

## 🔧 Executar Localmente

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`

## 🛠️ Endpoints

- `GET /` - Endpoint principal com status do servidor
- `GET /health` - Health check do servidor

## 📋 Tecnologias

- Node.js
- Express.js
- CORS

## 🌐 Deploy

Este projeto está configurado para deploy automático na Render.com quando há push na branch `master`.
