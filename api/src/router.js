const express = require('express')
const router = express.Router()
const authRoutes = require('./auth/Infraestructure/authRouter')

router.use('/auth', authRoutes)

module.exports = router
