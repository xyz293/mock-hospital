const db = require('./index');
module.exports = {
    create: (paid,docid,content) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.message (paid,docid,content) values (?,?,?)',[paid,docid,content],
                (err,result)=>{
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                               
            })
        })
    },
    send: (id) => { //对方可以在自己的消息列表中查看，这个专门在列表一直发送请求
        return new Promise((resolve, reject) => {
            db.query('select * from mock.user where id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    }
}