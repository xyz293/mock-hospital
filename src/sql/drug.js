const db = require('../sql/index');
module.exports = {
    adddrug: (name,price,stock,avatar,expiryDate) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.drug (name,price,stock,avatar,expiryDate) values (?,?,?,?,?)',[name,price,stock,avatar,expiryDate],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    getdrug: () => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.drug',(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
     /*发药操作*/
    dispense : (drugid,num) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.drug set stock = stock - ? where id = ?',[num,drugid],(err,result) => {
                if (err) {
                    reject(err);
                }
            resolve(result);
            });
        })
    },
    search: (name) => {
        return new Promise((resolve, reject) => {
            db.query('select * from mock.drug where name like ?',  [`%${name}%`],(err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },

}