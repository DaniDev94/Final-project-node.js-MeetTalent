const CandidateRoutes = require('express').Router();
const { getAllCandidates } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);


module.exports = CandidateRoutes;