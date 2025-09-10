const express =require('express');
const router = express.Router();
const rider = require('../sql/rider');
router.get('/getorderlist',async (req,res)=>{   //获取订单列表
    try {
        const result = await rider.getorderlist();
        res.json({
            code: 200,
            msg: '获取成功',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.post('/updateorder',async (req,res)=>{   //更新订单状态   目前缺少骑手id
    try {
        const result = await rider.updateorder(req.body.id,req.body.status,req.body.riderid);
        res.json({
            code: 200,
            msg: '更新成功',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '更新失败',
        });
    }
})
router.get('/getmylistorder',async (req,res)=>{   //获取骑手订单列表
    try {
        const result = await rider.getwylistorder(req.body.riderid);
        res.json({
            code: 200,
            msg: '获取成功',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '获取失败',
        });
    }
})
router.delete('/delorder',async (req,res)=>{   //删除订单
    try {
        const result = await rider.delorder(req.body.id);
        res.json({
            code: 200,
            msg: '删除成功',
            data: result
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            code: 500,
            msg: '删除失败',
        });
    }
})
module.exports = router;