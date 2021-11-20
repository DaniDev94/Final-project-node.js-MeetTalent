const mongoose = require('mongoose');



const jobofferSchema = new mongoose.Schema(
    {
        jobInformation: {
            jobTitle: {
                type: String,
                trim: true,
                required: true
            },
            vacancyNumbers: {
                type: Number,
            },
            city: {
                type: String,
                trim: true,
            },
            languages: {
                type: String,
                trim: true,
            },
            sector: {
                type: String,
                enum: ['Diseño Ux/Ui', 'Desarrollo Web', 'Ciberseguridad'],
                trim: true,
            },
            training: {
                type: String,
                enum: ['Grado Medio', 'Grado Superior', 'Master', 'Licenciatura', 'Sin formación'],
                trim: true,
            },
            jobDescription: {
                type: String,
                trim: true,
            },
            terms: {
                salary: {
                    type: Number,
                    require: true
                },
                workingHours: {
                    type: Number,
                    require: true
                },
                contract: {
                    type: String,
                    trim: true,
                }
            }
        },
        user: { type: mongoose.Types.ObjectId, ref: 'users' }
    }, { timestamps: true });


const JobOffer = mongoose.model('joboffer', jobofferSchema);
module.exports = JobOffer;





