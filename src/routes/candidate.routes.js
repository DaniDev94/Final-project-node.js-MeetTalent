const CandidateRoutes = require('express').Router();
const { getAllCandidates, getCandidateById } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:id', getCandidateById);


module.exports = CandidateRoutes;