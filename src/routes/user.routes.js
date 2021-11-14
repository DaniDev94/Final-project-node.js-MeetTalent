const userRoutes = require('express').Router();

const {getAllUsers, postNewUser} = require('../controllers/user.controller')

userRoutes.get('/', getAllUsers)
userRoutes.post('/', postNewUser)



module.exports = userRoutes
