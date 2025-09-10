const express =require('express');
const router = express.Router();
const user_rider = require('../sql/user_rider');
//详细的发送消息会写在websocket中
router.post('/createconnect',async (req,res)=>{   //创建连接
    try {
        const result = await user_rider.create(req.body.user_id,req.body.rider_id);
        if(result){
            res.status(200).json({
                code: 200,
                msg: '创建成功',
                data: result,
            });
        }
        else{
            res.status(400).json({
                code: 400,
                msg: '创建失败',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '创建失败',
        });
    }
})
router.get('/getconnect',async (req,res)=>{   //获取全部连接
    try {
        const result = await user_rider.getconnect();
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
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.get('/getdetail/:id',async (req,res)=>{   //获取连接详情
    try {
        const result = await user_rider.getdetail(req.params.id);
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
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
module.exports = router;
