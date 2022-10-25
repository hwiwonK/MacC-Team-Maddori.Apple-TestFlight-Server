const express = require('express');
const app = express();
const { sequelize } = require('./models');

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
  
module.exports = app;