const JWT = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config()


const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const cleanToken = token.replace('Bearer ', '');
        const verifyToken = JWT.verify(cleanToken, process.env.JWT_SECRET);
        const locateUser = await User.findById(verifyToken.id);
        locateUser.password = null;
        req.user = locateUser;
        next();
    } catch (err) {
        err.message = 'Authorization is not possible';
        return next(`Error: ${err}.`);
    }
}


module.exports = {
    isAuth
}