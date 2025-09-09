const jwt = require('jsonwebtoken');
const config = require('../config/default');
module.exports = {
    createToken: (user) => {
        return jwt.sign(user, config.db.secret, {
            expiresIn: config.db.expiresIn,
        });
    },
    verifyToken: (req,res,next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const db = jwt.verify(token, config.db.secret);
            req.user = db;
            next();
        } catch (err) {
            res.status(401).json({
                code: 401,
                msg: 'token失效',
            });
        }
    },
}