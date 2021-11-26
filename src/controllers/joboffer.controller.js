const JobOffer = require('../models/joboffer.models');


const getJobOfferByUser = async (req, res, next) => {
    try {
        const idUser = req.body.user;
        const findOfferts = await JobOffer.find({ user: idUser });
        return res.status(200).json(findOfferts);
    } catch (err) {
        err.message = 'There are no offers in this user';
        return next(`Error:${err}`)
    }
}


const getJobOfferById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const offerById = await JobOffer.findById(id);
        return res.status(200).json(offerById);
    } catch (err) {
        err.message = 'No job offer found with this id';
        return next(`Error: ${err}.`);
    }
}


const postNewJobOffer = async (req, res, next) => {
    try {
        const newJoboffer = new JobOffer(req.body);
        const JobOffersave = await newJoboffer.save()
        return res.status(200).json(JobOffersave)
    } catch (err) {
        err.message = 'The new hob offer cannot created';
        return next(`Error:${err}`)
    }
}


const putJobOffer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const otherJobOffer = new JobOffer(req.body);
        otherJobOffer._id = id;
        const updateJobOffer = await JobOffer.findByIdAndUpdate(id, otherJobOffer);
        return res.status(200).json(updateJobOffer);
    } catch (err) {
        err.message = 'Job Offer cannot be update';
        return next(`Error:${err}`)
    }
}


const deleteJobOffer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteJobOffer = await JobOffer.findByIdAndDelete(id)
        return res.status(200).json(deleteJobOffer);
    } catch (err) {
        err.message = 'Job Offer cannot be deleted';
        return next(`Error:${err}`)
    }
}


module.exports = {
    getJobOfferByUser,
    getJobOfferById,
    postNewJobOffer,
    putJobOffer,
    deleteJobOffer
};
