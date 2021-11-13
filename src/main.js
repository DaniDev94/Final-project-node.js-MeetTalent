const express = require('express');
const EnterpriseRoutes = require('./routes/enterprise.routes');
const CandidateRoutes = require('./routes/candidate.routes');

const userRoutes = require('./routes/user.routes')

const { connectWithDb } = require('./utils/db/db');


const PORT = 3000;
const app = express();

connectWithDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/enterprise', EnterpriseRoutes);
app.use('/candidates', CandidateRoutes);


app.use('/users', userRoutes)
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



