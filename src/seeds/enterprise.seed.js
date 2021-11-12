const mongoose = require('mongoose')

const Enterprise= require ('../models/enterprise.models')

require('dotenv').config()

const enterprise = [
    {
        name:'Sunday',
       owner:'Peter Pan'
    },
    {
        name: 'Inindex',
        owner: 'Leoncio Ortega'
    },
];

mongoose
.connect(process.env.ATLASDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
       
    const allEnterprise = await Enterprise.find();
       
    if (allEnterprise.length) {
      await Enterprise.collection.drop(); 
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
        
       
        await Enterprise.insertMany(enterprise);
    })
  .catch((err) => console.log(`Error creating data: ${err}`))
    
  .finally(() => mongoose.disconnect());
