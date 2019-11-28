const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsDir = path.join(__dirname, '../models')

mongoose.connect('mongodb://localhost/rate_my_cakes', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useNewUrlParser: true
});

mongoose.connection.once('connected', () => console.log("Connected to MongoDB"));

fs.readdirSync(modelsDir)
.filter(file => file.endsWith('.js'))
.forEach(file => require(path.join(modelsDir, file)))