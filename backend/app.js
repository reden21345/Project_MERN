const express = require('express');
const app = express();


const coffees = require('./routes/coffees');
app.use(express.json());
app.use('/api/v1', coffees);
module.exports = app;