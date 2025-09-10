const db = require('./index');
module.exports = {
    registerrider: (name,phone,student_id,status,certified_status) => {    //certified_status是认证状态   同时status刚填的时候为null
        return new Promise((resolve, reject) => {    //student_id注意这是学号或者身份证号
            db.query('inert into mcok.rider (name,phone,student_id,status,certified_status) set (?,?,?,?,?)',[name,phone,student_id,status,certified_status],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        })
    },
     auth: (stautus,id) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.rider set certified_status = ? where student_id = ?',[stautus,id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getorderlist: () => {  //进行接单
        return new Promise((resolve, reject) => {
            db.query('select * from mock.user_order',(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
   updateorder: (id,status,riderid) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.user_order set status = ?,rider_id = ? where id = ?',[status,riderid,id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getmyorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.rider where student_id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
   updatefee: (fee,id)=>{
        return new Promise((resolve, reject) => {
            db.query('update mock.rider set total_earnings = total_earnings + ? where student_id = ?',[fee,id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
   },
   getmylistorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.user_order where rider_id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
   },
   delorder: (id) => {
        return new Promise((resolve, reject) => {
            db.query('delete from mock.user_order where rider_id = ?',[id],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
   }
   
}