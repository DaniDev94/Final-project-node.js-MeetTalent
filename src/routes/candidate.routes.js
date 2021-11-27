const CandidateRoutes = require('express').Router();

const { getAllCandidates, getCandidateByName,  deleteCandidate } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:name', getCandidateByName);

CandidateRoutes.delete('/:id', deleteCandidate);


module.exports = CandidateRoutes;