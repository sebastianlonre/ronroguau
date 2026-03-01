const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    res.send("Se ha registrado al usuario")
})

router.route('/:username')
    .get((req, res) => {
        const username = req.params.username
        res.send(`Datos del usuario ${username}`)
    })
    .put((req, res) => {
        const username = req.params.username
        res.send(`Se ha actualizado al usuario: ${username}`)
    })
    .delete((req, res) => {
        const username = req.params.username
        res.send(`El usuario ${username} a sido eliminado`)
    })

module.exports = router