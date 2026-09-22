const express = require('express');
const app = express()
const port = 3000

const filmes = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
  { id: 2, title: 'Senhor dos Anéis', author: 'J.R.R. Tolkiens' },
  { id: 3, title: 'O Hobbit', author: 'J.R.R. Tolkiens' }
]

app.get('/', (req, res) => {
  res.send('API-BOOK está funcionando!')
})


app.get('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id)

  const filme = filmes.find(f => f.id === id)
 
if (!filmes) {
  return res.status(404).send('Filme não encontrado')
}

res.json(filme)
})

app.listen(port, () => {
  console.log(`API-BOOK rodando na porta ${port}`)
})