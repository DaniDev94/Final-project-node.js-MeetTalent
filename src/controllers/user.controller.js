const User = require('../models/user.model')


const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find().populate('joboffer');
        return res.status(200).json(allUsers)
    } catch (err) {
        err.message = 'Users not found';
        return next(`Error: ${err}.`);
    }
}


const postNewUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body)
        const userSave = await newUser.save()
        return res.status(201).json(userSave)
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

const patchAddOffer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { idOffer } = req.body
        const updateUserAddingOffer = await User.findByIdAndUpdate(id,{$push:{joboffer: idOffer}});
        res.status(200).json(updateUserAddingOffer);
    } catch (err) {
        err.message = 'Job Offer not found, cannot be added to the User';
        return next(`Error: ${err}.`);
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        return res.status(200).json(deleteUser);
    } catch (err) {
        err.message = 'User not found, could not be removed';
        return next(`Error: ${err}.`);
    }
}


module.exports = {
    getAllUsers,
    postNewUser,
    putUserUpdate,
    patchAddOffer,
    deleteUser
}
