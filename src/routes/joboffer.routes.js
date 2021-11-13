const JobOfferRoutes = require("express").Router();

const {getJobOffer} = require('../controllers/joboffer.controller');

JobOfferRoutes.get('/', getJobOffer);

module.exports = JobOfferRoutes;




