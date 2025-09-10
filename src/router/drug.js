const express = require('express');
const router = express.Router();
const drug = require('../sql/drug');
const priover = require('../sql/priover');
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
router.post('/updrug',async (req,res)=>{   //提交订单
    try {
        const result = await priover.adddrug(req.body.id,req.body.name,req.body.amount,req.body.unit_price);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '更新失败',
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
