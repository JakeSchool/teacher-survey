const express = require('express')
const math = require("mathjs")
const app = express()
const port = 8080



var count = math.round(math.random())


app.use(express.static('public'))

app.get('/surveyID', (req, res) => {
  count++
  res.send(String(count % 2))
  console.log(count)
})

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at ${port}`)
})