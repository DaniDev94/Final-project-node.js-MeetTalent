const userRoutes = require('express').Router();
const {getAllUsers, postNewUser, putUserUpdate, patchAddOffer, deleteUser} = require('../controllers/user.controller');


userRoutes.get('/', getAllUsers);
userRoutes.post('/', postNewUser);
userRoutes.put('/:id', putUserUpdate);
userRoutes.patch('/addoffer/:id', patchAddOffer);
userRoutes.delete('/:id', deleteUser);


module.exports = userRoutes;
