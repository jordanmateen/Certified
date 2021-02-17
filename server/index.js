const express = require('express')
const app = express()
const PORT = 5645

app.get('/', (req, res) => {
  res.send({
      "name": "Jordan"
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
}) 