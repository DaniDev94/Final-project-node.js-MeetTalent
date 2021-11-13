const userRoutes = require('express').Router();
const {isAuth} = require('../middleware/auth.middleware')

const {getAllUsers, postNewUser, loginUser, logoutUser} = require('../controllers/user.controller')

userRoutes.get('/', getAllUsers)
userRoutes.post('/', postNewUser)

userRoutes.post('/login', loginUser)
userRoutes.post('/logout', [isAuth], logoutUser)


module.exports = userRoutes
