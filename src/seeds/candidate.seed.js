const mongoose = require('mongoose');
const Candidate = require('../models/candidate.model');
require('dotenv').config();


const candidates = [
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636993075/Meettalent/pexels-anna-nekrashevich-6475984_jj4izr.jpg',
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
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636993075/Meettalent/pexels-andrew-dick-697509_v6elxr.jpg',
        name: {
            first: 'Juan',
            last: 'Gomez'
        },
        profession: 'Developer Full Js',
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
        keywords: ['JavaScript', 'Desarrollo', 'React', 'Node.js', 'BEM', 'Meticuloso'],
        training: {
            type: 'Master',
            name: 'Full Stack Developer',
            center: 'Upgrade-Hub'
        }
    },
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636993077/Meettalent/pexels-anthony-shkraba-8192052_qcb7pw.jpg',
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
    },
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636995046/Meettalent/pexels-masha-raymers-2726111_wdx4ph.jpg',
        name: {
            first: 'Alba',
            last: 'Díaz'
        },
        profession: 'Developer Full Stack',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 30,
            address: {
                community: 'Madrid',
                locality: 'Collado Villalba',
                pc: 28400
            },
            phone: 675900468
        },
        keywords: ['Creatividad', 'Tecnología', 'Angular', 'JQuery', 'Pasión', 'Trabajador'],
        training: {
            type: 'Master',
            name: 'Full Stack Developer',
            center: 'Upgrade-hub'
        }
    },
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636995754/Meettalent/pexels-chloe-1043471_b3fl0m.jpg',
        name: {
            first: 'Andrés',
            last: 'Lucero'
        },
        profession: 'UX/UI',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 33,
            address: {
                community: 'Galicia',
                locality: 'Vigo',
                pc: 36201
            },
            phone: 625990268
        },
        keywords: ['Sketch', 'Tecnología', 'Dedicación', 'Diseño', 'Usuario', 'Perfeccionista'],
        training: {
            type: 'Master',
            name: 'UX/UI',
            center: 'Upgrade-hub'
        }
    },
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636996014/Meettalent/pexels-pixabay-415829_xw2mgh.jpg',
        name: {
            first: 'Ines',
            last: 'Arcila'
        },
        profession: 'Ciberseguridad',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 32,
            address: {
                community: 'Murcia',
                locality: 'Lorca',
                pc: 30800
            },
            phone: 621489367
        },
        keywords: ['BBDD', 'Tecnología', 'Prevención', 'Hacking ético', 'Maestria', 'Backdoor'],
        training: {
            type: 'Master',
            name: 'Ciberseguridad, Hacking Ético y Cloud',
            center: 'Upgrade-hub'
        }
    },
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1636996313/Meettalent/pexels-kampus-production-8190818_qf1dpx.jpg',
        name: {
            first: 'Carmen',
            last: 'Casado'
        },
        profession: 'Developer Angular',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 31,
            address: {
                community: 'Pais Vasco',
                locality: 'Bilbao',
                pc: 48001
            },
            phone: 609645234
        },
        keywords: ['Angular', 'Remoto', 'Tecnología', 'Js', 'Pasión', 'Responsable'],
        training: {
            type: 'Master',
            name: 'Full Stack Developer',
            center: 'Upgrade-hub'
        }
    },
    {
        image: 'https://res.cloudinary.com/djj8ooz4d/image/upload/v1637863497/Meettalent/pexels-spencer-selover-428364_z1xxnf.jpg',
        name: {
            first: 'Daniel',
            last: 'Plaza'
        },
        profession: 'Developer Angular',
        networks: ['https://twitter.com/?lang=es', 'https://www.instagram.com/', 'https://es-es.facebook.com/'],
        information: {
            age: 31,
            address: {
                community: 'Madrid',
                locality: 'Las Rozas',
                pc: 28230
            },
            phone: 687341890
        },
        keywords: ['Angular', 'Pasión', 'Tecnología', 'BBDD', 'TypeScript', 'Implicación'],
        training: {
            type: 'Master',
            name: 'Full Stack Developer',
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