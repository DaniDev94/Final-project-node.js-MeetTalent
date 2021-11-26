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

const postNewCandidate = async (req, res, next) => {
    try {
        const newCandidate = new Candidate(req.body);
        const candidateSave = await newCandidate.save();
        return res.status(200).json(candidateSave);
    } catch (err) {
        err.message = 'The new candidate cannot be created, it may already exist';
        return next(`Error: ${err}.`);
    }
}

const putCandidateUpdate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const varyCandidate = new Candidate(req.body);
        varyCandidate._id = id;
        const updateCandidate = await Candidate.findByIdAndUpdate(id, varyCandidate);
        return res.status(200).json(updateCandidate);
    } catch (err) {
        err.message = 'Candidate not found, cannot be updated';
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
    postNewCandidate,
    putCandidateUpdate,
    deleteCandidate,
    getCandidateByName
}