const express = require('express')
const request = require('request')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/films', (req, res) => {
  request({ url: 'https://swapi.co/api/films' }, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: error.message })
    }

    res.json(JSON.parse(body))
  })
})

const PORT = process.env.PORT || 4444

app.listen(PORT, () => console.log(`proxy server listening on ${PORT}`))
