const mongoose = require('mongoose');
const Candidate = require('../models/candidate.model');
require('dotenv').config();


const candidates = [
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