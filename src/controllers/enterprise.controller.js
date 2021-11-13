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

const postNewEnterprises = async(req, res, next) => {
    try{
        const newEnterprise = new Enterprise(req.body);
        const enterpriseSave = await newEnterprise.save()
        return res.status(200).json(enterpriseSave)
    }catch(err){
        err.message = 'The new enterprise cannot created';
        return next (`Error:${err}`)
    }
}


const putEnterprise = async (req, res, next) => {
    try{
        const {id} = req.params;

        const otherEnterprise=new Enterprise(req.body);
        otherEnterprise._id = id;
        const updateEnterprise= await Enterprise.findByIdAndUpdate(id, otherEnterprise);
        return res.status(200).json(updateEnterprise);
    }catch(err){
        err.message = 'Enterprise cannot be update';
        return next (`Error:${err}`)
    }
}     
const pachEnterprise =  async (req, res, next) => {
    try{
        const {id} = req.params;

        const otherEnterprise=new Enterprise(req.body);
        otherEnterprise._id = id;
        const updateEnterprise= await Enterprise.findByIdAndUpdate(id, otherEnterprise)
        return res.status(200).json(updateEnterprise);
    }catch(err){
        err.message = 'Enterprise cannot be update';
        return next (`Error:${err}`)
    }
}   
const deleteEnterprise =  async (req, res, next) => {
    try{
        const {id} = req.params;
        const deleteEnterprise= await Enterprise.findByIdAndDelete(id)
        return res.status(200).json(deleteEnterprise);
    }catch(err){
        err.message = 'Enterprise cannot be update';
        return next (`Error:${err}`)
    }
}   
const getEnterpriseById = (req, res) => {
    const { id } = req.params
    const findEnterprise = Enterprise.findIndex(enterprise => enterprise.id == id);
    //console.log(findEnterprise)
    if (findEnterprise >= 0) {
        return res.status(200).json(Enterprise[findEnterprise])
    } 
        return res.status(404).json('Enterprise by id not found')
    
}

  


module.exports = {
    getEnterprises, 
    postNewEnterprises,
    putEnterprise,
    pachEnterprise,
    deleteEnterprise,
    getEnterpriseById
};