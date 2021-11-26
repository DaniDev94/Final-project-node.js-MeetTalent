const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        CEO:  {type:String, required: true, unique:true, trim:true},
        image: {type:String, trim:true},
        CIF: { type: String, trim: true, unique: true, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, trim: true, required: true },
    },
    {
        timestamps: true
    }
);


userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})


const User = mongoose.model('users', userSchema);
module.exports = User;



