const express = require('express');
const app = express();
const { sequelize } = require('./models');
const models = require("./models/index.js");

app.use(express.json());

sequelize.sync({ force: false })
.then(() => {
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.log('데이터베이스 연결 실패');
    console.error(err);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/css', require('./routes/css'));

// models.css.create({
//     from_name: 'test_from',
//     to_name: 'test_to',
//     type: 'Stop',
//     keyword: 'test_keyword',
//     content: 'test_content',
//     start_content: 'test_start'
// })
// .then(() => {
//     console.log("css data is created!");
// })
// .catch((err) => {
//     console.log("failed to create css data");
//     console.log(err);
// });



// models.css.findAll({
//     attributes: ['keyword']
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log("failed to get keywords");
//     console.log(err);
// })
  
module.exports = app;