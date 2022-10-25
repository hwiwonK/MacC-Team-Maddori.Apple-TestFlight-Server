const express = require('express');
const router = express.Router();

const {css} = require('../models');



//키워드 정보 가져오기
router.get('/keywords', async function(req, res, next) {
    console.log("키워드 가져오기");
    try {
        const keywordList = await css.findAll({
            attributes: ['keyword'],
            raw:true
        });
        res.status(200).send(keywordList);
        console.log("키워드 가져오기 성공");
        console.log(keywordList);
    } catch (e) {
        res.status(400).send(e);
        console.log("키워드 가져오기 실패");
        console.log(e);
    }
});

//css 등록
// router.post('/', async function(req, res, next) {
//   console.log("css 등록");

//   console.log(req.body.query);

//   var fileList = await file.findAll({
//     where: {
//       userId: req.session.passport.user
//     },
//     include: [{
//       model: keyword, 
//       where: {
//         keywordname: req.body.query
//       }
//     }]
//   });
// });


module.exports = router;
