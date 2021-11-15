const userRoutes = require('express').Router();
const {getAllUsers, getUserById, postNewUser, putUserUpdate, deleteUser} = require('../controllers/user.controller');


userRoutes.get('/', getAllUsers);
userRoutes.get('/:id', getUserById);
userRoutes.post('/',  postNewUser);
userRoutes.put('/:id', putUserUpdate);
userRoutes.delete('/:id', deleteUser);


module.exports = userRoutes;
