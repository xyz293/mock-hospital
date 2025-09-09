const db = require('./index');
module.exports = {
     createappoint:(name,time,docid,urgent,status,)=>{
            return new Promise((resolve, reject) => {
                db.query('insert into mock.appoint (patient_name,time,doctor_id,urgent,status) values (?,?,?,?,?)',[name,time,docid,urgent,status],(err,result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                })
            })
     },//创建预约信息
    getappoint: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.appoint',(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });// 获取预约信息
    },
    deleteappoint: (id) => {
        return new Promise((resolve, reject) => {
            db.query('delete from mock.appoint where id = ?',[id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },//删除预约信息
    urgentappoint: (id,urgent) => { //urgent是字符串
        return new Promise((resolve, reject) => {
            db.query('update mock.appoint set urgent = ? where id = ?',[urgent,id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });//挂急诊
    },
    updateappoint: (id,status) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.appoint set status = ? where id = ?',[status,id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },//更新预约信息
    endappoint: (id,status) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.appoint set status = ? where id = ?',[status,id],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },
}//结束预约