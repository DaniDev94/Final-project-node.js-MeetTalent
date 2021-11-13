const CandidateRoutes = require('express').Router();

const { getAllCandidates, getCandidateById, postNewCandidate, putCandidateUpdate } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:id', getCandidateById);
CandidateRoutes.post('/', postNewCandidate);
CandidateRoutes.put('/:id', putCandidateUpdate);


module.exports = CandidateRoutes;