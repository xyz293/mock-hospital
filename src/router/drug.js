const express = require('express');
const router = express.Router();
const drug = require('../sql/drug');
router.get('/get',async (req,res)=>{
    try {
        const result = await drug.getdrug();
        console.log(result);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取药品成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取药品失败',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '获取药品失败',
        });
    }
})
router.post('/purchase',async (req,res)=>{
    try {
        const result = await drug.purchase(req.body.id,req.body.drugid,req.body.num,req.body.price,req.body.productname);
        console.log(result);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '购买成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '购买失败',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '购买失败',
        });
    }
})
router.post('/search',async (req,res)=>{
    try {
        const result = await drug.search(req.body.name);
        console.log(req.body.name);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '搜索成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '搜索失败',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '搜索失败',
        });
    }
})
module.exports = router;
