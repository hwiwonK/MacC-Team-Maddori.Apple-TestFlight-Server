const express = require('express');
const router = express.Router();

const {css} = require('../models');

//키워드 정보 가져오기
router.get('/keywords', async function(req, res, next) {
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
    } catch (e) {
        res.status(500).send(e);
    }
});

//css 등록
router.post('/', async function(req, res, next) {
    const cssContent = req.body;
    //console.log(cssContent);
    try {
        const createdCss = await css.create(cssContent);
        res.status(201).send(createdCss);
    }
    catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
