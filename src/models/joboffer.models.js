const mongoose = require('mongoose');

const jobofferSchema = new mongoose.Schema(
    {
        city: {type:String, 
               required: true, 
               unique:true, 
               trim:true},
        country: {type:String, 
                  required: true, 
                  unique:true, 
                  trim:true},
        availability: {type:String, 
                       required:true, 
                       unique:true,  
                       trim:true},
        
        //condiciones
    
    terms: {
        salary: {
            type: Number,
            required:true,
            trim:true
        },
        workingDay: {
            type: String,
            required:true,
            trim:true
        },
        contract: {
            type: String,
            required: true,
            trim: true
        }
    },

    //descripción de la oferta

    offerDescription: {
        descriptionOfRequirements: {
            type: String,
            required: true,
            trim: true
        },
        internalEncodings: {
            type: String,
            required: true,
            trim: true
        }
    },

    //confirmación
    confirmation: {
        offerTitle: {
            type: String,
            required:true,
            unique:true,
            trim: true
        },
        vacancies:{
            type: Number,
            required:true,
            trim:true
        },
        language: {
            type: String,
            required: true,
            trim: true
        },
        sector: {
            type: String,
            required: true,
            trim: true
        },
        training: {
            type: String,
            required: true,
            trim: true
        },
        offerDescriptionEnterprise: {
            type: String,
            required: true,
            trim:  true
        }
    }
},
)


const JobOffer = mongoose.model('jobOffer', jobofferSchema);
module.exports = JobOffer;






