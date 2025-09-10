const express = require('express');
const router = express.Router();
const atrcircle = require('../sql/atrcirle');
router.get('/getatrcircle',async (req,res) => {
    const result = await atrcircle.getatrcircle();
    res.json({
        code: 200,
        msg: '获取成功',
        data: result
    });
})
router.post('/getcomment/:id',async (req,res) => {
    const result = await atrcircle.getcomment(req.params.id);
    res.json({
        code: 200,
        msg: '获取成功',
        data: result
    });
})
router.post('/add/comment',async(req,res)=>{
    const result =await atrcircle.createcomment(req.body.id,req.body.name,req.body.content,req.body.createtime);
    if(result){
        res.json({
            code: 200,
            msg: '添加成功',
            data: result
        });
    }else{
        res.json({
            code: 400,
            msg: '添加失败',
            data: result
        });
    }
})
module.exports = router;
