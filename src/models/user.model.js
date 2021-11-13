const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validations = require('../utils/validators/validations')

const userSchema = new mongoose.Schema(
    {
       name:{type:String, trim:true, required:true},
       alias: {type:String, trim:true, unique:true, required:true},
       password:{type:String, trim:true,required:true}
       
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", function (next) {
    if(!validations.validationPassword(this.password)){
        const error = new Error
        error.status = 400
        error.message = 'La contraseña no tiene los minimos requeridos'
        return next(error)
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model('users', userSchema)
module.exports = User
