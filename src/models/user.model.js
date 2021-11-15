const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        CO:  {type:String, required: true, unique:true, trim:true},
        image: {type:String, trim:true},
        CIF: { type: String, trim: true, unique: true, required: true },
        email: { type: String, trim: true, required: true, unique: true },
        password: { type: String, trim: true, required: true },
        
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('users', userSchema);
module.exports = User;
