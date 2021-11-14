const mongoose = require('mongoose')

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

const User = mongoose.model('users', userSchema)
module.exports = User
