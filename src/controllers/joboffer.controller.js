const JobOffer = require('../models/joboffer.model');



const getJobOffer = async(req, res, next) => {
    try{
        const joboffer = await JobOffer.find();
        return res.status(200).json(joboffer);
    }catch(err){
        err.message = 'Offer not found';
        return next(`Error:${err}`);
    }
};

