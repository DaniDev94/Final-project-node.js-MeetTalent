const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
require('dotenv').config()


const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find();
        return res.status(200).json(allUsers);
    } catch (err) {
        err.message = 'Users not found';
        return next(`Error: ${err}.`);
    }
}


const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userById = await User.findById(id);
        return res.status(200).json(userById);
    } catch (err) {
        err.message = 'No user found with this id';
        return next(`Error: ${err}.`);
    }
}


const postNewUser = async (req, res, next) => {
    try {
        const userPicture = req.file ? req.file.path : '';
        const newUser = new User(req.body);
        newUser.image = userPicture;
        const saveUser = await newUser.save();
        return res.status(200).json(saveUser);
    } catch (err) {
        err.message = 'The new user cannot be created, it may already exist';
        return next(`Error: ${err}.`);
    }
}


const loginUser = async (req, res, next) => {
    try {
        const userInDb = await User.findOne({email: req.body.email})
        if(bcrypt.compareSync(req.body.password, userInDb.password)){
            userInDb.password = null;
            const generateToken = JWT.sign({id: userInDb._id, email: userInDb.email},process.env.JWT_SECRET, {expiresIn:'1d'});
            res.status(200).json(generateToken);
        } 
    } catch (err) {
        err.message ='Login error';
        return next(`Error: ${err}.`);
    }
}


const logoutUser = async (req, res, next) => {
    try {
        const removeToken = null;
        res.status(200).json(removeToken)
    } catch (err) {
        err.message ='Logout error';
        return next(`Error: ${err}.`);
    }
}


const putUserUpdate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const varyUser = new User(req.body);
        varyUser._id = id;
        const updateUser = await User.findByIdAndUpdate(id, varyUser);
        return res.status(200).json(updateUser);
    } catch (err) {
        err.message = 'User not found, cannot be updated';
        return next(`Error: ${err}.`);
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        return res.status(200).json(deleteUser);
    } catch (err) {
        err.status = 404;
        err.message = 'User not found, could not be removed';
        return next(`Error: ${err}.`);
    }
}


module.exports = {
    getUserById,
    getAllUsers,
    postNewUser,
    loginUser,
    logoutUser,
    putUserUpdate,
    deleteUser
}
