const userRoutes = require('express').Router();
const upload = require('../middlewares/file.middleware');
const { isAuth } = require('../middlewares/auth.middleware');
const { getUserById, postNewUser, loginUser, logoutUser, putUserUpdate, deleteUser} = require('../controllers/user.controller');



userRoutes.get('/:id',[isAuth], getUserById);
userRoutes.post('/', upload.single('image'), postNewUser);
userRoutes.post('/login', loginUser);
userRoutes.post('/logout',[isAuth], logoutUser);
userRoutes.put('/:id',[isAuth], putUserUpdate);
userRoutes.delete('/:id',[isAuth], deleteUser);


module.exports = userRoutes;
