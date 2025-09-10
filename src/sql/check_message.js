const db = require('./index');
module.exports = {
    send: (user_id,content,created_at) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.check_message (user_id,content,created_at) values (?,?,?)',[user_id,content,created_at],(err) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
    get: (user_id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.check_message where user_id = ?',[user_id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
}