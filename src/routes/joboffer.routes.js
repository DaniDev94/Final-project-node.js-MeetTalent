const JobOfferRoutes = require("express").Router();

const {getJobOffer, postNewJobOffer, putJobOffer, pachJobOffer, deleteJobOffer, getJobOfferById} = require('../controllers/joboffer.controller');

JobOfferRoutes.get('/',getJobOffer)
JobOfferRoutes.get('/:id',getJobOfferById)
JobOfferRoutes.post('/',postNewJobOffer)
JobOfferRoutes.put('/:id',putJobOffer)
JobOfferRoutes.patch('/:id',pachJobOffer)
JobOfferRoutes.delete('/:id',deleteJobOffer)


module.exports = JobOfferRoutes;



