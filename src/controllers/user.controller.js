const User = require('../models/user.model')



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


module.exports = {
    getAllUsers,
    postNewUser
   
}
