const userRoutes = require('express').Router();
const upload = require('../middlewares/file.middleware');
const {getAllUsers, getUserById, postNewUser, putUserUpdate, deleteUser} = require('../controllers/user.controller');


userRoutes.get('/', getAllUsers);//Eliminar al sacar la BBDD a producción
userRoutes.get('/:id', getUserById);
userRoutes.post('/', upload.single('image'), postNewUser);
userRoutes.put('/:id', putUserUpdate);
userRoutes.delete('/:id', deleteUser);


module.exports = userRoutes;
