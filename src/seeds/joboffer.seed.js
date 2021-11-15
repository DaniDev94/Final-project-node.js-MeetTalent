const mongoose = require('mongoose');
const JobOffer = require('../models/joboffer.models');
require('dotenv').config();
const jobOffer = [
    {
        jobInformation: {
            jobTitle: 'Developer Angular',
            vacancyNumbers: 2,
            languages:'Ingles medio',
            sector: 'Desarrollo Web',
            training: 'Grado Medio',
            jobDescription: 'Buscamos un desarrolladro ANGULAR WEB con al menos 3 años de experiencia para importante proyecto.',
            terms: {
                salary: 20000,
                workingHours: 40,
                contract: 'Indefinido'
            }
        }
    },
    {
        jobInformation: {
            jobTitle: 'Diseñador/a UX/UI',
            vacancyNumbers: 2,
            languages:'Ingles Alto',
            sector: 'Diseño Ux/Ui',
            training: 'Master',
            jobDescription: 'Si quieres formar parte de un gran equipo de diseño y adentrarte en el mundo de la experiencia de usuario, este es tu lugar. Ofrecemos estabilidad, salario competente y gran ambiente de trabajo',
            terms: {
                salary: 22000,
                workingHours: 40,
                contract: 'Indefinido'
            }
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
