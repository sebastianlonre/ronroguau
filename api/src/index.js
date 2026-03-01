const express = require('express')
const app = express()
const apiRouter = require('./router')
const port = 3000

app.use(express.json())
app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server corriendo:  http://localhost:${port}/`)
})