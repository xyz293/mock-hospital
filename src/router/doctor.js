const chech_message =require('../sql/check_message')
const doctor = require('../sql/doctor')
const express = require('express')
const router = express.Router()
router.post('/checkmessage',async (req,res)=>{
    try {
        const result = await chech_message.send(req.body.user_id,req.body.content,req.body.created_at);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '咨询成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '咨询失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '咨询失败',
        });
    }
})
router.get('/getlist',async (req,res)=>{
    try {
        const result = await doctor.getlist();
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.get('/class/tag',async (req,res)=>{
    try {
        const result = await doctor.classpecialization(req.query.specialization);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.get('/department',async (req,res)=>{
    try {
        const result = await doctor.getdepartment();
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.post('/departmentdoctors',async (req,res)=>{
    try {
        const result = await doctor.getdepartmentdoctors(req.body.id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '获取成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '获取失败',
            });
        }
    } catch (err) {
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
module.exports = router
