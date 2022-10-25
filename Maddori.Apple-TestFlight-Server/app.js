const express = require('express');
const app = express();
const { sequelize } = require('./models');
const models = require("./models/index.js");

app.use(express.json());

sequelize.sync({ force: false });

app.get('/', (req, res) => {
    res.send('This is maddori-apple testflight server');
});

app.use('/css', require('./routes/css'));
  
module.exports = app;