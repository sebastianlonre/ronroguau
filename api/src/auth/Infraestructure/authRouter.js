const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    const { userEmail, password } = req.body
    res.send(`Email de usuario: ${userEmail}, Contraseña ${password}`)
})

router.post('/logout', (req, res) => {
    res.send("Sesión cerrada")
})

module.exports = router