const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
  res.send('Oliiii')
})

app.listen(port, () => {
  console.log(`Server corriendo en el puerto ${port}`)
})
