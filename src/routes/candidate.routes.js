const CandidateRoutes = require('express').Router();

const { getAllCandidates, getCandidateByName, postNewCandidate, putCandidateUpdate, deleteCandidate } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:name', getCandidateByName);
CandidateRoutes.post('/', postNewCandidate);
CandidateRoutes.put('/:id', putCandidateUpdate);
CandidateRoutes.delete('/:id', deleteCandidate);


module.exports = CandidateRoutes;