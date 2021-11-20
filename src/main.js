const express = require('express');
const { connectWithDb } = require('./utils/db/db');
const CandidateRoutes = require('./routes/candidate.routes');
const JobOfferRoutes = require('./routes/joboffer.routes');
const userRoutes = require('./routes/user.routes');
const cloudinary = require('cloudinary').v2;
const { isAuth } = require('./middlewares/auth.middleware');
require("dotenv").config();

const cors=require('cors')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})



const PORT = 4000;
const app = express();
connectWithDb();

app.use((req, res, next) => {y
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:3001'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/joboffer',[isAuth], JobOfferRoutes);
app.use('/candidates',[isAuth], CandidateRoutes);


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



