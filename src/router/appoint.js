const express = require('express');
const router = express.Router();
const getToken = require('../middle/token');
const appoint = require('../sql/appoint');
router.post('/appoint',async (req,res)=>{
    try{
        const result = await appoint.createappoint(req.body.name,req.body.time,req.body.docid,req.body.urgent);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '创建成功',
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '创建失败',
            });
        }
    }
    catch(err){
        res.status(500).json({
            code: 500,
            msg: '创建失败',
        });
    }
})
router.get('/appoint',async (req,res)=>{
    try{
        const result = await appoint.getappoint();
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取成功',
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取失败',
            });
        }
    }
    catch(err){
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.post('/appoint/urgent',async (req,res)=>{
    try{
        const result = await appoint.urgentappoint(req.body.id,req.body.urgent);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '更新成功',
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '更新失败',
            });
        }
    }
    catch(err){
        res.status(500).json({
            code: 500,
            msg: '更新失败',
        });
    }
})
router.post('/appoint/paid',async (req,res)=>{
    try{
        const result = await appoint.paidappoint(req.body.amount,req.body.paid,req.body.type,req.body.status,req.body.paid_method,req.body.description,req.body.create_at);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '更新成功',
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '更新失败',
            });
        }
    }
    catch(err){
        res.status(500).json({
            code: 500,
            msg: '更新失败',
        });
    }
})
module.exports = router;