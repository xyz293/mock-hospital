const express = require('express');
const router = express.Router();
const avatar = require('../sql/avatar');
router.get('/getavatar',async (req,res) => {
    const result = await avatar.getavatar();
    res.json({
        code: 200,
        msg: '获取成功',
        data: result
    });
})
module.exports = router;