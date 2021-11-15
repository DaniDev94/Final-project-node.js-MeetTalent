const express = require('express');
const { connectWithDb } = require('./utils/db/db');
const EnterpriseRoutes = require('./routes/enterprise.routes');
const CandidateRoutes = require('./routes/candidate.routes');
const JobOfferRoutes = require('./routes/joboffer.routes');
const userRoutes = require('./routes/user.routes')
const cloudinary = require('cloudinary').v2;
require("dotenv").config();




cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})


const PORT = 3000;
const app = express();
connectWithDb()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoutes);
app.use('/enterprise', EnterpriseRoutes);
app.use('/candidates', CandidateRoutes);
app.use('/joboffer', JobOfferRoutes);


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

app.disable("x-powered-by");

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});



