const mongoose = require('mongoose');


const jobofferSchema = new mongoose.Schema(
    {
        jobInformation: {
            offerTitle: {
                type: String,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            country: {
                type: String,
                required: true,
                trim: true
            },
        },
        jobDescription: {
            availability: {
                type: String,
                trim: true
            },
            salary: {
                type: Number,
                required: true,
                trim: true
            },
            workingDay: {
                type: String,
                required: true,
                trim: true
            },
            contract: {
                type: String,
                required: true,
                trim: true
            },
            vacancies: {
                type: Number,
                required: true,
                trim: true
            },
            language: {
                type: String,
                required: true,
                trim: true
            },
        },
        user: {type: mongoose.Types.ObjectId, ref: 'users'}
    }, { timestamps: true });


const JobOffer = mongoose.model('joboffer', jobofferSchema);
module.exports = JobOffer;





