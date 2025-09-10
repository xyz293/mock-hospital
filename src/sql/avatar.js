const db = require('../sql/index');
module.exports = {
    getavatar: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.avatar',(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
}