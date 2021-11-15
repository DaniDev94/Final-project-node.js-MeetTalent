const User = require('../models/user.model')


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
        const newUser = new User(req.body);
        const saveUser = await newUser.save();
        return res.status(200).json(saveUser);
    } catch (err) {
        err.message = 'The new user cannot be created, it may already exist';
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
    putUserUpdate,
    deleteUser
}
