const express = require('express')
const app = express()
const PORT = 2340

app.get('/', (req, res) => {
  res.send({
      "name": "Jordan"
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
}) 