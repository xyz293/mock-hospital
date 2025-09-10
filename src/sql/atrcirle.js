const db = require('../sql/index');
module.exports = {
    getatrcircle: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.article',(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getcomment: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.comment where article_id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    createcomment: (id, name, content,createtime) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.comment (article_id,user,content,createtime) values (?,?,?,?)',[id, name, content,createtime],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    }
}