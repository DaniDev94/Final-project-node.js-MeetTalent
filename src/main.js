const express = require('express')
const { connectWithDb } = require('./utils/db/db')


const PORT = 3000;
const app = express();

connectWithDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('*', (req, res) => {
    return res.status(404).send('Route not found')
})

app.listen(PORT, () => {
    console.log('Server is running in http://localhost:'+PORT)
})




