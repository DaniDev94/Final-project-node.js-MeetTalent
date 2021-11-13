const mongoose = require('mongoose');
const JobOffer = require('../models/joboffer.models');
require('dotenv').config();

const jobOffer = [
    {
        city: 'Madrid',
        country: 'Spain',
        availability: 'Total',

        //condiciones
        terms: {
            salary: 20000-25000,
            workingDay: 'Total',
            contract: 'Indefinite'

        },

           //descripción de la oferta
           offerDescription: {
               descriptionOfRequirements: 'Experto en marketing digital para StartUp',
               internalEncodings: 'marketing, digital, SEO, SEM'
           },

           //confirmación
           confirmation: {
               offerTitle: 'Experto Marketing Digital',
               vacancies: 2,
               language: 'Español',
               sector: 'Marketing',
               training: 'College degree',
               offerDescriptionEnterprise:'Buscamos experto en marketing digital para gestionar equipo joven y motiva en startUp'
           }
    },

    {
        city: 'Barcelona',
        country: 'Spain',
        availability: 'Total',

        //condiciones
        terms: {
            salary: 10000-12000,
            workingDay: 'Total',
            contract: 'Partial '

        },

           //descripción de la oferta
           offerDescription: {
               descriptionOfRequirements: 'Dependiente tienda de muebles',
               internalEncodings: 'Dependiente, atención personalizada, atención al detalle'
           },

           //confirmación
           confirmation: {
               offerTitle: 'Dependiente',
               vacancies: 5,
               language: 'Español',
               sector: 'Comercio',
               training: 'Basic studies',
               offerDescriptionEnterprise:'Buscamos perfiles como el tuyo para nueva apertura en las Ramblas'
           }
    },

    {
        city: 'Sevilla',
        country: 'Spain',
        availability: 'Total',

        //condiciones
        terms: {
            salary: 15000-25000,
            workingDay: 'Total',
            contract: 'Partial '

        },

           //descripción de la oferta
           offerDescription: {
               descriptionOfRequirements: 'Bailaor',
               internalEncodings: 'Bailarín, flamenco'
           },

           //confirmación
           confirmation: {
               offerTitle: 'Bailaor',
               vacancies: 3,
               language: 'Español',
               sector: 'Ocio',
               training: 'Basic studies',
               offerDescriptionEnterprise:'Buscamos bailaores para tablón flamenco en Sevilla centro'
           }
    }
]


mongoose
    .connect(process.env.ATLASDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allCandidates = await Candidate.find();
        if (allCandidates.length) {
            await Candidate.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Candidate.insertMany(candidates);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());
