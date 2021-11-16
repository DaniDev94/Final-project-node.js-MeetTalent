const JobOffer = require('../models/joboffer.models');


const getJobOfferByUser = async (req, res, next) => {
    try {
        const idUser = req.body.user;
        const findOfferts = await JobOffer.find({user: idUser});
        return res.status(200).json(findOfferts);
    } catch (err) {
        err.message = 'Not found';
        return next (`Error:${err}`)
    }
}


const getJobOfferById = async (req, res) => {
    const { id } = req.params
    const findJobOffer = JobOffer.findIndex(JobOffer => JobOffer.id == id);
    if (findJobOffer >= 0) {
        return res.status(200).json(JobOffer[findJobOffer])
    } 
        return res.status(404).json('No existe oferta con esa id')
}


const postNewJobOffer = async(req, res, next) => {
    try{
        const newJoboffer = new JobOffer(req.body);
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


module.exports = {
    getJobOfferByUser,
    getJobOfferById,
    postNewJobOffer,
    putJobOffer,
    deleteJobOffer
};
