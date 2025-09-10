const db = require('./index');
module.exports = {
   adddrug: (id,name,amount,unit_price) => {
    return new Promise((resolve, reject) => {
        db.query('inert into mock.paitentdrug (paid, name, amount,unit_price) set (?,?,?,?)',[id,name,amount,unit_price],(err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
   },
   addbeds: (id,detail) => {
    return new Promise((resolve, reject) => {
        db.query('inert into mock.paitentbeds (paid, detail) set (?,?)',[id,detail],(err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
   },
   outdrug: (id) => {
    return new Promise((resolve, reject) => {
        db.query('delete from mock.paitentdrug where paid = ?',[id],(err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
   }
}