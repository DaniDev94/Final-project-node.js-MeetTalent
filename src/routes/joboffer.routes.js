const JobOfferRoutes = require("express").Router();

const { getJobOfferByUser, getJobOfferById, postNewJobOffer, putJobOffer, deleteJobOffer} = require('../controllers/joboffer.controller');


JobOfferRoutes.post('/', getJobOfferByUser);
JobOfferRoutes.get('/:id',getJobOfferById);
JobOfferRoutes.post('/',postNewJobOffer);
JobOfferRoutes.put('/:id',putJobOffer);
JobOfferRoutes.delete('/:id',deleteJobOffer);


module.exports = JobOfferRoutes;



