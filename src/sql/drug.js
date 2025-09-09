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
    purchase: (id,drugid,num,price,productname) => {
        return new Promise((resolve, reject) => {
            db.query('update mock.drug set stock = stock - ? where id = ?',[num,drugid],(err) => {
                if (err) {
                    reject(err);
                }
            db.query('insert into mock.orders (user_id,product_name,price,quantity) values (?,?,?,?)',[id,drugid,price,num,productname],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
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