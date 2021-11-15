const mongoose = require('mongoose');
const JobOffer = require('../models/joboffer.models');
require('dotenv').config();
const jobOffer = [
    {
        jobInformation: {
            offerTitle: 'Devoloper',
            city: 'Madrid',
            country: 'Spain'
        },
        jobDescription: {
            availability: 'Total',
            salary: 20000,
            workingDay: 'Remote',
            contract: 'Indefinite',
            vacancies: 2,
            language: 'Spanish'
        }
    },

    {
        jobInformation: {
            offerTitle: 'Devoloper',
            city: 'Madrid',
            country: 'Spain'
        },
        jobDescription: {
            availability: 'Total',
            salary: 20000,
            workingDay: 'Remote',
            contract: 'Indefinite',
            vacancies: 2,
            language: 'Spanish'
        }
    },
    {
        jobInformation: {
            offerTitle: 'Devoloper',
            city: 'Jaén',
            country: 'Spain'
        },
        jobDescription: {
            availability: 'Total',
            salary: 25000,
            workingDay: 'Total',
            contract: 'Indefinite',
            vacancies: 1,
            language: 'Spanish'
        }
    },
    {
        jobInformation: {
            offerTitle: 'Devoloper',
            city: 'Bacercelona',
            country: 'Spain'
        },
        jobDescription: {
            availability: 'Total',
            salary: 17000,
            workingDay: 'Total',
            contract: 'Indefinite',
            vacancies: 4,
            language: 'Catalan'
        }
    }

]

mongoose
    .connect(process.env.ATLASDBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allJobOffer = await JobOffer.find();
        if (allJobOffer.length) {
            await JobOffer.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await JobOffer.insertMany(jobOffer);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());
