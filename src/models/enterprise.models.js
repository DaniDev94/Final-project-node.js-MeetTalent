const mongoose = require('mongoose');


const enterpriseSchema = new mongoose.Schema(
    {
        name: {type:String, required: true, unique:true, trim:true},
        
        image: {type:String, trim:true},
        
        owner:  {type:String, required: true, unique:true, trim:true},
    },
    {
        timestamps: true
    }
);

const Enterprise = mongoose.model('enterprises', enterpriseSchema)
module.exports = Enterprise
