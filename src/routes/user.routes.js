const userRoutes = require('express').Router();
const upload = require('../middlewares/file.middleware');
const { isAuth } = require('../middlewares/auth.middleware');
const {getAllUsers, getUserById, postNewUser, loginUser, logoutUser, putUserUpdate, deleteUser} = require('../controllers/user.controller');


userRoutes.get('/', getAllUsers);//Eliminar al sacar la BBDD a producción
userRoutes.get('/:id', getUserById);
userRoutes.post('/', upload.single('image'), postNewUser);
userRoutes.post('/login', loginUser);
userRoutes.post('/logout',[isAuth], logoutUser);
userRoutes.put('/:id', putUserUpdate);
userRoutes.delete('/:id', deleteUser);


module.exports = userRoutes;
