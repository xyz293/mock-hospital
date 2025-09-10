const db = require('./index');
module.exports = {
    create: (user_id,rider_id) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.connect_user_rider (user,rider) values (?,?)',[user_id,rider_id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getconnect: () => {
        return new Promise((resolve, reject) => {    //获取全部连接
            db.query('select * from mock.connect_user_rider',[],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    createmessage: (conid,content,role)=>{     //创建消息
        return new Promise((resolve, reject) => {
            db.query('insert into mock.message_user_rider (connectid,content,role) values (?,?,?)',[conid,content,role],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getdetail: (id) => {
        return new Promise((resolve, reject) => {    //获取连接详情
            db.query('select * from mock.message_user_rider where id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    }
}
