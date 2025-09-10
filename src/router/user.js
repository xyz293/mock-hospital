const users = require('../sql/user');
const check_message = require('../sql/check_message');
const priover = require('../sql/priover');
const express = require('express');
const router = express.Router();
const appoint = require('../sql/appoint');
const getToken = require('../middle/token');
router.post('/regiser',async (req,res)=>{
    const {username,password,role} = req.body;
    console.log(username,password,role);
    try {
     if(username && password){
        const result =  await users.adduser(username,password,role);
        console.log(result);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '注册成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '注册失败',
            });
        }
     }
     else{
        res.status(400).json({
            code: 400,
            msg: '注册失败',
        });
     }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '注册失败',
        });
    }
})
router.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    try {
        if(username && password){
            const result = await users.login(username,password);
            if(result){
                const token = getToken.createToken({
                    username: username,
                    password: password,
                });
                res.status(200).json({
                    code: 200,
                    msg: '登录成功',
                    data: result,
                    token: token,
                });
            }
            else{
                res.status(400).json({
                    code: 400,
                    msg: '登录失败',
                });
            }
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '登录失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '登录失败',
        });
    }
})
router.get('/userlist',async (req,res)=>{
    try {
        const result = await users.getuser();
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取用户成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取用户失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取用户失败',
        });
    }
})
router.post('/order',async (req,res)=>{
    try {
        const result = await users.getdrugorder(req.body.id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取订单成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取订单失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取订单失败',
        });
    }
})
router.get('/checkmessage/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const result = await check_message.get(id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取咨询成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取咨询失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取咨询失败',
        });
    }
})
router.post('/myorder',async (req,res)=>{
    try {
        const result = await users.getmyorder(req.body.id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取订单成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取订单失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取订单失败',
        });
    }
})
router.delete('/outdrug/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const result = await priover.outdrug(id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '删除成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '删除失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '删除失败',
        });
    }
})
router.get('/myappoint/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const result = await appoint.getpersonappoint(id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取订单成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取订单失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取订单失败',
        });
    }
})
module.exports = router;
