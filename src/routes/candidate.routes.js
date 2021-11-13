const CandidateRoutes = require('express').Router();

const { getAllCandidates, getCandidateById, postNewCandidate } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:id', getCandidateById);
CandidateRoutes.post('/', postNewCandidate);


module.exports = CandidateRoutes;