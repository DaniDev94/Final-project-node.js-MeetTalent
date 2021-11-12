const Enterprise = require('../models/enterprise.models');


const getEnterprises = async(req, res, next) => {
    try{
        const enterprises = await Enterprise.find();
        return res.status(200).json(enterprises);
    }catch(err){
        err.message = 'Enterprise not found';
        return next(`Error:${err}`);
    }
} ;

module.exports = {
    getEnterprises
};