const JobOffer = require('../models/joboffer.models');



const getJobOffer = async(req, res, next) => {
    try{
        const joboffer = await JobOffer.find();
        return res.status(200).json(joboffer);
    }catch(err){
        err.message = 'Offer not found';
        return next(`Error:${err}`);
    }
};
const postNewJobOffer = async(req, res, next) => {
    try{
        const newEnterprise = new JobOffer(req.body);
        const JobOffersave = await newJoboffer.save()
        return res.status(200).json(JobOffersave)
    }catch(err){
        err.message = 'The new hob offer cannot created';
        return next (`Error:${err}`)
    }
}

const putJobOffer = async (req, res, next) => {
    try{
        const {id} = req.params;

        const otherJobOffer=new JobOffer(req.body);
        otherJobOffer._id = id;
        const updateJobOffer= await JobOffer.findByIdAndUpdate(id, otherJobOffer);
        return res.status(200).json(updateJobOffer);
    }catch(err){
        err.message = 'Job Offer cannot be update';
        return next (`Error:${err}`)
    }
}  

const pachJobOffer =  async (req, res, next) => {
    try{
        const {id} = req.params;

        const otherJobOffer=new JobOffer(req.body);
        otherJobOffer._id = id;
        const updateJobOffer= await JobOffer.findByIdAndUpdate(id, otherJobOffer)
        return res.status(200).json(updateJobOffer);
    }catch(err){
        err.message = 'JobOffer cannot be update';
        return next (`Error:${err}`)
    }
}   
const deleteJobOffer =  async (req, res, next) => {
    try{
        const {id} = req.params;
        const deleteJobOffer= await JobOffer.findByIdAndDelete(id)
        return res.status(200).json(deleteJobOffer);
    }catch(err){
        err.message = 'JobOffer cannot be update';
        return next (`Error:${err}`)
    }
}   
const getJobOfferById = (req, res) => {
    const { id } = req.params
    const findJobOffer = JobOffer.findIndex(JobOffer => JobOffer.id == id);
    //console.log(findJobOffer)
    if (findJobOffer >= 0) {
        return res.status(200).json(JobOffer[findJobOffer])
    } 
        return res.status(404).json('No existe videojuego con esa id')
    
}

module.exports = {
    getJobOffer, 
    postNewJobOffer,
    putJobOffer,
    pachJobOffer,
    deleteJobOffer,
    getJobOffer
};
