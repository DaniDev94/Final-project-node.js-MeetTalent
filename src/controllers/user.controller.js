const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return next(error)
    }
}

const postNewUser = async (req, res, next) =>{
    try{
       const newUser = new User(req.body)

       
       const userInBd = await newUser.save()
        return res.status(201).json(userInBd)    
    }catch(error){
        return next(error)
    }
}

const loginUser = async (req, res, next) =>{
    try{
        //console.log('alias-->',req.body.alias)
        const userInBd = await User.findOne({alias:req.body.alias})
       // console.log('usuario encontrado-->',userInBd)
        
       if(!userInBd){
            const error = new Error
            error.status = 404
            error.message = 'No existe usuario con ese alias'
            return next(error)
        }
        
        if(bcrypt.compareSync(req.body.password, userInBd.password)){
            userInBd.password = null
           // console.log('constraseña correcta')

            const token = jwt.sign({ id: userInBd._id, alias: userInBd.alias }, process.env.JWT_SECRET, { expiresIn: '1d' });

            return res.status(200).json(token)
        }

    }catch(error){
        error.message = 'error al loguear'
        return next(error)
    }

}

const logoutUser = (req, res, next) => {
    try{
        const token = null
        return res.status(200).json(token)
    }catch(error){
        return next(error)
    }
}

module.exports = {
    getAllUsers,
    postNewUser,
    loginUser,
    logoutUser

}
