const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    res.send("Usuario logueado")
})

router.post('/logout', (req, res) => {
    res.send("Sesión cerrada")
})

module.exports = router