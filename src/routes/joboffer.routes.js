const JobOfferRoutes = require("express").Router();

const {getJobOffer, postNewJobOffer, putJobOffer, pachJobOffer, deleteJobOffer, getJobOfferById} = require('../controllers/joboffer.controller');

JobOfferRoutes.get('/',getJobOffer)
JobOfferRoutes.post('/',postNewJobOffer)
JobOfferRoutes.put('/:id',putJobOffer)
JobOfferRoutes.patch('/:id',pachJobOffer)
JobOfferRoutes.delete('/:id',deleteJobOffer)
JobOfferRoutes.get('/:id',getJobOfferById)


module.exports = JobOfferRoutes;



