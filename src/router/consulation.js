const express = require('express');
const router = express.Router();
const columns = require('../sql/columns');
/*

*/
router.get('/getmessages/:id',async (req,res) => {   //获取咨询对话详细记录
    const id = req.params.id;
   if(!id){
    res.json({
        code:400,
        msg:'参数错误'
    })
   }
   else {
    const result = await columns.getmessages(id);
    res.json({
        code:200,
        msg:'成功',
        data:result
    })
   }
})
router.post('/add/consultation',async (req,res) => {  //添加咨询对话
    const {paid,docid,status,date} = req.body;
    if(!paid || !docid || !status || !date){
        res.json({
            code:400,
            msg:'参数错误'
        })
    }
    else {
        const result = await columns.createcolumns(paid,docid,status,date);
        res.json({
            code:200,
            msg:'成功',
            data:result
        })
    }
})
module.exports = router;