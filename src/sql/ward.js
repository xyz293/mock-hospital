const db = require('../sql/index');
module.exports = {
     createward: (total,name) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.ward (total,name) values (?,?)',[total,name],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },
    createbed: (ward_id,status,patient_id,bed_no) => {
        return new Promise((resolve, reject) => {
            db.query('insert into mock.beds (ward_id,status,patient_id,bed_no) values (?,?,?,?)',[ward_id,status,patient_id,bed_no],(err,result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
            });
    },
    

}