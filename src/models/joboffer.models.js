const mongoose = require('mongoose');

const jobofferSchema = new mongoose.Schema(
    {
        field1: {
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

        field2: {
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
        }
    }
)



const JobOffer = mongoose.model('jobOffer', jobofferSchema);
module.exports = JobOffer;






