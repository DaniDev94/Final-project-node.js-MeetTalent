const Candidate = require('../models/candidate.model');


const getAllCandidates = async (req, res, next) => {
    try {
        const allCandidates = await Candidate.find();
        return res.status(200).json(allCandidates);
    } catch (err) {
        err.message = 'Candidates not found';
        return next(`Error: ${err}.`);
    }
}


const getCandidateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const candidateById = await Candidate.findById(id);
        return res.status(200).json(candidateById)
    } catch (err) {
        err.message = 'No candidate found with this id';
        return next(`Error: ${err}.`);
    }
}


const deleteCandidate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCandidate = await Candidate.findByIdAndDelete(id);
        return res.status(200).json(deleteCandidate);
    } catch (err) {
        err.message = 'Candidate not found, could not be removed';
        return next(`Error: ${err}.`);
    }
}
const getCandidateByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const candidateByName = await Candidate.findOne({"name.first":name});
        return res.status(200).json(candidateByName)
    } catch (err) {
        err.message = 'No candidate found with this name';
        return next(`Error: ${err}.`);
    }
}



module.exports = {
    getAllCandidates,
    getCandidateById,
    
    deleteCandidate,
    getCandidateByName
}