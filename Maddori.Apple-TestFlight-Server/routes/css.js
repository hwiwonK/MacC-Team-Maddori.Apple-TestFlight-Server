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
        //배열로 바꾸기
        const result = {
            keywords : keywordList.map((data) => data.keyword)
        }
        res.status(200).send(result);
        console.log("키워드 가져오기 성공");
        console.log(result);
    } catch (e) {
        res.status(500).send(e);
        console.log("키워드 가져오기 실패");
        console.log(e);
    }
});

//css 등록
router.post('/', async function(req, res, next) {
    console.log("css 등록");
    const cssContent = req.body;
    console.log(cssContent);
    
    try {
        const createdCss = await css.create(cssContent);
        res.status(201).send(createdCss);
        console.log("css 등록 성공");
        console.log(createdCss);
    }
    catch (e) {
        res.status(500).send(e);
        console.log("css 등록 실패");
        console.log(e);
    }
});


module.exports = router;
