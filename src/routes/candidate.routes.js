const CandidateRoutes = require('express').Router();
const { getAllCandidates, getCandidateById, deleteCandidate } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:id', getCandidateById);
CandidateRoutes.delete('/:id', deleteCandidate);


module.exports = CandidateRoutes;