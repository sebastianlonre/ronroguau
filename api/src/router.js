const express = require('express')
const router = express.Router()
const authRoutes = require('./auth/Infraestructure/authRouter')
const userRoutes = require('./user/infraestructure/userRouter')

router.use('/auth', authRoutes)
router.use('/user', userRoutes)

module.exports = router
