const CandidateRoutes = require('express').Router();
const upload = require('../middlewares/file.middleware');

const { getAllCandidates, getCandidateById, postNewCandidate, putCandidateUpdate, deleteCandidate } = require('../controllers/candidate.controller');


CandidateRoutes.get('/', getAllCandidates);
CandidateRoutes.get('/:id', getCandidateById);
CandidateRoutes.post('/', upload.single('image'), postNewCandidate);
CandidateRoutes.put('/:id', putCandidateUpdate);
CandidateRoutes.delete('/:id', deleteCandidate);


module.exports = CandidateRoutes;