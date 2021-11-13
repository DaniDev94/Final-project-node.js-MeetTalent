const mongoose = require('mongoose');
const Candidate = require('../models/candidate.model');
require('dotenv').config();


const candidates = [
    {
        image: 'https://images.pexels.com/photos/6475984/pexels-photo-6475984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: {
            first: 'Sofia',
            last: 'Andara'
        },
        profession: 'UX/UI',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 26,
            address: {
                community: 'Madrid',
                locality: 'Capital',
                pc: 28008
            },
            phone: 672540468
        },
        keywords: ['UX/UI', 'Tecnología', 'Sketch', 'Equipo', 'WordPress', 'Dedicación'],
        training: {
            type: 'Master',
            name: 'UX/UI',
            center: 'Upgrade-hub'
        }
    },
    {
        image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: {
            first: 'Juan',
            last: 'Gomez'
        },
        profession: 'Chef',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 30,
            address: {
                community: 'Cataluña',
                locality: 'Barcelona',
                pc: 08001
            },
            phone: 622924467
        },
        keywords: ['Arte', 'Gastronomía', 'Pasión', 'Nouvelle cuisine', 'Concursos', 'Meticuloso'],
        training: {
            type: 'CFGM',
            name: 'Cocina y Gastronomía',
            center: 'I.E.S María de Zayas y Sotomayor'
        }
    },
    {
        image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: {
            first: 'Jorge',
            last: 'Cifuentes'
        },
        profession: 'Ciberseguridad',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 32,
            address: {
                community: 'Madrid',
                locality: 'Alcobendas',
                pc: 28100
            },
            phone: 675900468
        },
        keywords: ['Creatividad', 'Tecnología', 'Pasión', 'Hacking ético', 'Cloud', 'Trabajador'],
        training: {
            type: 'Master',
            name: 'Ciberseguridad, Hacking Ético y Cloud',
            center: 'Upgrade-hub'
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