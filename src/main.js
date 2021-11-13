const express = require('express');
const EnterpriseRoutes = require('./routes/enterprise.routes');
const CandidateRoutes = require('./routes/candidate.routes');

const { connectWithDb } = require('./utils/db/db');

const cloudinary = require('cloudinary').v2;
require("dotenv").config();
const PORT = 3000;
const app = express();
connectWithDb()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/enterprise', EnterpriseRoutes);
app.use('/candidates', CandidateRoutes);


app.use('*', (req, res) => {
    return res.status(404).send('Route not found');
});

app.use((req, res, next) =>{
    let err = new Error();
    err.status = 404;
    err.message = 'Unexpected error';
    next(err);
}
);


app.listen(PORT, () => {
    console.log('Server is running in http://localhost:'+PORT);
});



